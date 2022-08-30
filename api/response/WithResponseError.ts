import {ResponseErrorType} from "./ResponseErrorType";

export async function withResponseError<T>(promisedResponse: Promise<T>): Promise<T> {
    try {
        return await promisedResponse;
    } catch (error) {
        console.log('withResponseErr', error);

        if ("status" in error && error.status === 404) {
            throw {
                type: ResponseErrorType.NOT_FOUND
            }
        }

        throw {
            type: ResponseErrorType.UNCHECKED,
            message: error.toString()
        }
    }
}