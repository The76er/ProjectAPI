import { Request, Response, NextFunction } from 'express';
export declare class Speed {
    _model: any;
    constructor(norm: any);
    getALLspeeds(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getSpeedById(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    createSpeed(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    updateSpeed(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    deleteSpeed(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    model: any;
}
