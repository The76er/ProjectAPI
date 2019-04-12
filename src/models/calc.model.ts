import { Request, Response, NextFunction } from 'express';

export class Calc {
  _model: any;
  constructor(norm: any) {
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

  getALLcars(model: any) {

    return async (req: Request, res: Response, next: NextFunction) => {

      req.body = {
        get: ["*"]

      }
      let calcCtrl = model.controller;
      let resp = await calcCtrl.get(req, null, null);
      console.log('from calc model resp: ', resp);
      res.json({ message: 'works...', resp });
    }
  }

  getCarById(model: any) {

    return async (req: Request, res: Response, next: NextFunction) => {

      req.body = {
        get: ["*"],
        where: {
          id: req.params.id
        }

      }
      let calcCtrl = model.controller;
      let resp = await calcCtrl.get(req, null, null);
      console.log('from calc model resp: ', resp);
      res.json({ message: 'Success', resp });
    }
  }

  createCar(model: any) {

    return async (req: Request, res: Response, next: NextFunction) => {

      console.log('req.body====>', req.body);
      let calcCtrl = model.controller;
      let resp = await calcCtrl.insert(req, null, null);
      res.json({ message: 'works...', resp });
    }
  }
  updateCar(model: any) {

    return async (req: Request, res: Response, next: NextFunction) => {

      console.log('req.body====>', req.body);
      let calcCtrl = model.controller;
      let resp = await calcCtrl.update(req, null, null);
      res.json({ message: 'works...', resp });
    }
  }

  deleteCar(model: any) {

    return async (req: Request, res: Response, next: NextFunction) => {

      console.log('req.body====>', req.body);
      let calcCtrl = model.controller;
      let resp = await calcCtrl.remove(req, null, null);
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