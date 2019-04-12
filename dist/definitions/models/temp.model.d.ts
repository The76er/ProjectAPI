import { Request, Response, NextFunction } from 'express';
export declare class Temp {
    _model: any;
    constructor(norm: any);
    getALLtemps(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getTempById(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    createTemp(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    updateTemp(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    deleteTemp(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    model: any;
}
