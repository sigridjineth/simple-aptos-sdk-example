import { expect } from 'chai';
import {getAccount} from "../api/account/getAccount";
import {AccountData} from "aptos/dist/generated";
import {getAccountTransactions} from "../api/account/getAccountTxs";
import {AptosClient, Types} from "aptos";
import {getAccountResources} from "../api/account/getAccountResources";

const DEVNET_NODE_URL = "https://fullnode.devnet.aptoslabs.com";
const SAMPLE_ACCOUNT = "0xe31b07ca3a84c16e962297611e3b19768846a94ba6181e62e00d21f37a34b9d1";

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
})
