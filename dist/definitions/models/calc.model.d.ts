import { Request, Response, NextFunction } from 'express';
export declare class Calc {
    _model: any;
    constructor(norm: any);
    getALLcars(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getCarById(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    createCar(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    updateCar(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    deleteCar(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    model: any;
}
