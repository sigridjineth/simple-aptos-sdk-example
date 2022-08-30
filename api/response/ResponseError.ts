import {ResponseErrorType} from "./ResponseErrorType";

export type ResponseError = { type: ResponseErrorType.NOT_FOUND } | { type: ResponseErrorType.UNCHECKED };