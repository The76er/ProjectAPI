"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Test {
    constructor(norm) {
        this.norm = norm;
        this.testFunc = (model) => {
            return (req, res, next) => {
                let payload = {
                    body: {
                        get: ["*"]
                    }
                };
                let testModel = model.model.controller;
                console.log('testModel', model.model.controller);
                //let resp = testModel.controller.get(req, null, null);
                // console.log('from test model resp: ', resp);
                res.json({ message: 'works...' });
            };
        };
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
    set model(model) {
        this._model = model;
    }
    get model() {
        return this._model;
    }
}
exports.Test = Test;
