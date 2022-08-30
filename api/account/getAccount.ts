import {AptosClient, Types} from "aptos";
import {withResponseError} from "../response/WithResponseError";

export const getAccount = async (
    requestParams: {
        address: string
    },
    aptosClient: AptosClient
): Promise<Types.AccountData> => {
    const { address } = requestParams;
    return withResponseError(aptosClient.getAccount(address));
}