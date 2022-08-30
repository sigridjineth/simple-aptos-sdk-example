import {getTransactionByHash} from "../api/transaction/getTxByHash";
import { expect } from 'chai';
import {getTransactionByVersion} from "../api/transaction/getTxByVersion";
import {Transaction} from "aptos/dist/generated";
import {AptosClient} from "aptos";

const DEVNET_NODE_URL = "https://fullnode.devnet.aptoslabs.com";
const SAMPLE_HASH = "0x0ae3f016003c91cf175d4c8bb793e32a2ef13cfda6898373fc484c88b7cbbe79";
const SAMPLE_VERSION_ID = 25009323;

describe("Getting Transaction By Hash", () => {
    it("should get a transaction by hash", async () => {
        // given
        const aptosClient = new AptosClient(DEVNET_NODE_URL);

        // when
        const receipt: Transaction = await getTransactionByHash(SAMPLE_HASH, aptosClient);

        // then
        expect(receipt.hash === SAMPLE_HASH);
    });

    it("should get a transaction by last version", async () => {
        // given
        const aptosClient = new AptosClient(DEVNET_NODE_URL);

        // when
        const receipt: Transaction = await getTransactionByVersion(SAMPLE_VERSION_ID, aptosClient);

        // then
        expect(receipt['version'] === SAMPLE_VERSION_ID);
    })
});