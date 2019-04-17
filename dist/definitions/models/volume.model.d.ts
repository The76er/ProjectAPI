import { Request, Response, NextFunction } from 'express';
export declare class Vol {
    _model: any;
    constructor(norm: any);
    getALLvol(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getVolById(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    createVol(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    updateVol(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    deleteVol(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    model: any;
}
