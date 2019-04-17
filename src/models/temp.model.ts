import { Request, Response, NextFunction } from 'express';

export class Temp {
  _model: any;
  constructor(norm: any) {
    this.model = [{
      id: { type: Number, key: 'primary' },
      Celsius: { type: String, maxlength: 24 },
      Fahrenheit: { type: String, maxlength: 24 },
      Kelvin: { type: String, maxlength: 24 },
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

  getALLtemps(model: any) {

    return async (req: Request, res: Response, next: NextFunction) => {

      req.body = {
        get: ["*"]

      }
      let tempCtrl = model.controller;
      let resp = await tempCtrl.get(req, null, null);
      console.log('from calc model resp: ', resp);
      res.json({ message: 'works...', resp });
    }
  }

  getTempById(model: any) {

    return async (req: Request, res: Response, next: NextFunction) => {

      req.body = {
        get: ["*"],
        where: {
          id: req.params.id
        }

      }
      let tempCtrl = model.controller;
      let resp = await tempCtrl.get(req, null, null);
      console.log('from calc model resp: ', resp);
      res.json({ message: 'Success', resp });
    }
  }

  createTemp(model: any) {

    return async (req: Request, res: Response, next: NextFunction) => {

      console.log('req.body====>', req.body);
      let tempCtrl = model.controller;
      let resp = await tempCtrl.insert(req, null, null);
      res.json({ message: 'works...', resp });
    }
  }
  updateTemp(model: any) {

    return async (req: Request, res: Response, next: NextFunction) => {

      console.log('req.body====>', req.body);
      let tempCtrl = model.controller;
      let resp = await tempCtrl.update(req, null, null);
      res.json({ message: 'works...', resp });
    }
  }

  deleteTemp(model: any) {

    return async (req: Request, res: Response, next: NextFunction) => {

      console.log('req.body====>', req.body);
      let tempCtrl = model.controller;
      let resp = await tempCtrl.remove(req, null, null);
      res.json({ message: 'works...', resp });
    }
  }

  set model(model: any) {
    this._model = model;
  }

  get model() {
    return this._model;
  }

}