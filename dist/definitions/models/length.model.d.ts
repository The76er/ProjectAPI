import { Request, Response, NextFunction } from 'express';
export declare class Length {
    _model: any;
    constructor(norm: any);
    getALLlengths(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getLengthById(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    createLength(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    updateLength(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    deleteLength(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    model: any;
}
