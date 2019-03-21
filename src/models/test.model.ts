import { Request, Response, NextFunction } from 'express';

export class Test {
    _model: any;
    constructor(private norm: any) {
        this.model = [{
            id: { type: Number, key: 'primary' },
            test_name: { type: String, maxlength: 24 },
            score: { type: Number }
        }, 'test model', [{
            route: '/getTest',
            method: 'POST',
            callback: this.testFunc,
            requireToken: true,
        }]];
    }

    set model(model: any) {
        this._model = model;
    }

    get model() {
        return this._model;
    }

    testFunc = (model: any) => {
        return (req: Request, res: Response, next: NextFunction) => {
            let payload = {
                body: {
                    get: ["*"]
                }
            }
            let testModel = model.model.controller;
            console.log('testModel', model.model.controller);
            //let resp = testModel.controller.get(req, null, null);
            // console.log('from test model resp: ', resp);
            res.json({ message: 'works...' });
        }
    }

}