// this is a generalised class once in for all error messages and we can call it in like a functiuon

class ErrorHandler extends Error{
    statusCode:Number
    constructor(message:any,statusCode:Number){
        super(message);
        this.statusCode = statusCode;
        Error.captureStackTrace(this,this.constructor)
    }
}

export default ErrorHandler;