import { Request, Response } from "express";

class TimeController {
    public getEpoch(req: Request, res: Response): void{
        res.json({
            epoch: Math.round(Date.now() / 1000)
        })
    }
}

export default TimeController;