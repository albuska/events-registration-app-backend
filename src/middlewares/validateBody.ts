import { NextFunction, Request, Response } from "express";

import { httpError } from "../helpers";

export const validateBody = (schema: any) => {
  const func = (req: Request, res: Response, next: NextFunction) => {
    if (!req.body || Object.keys(req.body).length === 0) {
      throw httpError(400, "missing fields");
    }

    const { error } = schema.validate(req.body);

    console.log(error, 'error');
    if (error) {
      next(httpError(400, `${error.details[0].message}`));
    }
    next();
  };
  return func;
};
