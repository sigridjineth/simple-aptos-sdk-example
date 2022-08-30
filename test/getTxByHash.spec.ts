import {getTxByHash} from "../api/getTxByHash";
import { expect } from 'chai';

const DEVNET_NODE_URL = "https://fullnode.devnet.aptoslabs.com";
const SAMPLE_HASH = "0x0ae3f016003c91cf175d4c8bb793e32a2ef13cfda6898373fc484c88b7cbbe79";

describe("Getting Transaction By Hash", () => {
    it("should get a transaction by hash", async () => {
        // when
        const receipt = await getTxByHash(SAMPLE_HASH, DEVNET_NODE_URL);

        // then
        expect(receipt.hash === SAMPLE_HASH);
    });
});