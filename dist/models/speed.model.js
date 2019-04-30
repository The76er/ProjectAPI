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
class Speed {
    constructor(norm) {
        this.model = [{
                id: { type: Number, key: 'primary' },
                MPH: { type: Number, maxlength: 24 },
                KPH: { type: Number, maxlength: 24 },
                CalculatedSpeed: { type: String, maxlength: 24 },
                user_id: {
                    type: Number,
                    key: 'foreign',
                    references: { table: 'User', foreignKey: 'id' },
                    onDelete: 'cascade',
                    onUpdate: 'cascade'
                },
            }, 'A table to store calculated items', [{
                    route: '/get-all-speeds',
                    method: 'POST',
                    callback: this.getALLspeeds,
                    requireToken: true,
                },
                {
                    route: '/get-speed-by-id/:id',
                    method: 'POST',
                    callback: this.getSpeedById,
                    requireToken: true,
                },
                {
                    route: '/create-speed',
                    method: 'POST',
                    callback: this.createSpeed,
                    requireToken: true,
                },
                {
                    route: '/update-speed/id/:id',
                    method: 'PUT',
                    callback: this.updateSpeed,
                    requireToken: true,
                },
                {
                    route: '/delete-speed/id/:id',
                    method: 'DELETE',
                    callback: this.deleteSpeed,
                    requireToken: true,
                }
            ]];
    }
    getALLspeeds(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ["*"]
            };
            let speedCtrl = model.controller;
            let resp = yield speedCtrl.get(req, null, null);
            console.log('from calc model resp: ', resp);
            res.json({ message: 'works...', resp });
        });
    }
    getSpeedById(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ["*"],
                where: {
                    id: req.params.id
                }
            };
            let speedCtrl = model.controller;
            let resp = yield speedCtrl.get(req, null, null);
            console.log('from calc model resp: ', resp);
            res.json({ message: 'Success', resp });
        });
    }
    createSpeed(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            console.log('req.body====>', req.body);
            let speedCtrl = model.controller;
            let resp = yield speedCtrl.insert(req, null, null);
            res.json({ message: 'works...', resp });
        });
    }
    updateSpeed(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            console.log('req.body====>', req.body);
            let speedCtrl = model.controller;
            let resp = yield speedCtrl.update(req, null, null);
            res.json({ message: 'works...', resp });
        });
    }
    deleteSpeed(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            console.log('req.body====>', req.body);
            let speedCtrl = model.controller;
            let resp = yield speedCtrl.remove(req, null, null);
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
exports.Speed = Speed;
