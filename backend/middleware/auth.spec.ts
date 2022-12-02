import { getMockReq, getMockRes } from '@jest-mock/express'
import auth from './auth';

describe('Auth Middleware', ()=>{
    it('Sends a 403 if the Authorization header is not present', ()=>{
        const req = getMockReq();
        const { res, next } = getMockRes();

        auth(req, res, next);

        expect(next).not.toHaveBeenCalled();
        expect(res.sendStatus).toHaveBeenCalledWith(403);
    })

    it('Sends a 403 if the Authorization header has a value other than "mysecrettoken"', ()=>{
        const req = getMockReq({headers: {
            authorization: 'Bearer somerandomvalue' 
        }});
        const { res, next } = getMockRes();

        auth(req, res, next);

        expect(next).not.toHaveBeenCalled();
        expect(res.sendStatus).toHaveBeenCalledWith(403);
    })

    it('Does not send a 403 and calls the next function if the Authorization header has the correct value', ()=>{
        const req = getMockReq({headers: {
            authorization: 'Bearer mysecrettoken' 
        }});
        const { res, next } = getMockRes();

        auth(req, res, next);

        expect(next).toHaveBeenCalled();
        expect(res.sendStatus).not.toHaveBeenCalled();
    })
})