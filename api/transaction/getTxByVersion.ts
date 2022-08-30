/*
    A version is also called “height” in blockchain literature.
    The Aptos Blockchain doesn't have an explicit notion of a block. it only uses blocks for batching and executing transactions.
    A transaction at height 0 is the first transaction (genesis transaction), and a transaction at height 100 is the 101st transaction in the transaction store.
 */

import {AptosClient, Types} from "aptos";
import {withResponseError} from "../response/WithResponseError";

export async function getTransactionByVersion(version: number, aptosClient: AptosClient): Promise<Types.Transaction> {
    return withResponseError(aptosClient.getTransactionByVersion(version));
}