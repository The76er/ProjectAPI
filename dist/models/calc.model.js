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
class Calc {
    constructor(norm) {
        this.model = [{
                id: { type: Number, key: 'primary' },
                make: { type: String, maxlength: 24 },
                model: { type: String, maxlength: 24 },
                year: { type: String, maxlength: 24 },
                mileage: { type: String, maxlength: 24 },
                user_id: {
                    type: Number,
                    key: 'foreign',
                    references: { table: 'User', foreignKey: 'id' },
                    onDelete: 'cascade',
                    onUpdate: 'cascade'
                },
            }, 'A table to store calculated items', [{
                    route: '/get-all-cars',
                    method: 'POST',
                    callback: this.getALLcars,
                    requireToken: true,
                },
                {
                    route: '/get-car-by-id/:id',
                    method: 'POST',
                    callback: this.getCarById,
                    requireToken: true,
                },
                {
                    route: '/create',
                    method: 'POST',
                    callback: this.createCar,
                    requireToken: true,
                },
                {
                    route: '/update/id/:id',
                    method: 'PUT',
                    callback: this.updateCar,
                    requireToken: true,
                },
                {
                    route: '/delete/id/:id',
                    method: 'DELETE',
                    callback: this.deleteCar,
                    requireToken: true,
                }
            ]];
    }
    getALLcars(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ["*"]
            };
            let calcCtrl = model.controller;
            let resp = yield calcCtrl.get(req, null, null);
            console.log('from calc model resp: ', resp);
            res.json({ message: 'works...', resp });
        });
    }
    getCarById(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ["*"],
                where: {
                    id: req.params.id
                }
            };
            let calcCtrl = model.controller;
            let resp = yield calcCtrl.get(req, null, null);
            console.log('from calc model resp: ', resp);
            res.json({ message: 'Success', resp });
        });
    }
    createCar(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            console.log('req.body====>', req.body);
            let calcCtrl = model.controller;
            let resp = yield calcCtrl.insert(req, null, null);
            res.json({ message: 'works...', resp });
        });
    }
    updateCar(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            console.log('req.body====>', req.body);
            let calcCtrl = model.controller;
            let resp = yield calcCtrl.update(req, null, null);
            res.json({ message: 'works...', resp });
        });
    }
    deleteCar(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            console.log('req.body====>', req.body);
            let calcCtrl = model.controller;
            let resp = yield calcCtrl.remove(req, null, null);
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
exports.Calc = Calc;
