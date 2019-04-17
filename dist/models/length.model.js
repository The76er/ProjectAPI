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
class Length {
    constructor(norm) {
        this.model = [{
                id: { type: Number, key: 'primary' },
                Miles: { type: String, maxlength: 24 },
                Kilometers: { type: String, maxlength: 24 },
                Meters: { type: String, maxlength: 24 },
                Yards: { type: String, maxlength: 24 },
                Feet: { type: String, maxlength: 24 },
                Inches: { type: String, maxlength: 24 },
                CalculatedLength: { type: String, maxlength: 24 },
                user_id: {
                    type: Number,
                    key: 'foreign',
                    references: { table: 'User', foreignKey: 'id' },
                    onDelete: 'cascade',
                    onUpdate: 'cascade'
                },
            }, 'A table to store calculated items', [{
                    route: '/get-all-lengths',
                    method: 'POST',
                    callback: this.getALLlengths,
                    requireToken: true,
                },
                {
                    route: '/get-length-by-id/:id',
                    method: 'POST',
                    callback: this.getLengthById,
                    requireToken: true,
                },
                {
                    route: '/create-length',
                    method: 'POST',
                    callback: this.createLength,
                    requireToken: true,
                },
                {
                    route: '/update-length/id/:id',
                    method: 'PUT',
                    callback: this.updateLength,
                    requireToken: true,
                },
                {
                    route: '/delete-length/id/:id',
                    method: 'DELETE',
                    callback: this.deleteLength,
                    requireToken: true,
                }
            ]];
    }
    getALLlengths(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ["*"]
            };
            let lengthCtrl = model.controller;
            let resp = yield lengthCtrl.get(req, null, null);
            console.log('from calc model resp: ', resp);
            res.json({ message: 'works...', resp });
        });
    }
    getLengthById(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ["*"],
                where: {
                    id: req.params.id
                }
            };
            let lengthCtrl = model.controller;
            let resp = yield lengthCtrl.get(req, null, null);
            console.log('from calc model resp: ', resp);
            res.json({ message: 'Success', resp });
        });
    }
    createLength(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            console.log('req.body====>', req.body);
            let lengthCtrl = model.controller;
            let resp = yield lengthCtrl.insert(req, null, null);
            res.json({ message: 'works...', resp });
        });
    }
    updateLength(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            console.log('req.body====>', req.body);
            let lengthCtrl = model.controller;
            let resp = yield lengthCtrl.update(req, null, null);
            res.json({ message: 'works...', resp });
        });
    }
    deleteLength(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            console.log('req.body====>', req.body);
            let lengthCtrl = model.controller;
            let resp = yield lengthCtrl.remove(req, null, null);
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
exports.Length = Length;
