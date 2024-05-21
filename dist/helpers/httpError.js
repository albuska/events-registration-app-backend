"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpError = void 0;
const httpError = (status, message) => {
    const error = new Error(message);
    //   error.status = status;
    return error;
};
exports.httpError = httpError;
//# sourceMappingURL=httpError.js.map