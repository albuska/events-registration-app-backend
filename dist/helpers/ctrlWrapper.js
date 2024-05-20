"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ctrlWrapper = void 0;
const ctrlWrapper = (ctrl) => {
    return async (req, res, next) => {
        try {
            await ctrl(req, res, next);
        }
        catch (error) {
            next(error);
        }
    };
};
exports.ctrlWrapper = ctrlWrapper;
//# sourceMappingURL=ctrlWrapper.js.map