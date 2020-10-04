import {UserFacingError} from "./baseError"

/*enum ErrorType{
    UNAUTHORIZED = 'AuthFailureError',
    INTERNAL = 'InternalError',
    NOT_FOUND = 'NotFoundError',
    NO_ENTRY = 'NoEntryError',
    NO_DATA = 'NoDataError',
    BAD_REQUEST = 'BadRequestError',
    FORBIDDEN = 'ForbiddenError'
  }
*/
enum ResponseStatus {
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    INTERNAL_ERROR = 500,
}
  

export class BadRequestError extends UserFacingError{
    constructor(message?:string){
        super(message,ResponseStatus.BAD_REQUEST)
    }
}
export class NotFoundError extends UserFacingError{
    constructor(message="Not Found"){
        super(message,ResponseStatus.NOT_FOUND)
    }
}

export class InternalError extends UserFacingError{
    constructor(message?:string){
        super(message,ResponseStatus.INTERNAL_ERROR);
    }
}
//TODO: other user-facing error class wil be added 
 