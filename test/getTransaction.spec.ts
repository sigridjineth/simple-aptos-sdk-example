import {getTransactionByHash} from "../api/getTxByHash";
import { expect } from 'chai';
import {getTransactionByVersion} from "../api/getTxByVersion";

const DEVNET_NODE_URL = "https://fullnode.devnet.aptoslabs.com";
const SAMPLE_HASH = "0x0ae3f016003c91cf175d4c8bb793e32a2ef13cfda6898373fc484c88b7cbbe79";
const SAMPLE_VERSION_ID = 25009323;

describe("Getting Transaction By Hash", () => {
    it("should get a transaction by hash", async () => {
        // when
        const receipt = await getTransactionByHash(SAMPLE_HASH, DEVNET_NODE_URL);

        // then
        expect(receipt.hash === SAMPLE_HASH);
    });

    it("should get a transaction by last version", async () => {
        // when
        const receipt = await getTransactionByVersion(SAMPLE_VERSION_ID, DEVNET_NODE_URL);

        // then
        expect(receipt['version'] === SAMPLE_VERSION_ID);
    })
});