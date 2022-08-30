import {AptosClient, Types} from "aptos";
import {withResponseError} from "../response/WithResponseError";

export const getAccountResources = async (
    requestParams: {
        address: string
        ledgerVersion?: number
    },
    aptosClient: AptosClient
): Promise<Types.MoveResource[]> => {
    const { address, ledgerVersion } = requestParams;
    const ledgerVersionWrappedBigInt = ledgerVersion ? BigInt(ledgerVersion) : undefined;
    return withResponseError(aptosClient.getAccountResources(address, {
        ledgerVersion: ledgerVersionWrappedBigInt
    }));
}