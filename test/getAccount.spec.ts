import { expect } from 'chai';
import {getAccount} from "../api/account/getAccount";
import {AccountData} from "aptos/dist/generated";
import {getAccountTransactions} from "../api/account/getAccountTxs";
import {AptosClient, Types} from "aptos";
import {getAccountResources} from "../api/account/getAccountResources";
import {getAccountModules} from "../api/account/getAccountModules";
import {DEVNET_NODE_URL} from "../api/constants";

const SAMPLE_ACCOUNT = "0x798ee2d77e293413b2b6b7fe0442521adcb0a58fd52ca0c85cee9caae756c363";

describe("getAccount test", async() => {
    let aptosClient;

    beforeEach(async() => {
        aptosClient = new AptosClient(DEVNET_NODE_URL);
    });

    it("should get account information", async() => {
        // when
        const account: AccountData = await getAccount({address: SAMPLE_ACCOUNT}, aptosClient);

        // then
        expect(account.authentication_key === SAMPLE_ACCOUNT);
    })

    it("should return transactions by getting Account", async() => {
        // when
        const accountTxs: Types.Transaction[] = await getAccountTransactions({address: SAMPLE_ACCOUNT}, aptosClient);

        // then
        accountTxs.map(tx => {
            expect(tx['sender'] === SAMPLE_ACCOUNT);
        })
    })

    it("should return account resources", async() => {
        // given
        const accountType = '0x1::account::Account';

        // when
        const accountResources: Types.MoveResource[] = await getAccountResources({address: SAMPLE_ACCOUNT}, aptosClient);

        // then
        const accountData = accountResources.find(resource => {
            if (resource.type === accountType) {
                return resource;
            }
        })

        if (accountData) {
            expect(accountData['data']['authentication_key'] === SAMPLE_ACCOUNT);
            return;
        }

        throw new Error('Account resource not found');
    });

    it("should return account modules", async() => {
        // given

        // when
        const accountModules: Types.MoveModuleBytecode[] = await getAccountModules({address: SAMPLE_ACCOUNT}, aptosClient);

        // then
        accountModules.map(resource => {
            if (!resource['abi']) {
                throw new Error('There is no account module.')
            }
            expect(resource['abi']['address'] === SAMPLE_ACCOUNT);
        })
    })
})
