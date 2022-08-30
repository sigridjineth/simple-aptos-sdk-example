import { expect } from 'chai';
import {getAccount} from "../api/getAccount";
import {AccountData} from "aptos/dist/generated";
import {getAccountTransactions} from "../api/getAccountTxs";
import {AptosClient, Types} from "aptos";

const DEVNET_NODE_URL = "https://fullnode.devnet.aptoslabs.com";
const SAMPLE_ACCOUNT = "0xe31b07ca3a84c16e962297611e3b19768846a94ba6181e62e00d21f37a34b9d1";

describe("getAccount test", async() => {
    it("should get account information", async() => {
        // given
        const aptosClient = new AptosClient(DEVNET_NODE_URL);

        // when
        const account: AccountData = await getAccount({address: SAMPLE_ACCOUNT}, aptosClient);

        // then
        expect(account.authentication_key === SAMPLE_ACCOUNT);
    })

    it("should return transactions by getting Account", async() => {
        // given
        const aptosClient = new AptosClient(DEVNET_NODE_URL);

        // when
        const accountTxs: Types.Transaction[] = await getAccountTransactions({address: SAMPLE_ACCOUNT}, aptosClient);

        // then
        accountTxs.map(tx => {
            expect(tx['sender'] === SAMPLE_ACCOUNT);
        })
    })
})
