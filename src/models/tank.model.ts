export class Tank {
  _model: any;
  constructor(norm:any) {
    this.model = [{
      id: { type: Number, key: 'primary' },
      tank_name: { type: String, maxlength: 24 }
    }, 'exam model', []];
  }

  set model(model: any) {
    this._model = model;
  }

  get model() {
    return this._model;
  }

}