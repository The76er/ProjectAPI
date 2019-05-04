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
class Vol {
    constructor(norm) {
        this.model = [{
                id: { type: Number, key: 'primary' },
                liter: { type: Number, maxlength: 24 },
                gallon: { type: Number, maxlength: 24 },
                pint: { type: Number, maxlength: 24 },
                calculated_vol: { type: String, maxlength: 24 },
                user_id: {
                    type: Number,
                    key: 'foreign',
                    references: { table: 'User', foreignKey: 'id' },
                    onDelete: 'cascade',
                    onUpdate: 'cascade'
                },
            }, 'A table to store calculated items', [{
                    route: '/get-all-vol',
                    method: 'POST',
                    callback: this.getALLvol,
                    requireToken: true,
                },
                {
                    route: '/get-vol-by-id/:id',
                    method: 'POST',
                    callback: this.getVolById,
                    requireToken: true,
                },
                {
                    route: '/create-vol',
                    method: 'POST',
                    callback: this.createVol,
                    requireToken: true,
                },
                {
                    route: '/update-vol/id/:id',
                    method: 'PUT',
                    callback: this.updateVol,
                    requireToken: true,
                },
                {
                    route: '/delete-vol/id/:id',
                    method: 'DELETE',
                    callback: this.deleteVol,
                    requireToken: true,
                }
            ]];
    }
    getALLvol(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ["*"]
            };
            let volCtrl = model.controller;
            let resp = yield volCtrl.get(req, null, null);
            console.log('from calc model resp: ', resp);
            res.json({ message: 'works...', resp });
        });
    }
    getVolById(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ["*"],
                where: {
                    id: req.params.id
                }
            };
            let volCtrl = model.controller;
            let resp = yield volCtrl.get(req, null, null);
            console.log('from calc model resp: ', resp);
            res.json({ message: 'Success', resp });
        });
    }
    createVol(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            console.log('req.body====>', req.body);
            let volCtrl = model.controller;
            let resp = yield volCtrl.insert(req, null, null);
            res.json({ message: 'works...', resp });
        });
    }
    updateVol(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            console.log('req.body====>', req.body);
            let volCtrl = model.controller;
            let resp = yield volCtrl.update(req, null, null);
            res.json({ message: 'works...', resp });
        });
    }
    deleteVol(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            console.log('req.body====>', req.body);
            let volCtrl = model.controller;
            let resp = yield volCtrl.remove(req, null, null);
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
exports.Vol = Vol;
