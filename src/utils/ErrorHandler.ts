export class GeneralError extends Error {
    constructor(message: string) {
        super();
        this.message = message;
        Object.setPrototypeOf(this, GeneralError.prototype);

    }

    getCode(): number {
        return 500;
    }
}

export class BadRequest extends GeneralError {
    constructor(message: string) {
        super(message);
        Object.setPrototypeOf(this, BadRequest.prototype);
    }
    getCode(): number {
        return 400;
    }
}
export class NotFound extends GeneralError {
    constructor(message: string) {
        super(message);
        Object.setPrototypeOf(this, NotFound.prototype);
    }
    getCode(): number {
        return 404;
    }
}

export class MethodNotAllowed extends GeneralError {
    constructor(message: string) {
        super(message);
        Object.setPrototypeOf(this, MethodNotAllowed.prototype);
    }
    getCode(): number {
        return 405;
    }
}