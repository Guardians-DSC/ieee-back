const httpStatusCodes = require('http-status-codes');

const responses = (()=>{
    const notModifed = function (message) {
        return {
            status: httpStatusCodes.NOT_MODIFIED,
            message: message,
        };
    };

    const internalError = function () {
        return {
            status: httpStatusCodes.INTERNAL_SERVER_ERROR,
            message: 'INTERNAL_ERROR'
        };
    };

    const ok = function (message, data) {
        return {
            status: httpStatusCodes.OK,
            message: message,
            data: data
        };
    };

    const notFound = function (message) {
        return {
            status: httpStatusCodes.NOT_FOUND,
            message: message,
        };
    };

    const created = function (message) {
        return {
            status: httpStatusCodes.CREATED,
            message: message,
        };
    };

    const conflict = function (message) {
        return {
            status: httpStatusCodes.CONFLICT,
            message: message,
        };
    };

    const unauthorized = function (message) {
        return {
            status: httpStatusCodes.UNAUTHORIZED,
            message: message,
        };
    };

    const badRequest = function (message) {
        return {
            status: httpStatusCodes.BAD_REQUEST,
            message: message,
        };
    }


    return {
        notModifed,
        internalError,
        ok,
        notFound,
        created,
        conflict,
        unauthorized,
        badRequest,
    }
})();

module.exports = responses;