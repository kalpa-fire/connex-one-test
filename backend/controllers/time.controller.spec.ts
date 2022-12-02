import { getMockReq, getMockRes } from '@jest-mock/express'
import TimeController from './time.controller';

describe('TimeController', () => {
    it('Calls res.json with the expected epoch value', () => {
        const req = getMockReq();
        const { res } = getMockRes();
        jest.spyOn(Date, 'now').mockReturnValue(1000);
        const timeController = new TimeController();
        
        timeController.getEpoch(req, res);

        expect(res.json).toHaveBeenCalledWith({
            epoch: 1
        })
    })
})