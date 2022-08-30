import {AptosClient, Types} from "aptos";
import {withResponseError} from "../response/WithResponseError";

export const getAccountTransactions = async (
    requestParams: {
        address: string
        start?: number
        limit?: number
    },
    aptosClient: AptosClient
): Promise<Types.Transaction[]> => {
    const { address, start, limit } = requestParams;
    const bigIntWrappedStart: BigInt = start ? BigInt(start) : undefined;
    return await withResponseError(aptosClient.getTransactions({
        start: bigIntWrappedStart,
        limit
    }));
}
