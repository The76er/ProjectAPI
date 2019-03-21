"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Tank {
    constructor(norm) {
        this.model = [{
                id: { type: Number, key: 'primary' },
                tank_name: { type: String, maxlength: 24 }
            }, 'exam model', []];
    }
    set model(model) {
        this._model = model;
    }
    get model() {
        return this._model;
    }
}
exports.Tank = Tank;
