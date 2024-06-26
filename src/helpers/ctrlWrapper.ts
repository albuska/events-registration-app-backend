import { NextFunction, Request, Response } from "express";

export const ctrlWrapper = (ctrl: any) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await ctrl(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};
