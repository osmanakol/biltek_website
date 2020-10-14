import { BaseError, ErrorType, ResponseStatus } from "./baseError";
export class UserFacingError extends BaseError{
    constructor(type:ErrorType,statusCode:ResponseStatus){
        super(type,statusCode)
    }
    static throw(type:ErrorType):BaseError{
        let statusCode:ResponseStatus
        switch(type){
            case ErrorType.BAD_REQUEST:
                statusCode=ResponseStatus.BAD_REQUEST
                break
            case ErrorType.FORBIDDEN:
                statusCode=ResponseStatus.FORBIDDEN
                break
            case ErrorType.INTERNAL:
                statusCode=ResponseStatus.INTERNAL_ERROR
                break
            case ErrorType.NOT_FOUND:
            case ErrorType.NO_DATA:
            case ErrorType.NO_ENTRY:
                statusCode=ResponseStatus.NOT_FOUND
                break
            case ErrorType.UNAUTHORIZED:
                statusCode=ResponseStatus.UNAUTHORIZED
                break
        }
        return new UserFacingError(type,statusCode);
    }
}