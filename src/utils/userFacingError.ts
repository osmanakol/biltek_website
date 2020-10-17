import {ResponseStatus, UserFacingError} from "./baseError"

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


export class BadRequestError extends UserFacingError{
    constructor(message="Bad Request"){
        super(message,ResponseStatus.BAD_REQUEST)
    }
}
export class AuthFailureError extends UserFacingError{
    constructor(message="Unauthorized access,"){
        super(message,ResponseStatus.UNAUTHORIZED)
    }
}
export class ForbiddenError extends UserFacingError{
    constructor(message="Permission denied"){
        super(message,ResponseStatus.FORBIDDEN)
    }
}
export class NotFoundError extends UserFacingError{
    constructor(message="Not Found"){
        super(message,ResponseStatus.NOT_FOUND)
    }
}

export class InternalError extends UserFacingError{
    constructor(message="Internal Server Error"){
        super(message,ResponseStatus.INTERNAL_ERROR);
    }
}
// other user-facing error class could be added 
 