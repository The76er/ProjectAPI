"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class Temp {
    constructor(norm) {
        this.model = [{
                id: { type: Number, key: 'primary' },
                Celsius: { type: Number, maxlength: 24 },
                Fahrenheit: { type: Number, maxlength: 24 },
                Kelvin: { type: Number, maxlength: 24 },
                CalculatedTemp: { type: String, maxlength: 24 },
                user_id: {
                    type: Number,
                    key: 'foreign',
                    references: { table: 'User', foreignKey: 'id' },
                    onDelete: 'cascade',
                    onUpdate: 'cascade'
                },
            }, 'A table to store calculated items', [{
                    route: '/get-all-temps',
                    method: 'POST',
                    callback: this.getALLtemps,
                    requireToken: true,
                },
                {
                    route: '/get-temp-by-id/:id',
                    method: 'POST',
                    callback: this.getTempById,
                    requireToken: true,
                },
                {
                    route: '/create-temp',
                    method: 'POST',
                    callback: this.createTemp,
                    requireToken: true,
                },
                {
                    route: '/update-temp/id/:id',
                    method: 'PUT',
                    callback: this.updateTemp,
                    requireToken: true,
                },
                {
                    route: '/delete-temp/id/:id',
                    method: 'DELETE',
                    callback: this.deleteTemp,
                    requireToken: true,
                }
            ]];
    }
    getALLtemps(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ["*"]
            };
            let tempCtrl = model.controller;
            let resp = yield tempCtrl.get(req, null, null);
            console.log('from calc model resp: ', resp);
            res.json({ message: 'works...', resp });
        });
    }
    getTempById(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ["*"],
                where: {
                    id: req.params.id
                }
            };
            let tempCtrl = model.controller;
            let resp = yield tempCtrl.get(req, null, null);
            console.log('from calc model resp: ', resp);
            res.json({ message: 'Success', resp });
        });
    }
    createTemp(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            console.log('req.body====>', req.body);
            let tempCtrl = model.controller;
            let resp = yield tempCtrl.insert(req, null, null);
            res.json({ message: 'works...', resp });
        });
    }
    updateTemp(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            console.log('req.body====>', req.body);
            let tempCtrl = model.controller;
            let resp = yield tempCtrl.update(req, null, null);
            res.json({ message: 'works...', resp });
        });
    }
    deleteTemp(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            console.log('req.body====>', req.body);
            let tempCtrl = model.controller;
            let resp = yield tempCtrl.remove(req, null, null);
            res.json({ message: 'works...', resp });
        });
    }
    set model(model) {
        this._model = model;
    }
    get model() {
        return this._model;
    }
}
exports.Temp = Temp;
