import {AptosClient, Types} from "aptos";
import {withResponseError} from "../response/WithResponseError";

export const getAccountModules = async (
    requestParams: {
        address: string
        ledgerVersion?: number
    },
    aptosClient: AptosClient
): Promise<Types.MoveModuleBytecode[]> => {
    const { address, ledgerVersion } = requestParams;
    const ledgerVersionWrappedBigInt = ledgerVersion ? BigInt(ledgerVersion) : undefined;
    return withResponseError(aptosClient.getAccountModules(address, {
        ledgerVersion: ledgerVersionWrappedBigInt
    }));
}
