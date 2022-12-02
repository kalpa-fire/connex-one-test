import { NextFunction, Request, Response } from "express";

function auth(req: Request, res: Response, next: NextFunction): void {
    const authorizationHeader = req?.headers?.authorization || '';
    const [, token] = authorizationHeader.split(' '); 
    if (token !== 'mysecrettoken'){
        res.sendStatus(403);
        return;
    }
    next();
}

export default auth;