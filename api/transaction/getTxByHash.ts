import {AptosClient, Types} from "aptos";
import {withResponseError} from "./response/WithResponseError";

export const getTransactionByHash = async (hash: string, aptosClient: AptosClient): Promise<Types.Transaction> => {
    return withResponseError(aptosClient.getTransactionByHash(hash));
}
