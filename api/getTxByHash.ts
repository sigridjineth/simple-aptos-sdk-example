import {AptosClient, Types} from "aptos";
import {withResponseError} from "./response/WithResponseError";

export const getTxByHash = async (hash: string, nodeUrl: string): Promise<Types.Transaction> => {
    const aptosClient = new AptosClient(nodeUrl);
    return withResponseError(aptosClient.getTransactionByHash(hash));
}
