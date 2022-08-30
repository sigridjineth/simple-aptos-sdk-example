/*
    A version is also called “height” in blockchain literature.
    The Aptos Blockchain doesn't have an explicit notion of a block. it only uses blocks for batching and executing transactions.
    A transaction at height 0 is the first transaction (genesis transaction), and a transaction at height 100 is the 101st transaction in the transaction store.
 */

import {AptosClient, Types} from "aptos";
import {withResponseError} from "./response/WithResponseError";

export async function getTransactionByVersion(version: number, nodeUrl: string): Promise<Types.Transaction> {
    const aptosClient = new AptosClient(nodeUrl);
    return withResponseError(aptosClient.getTransactionByVersion(version));
}