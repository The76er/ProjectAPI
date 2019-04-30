import { Request, Response, NextFunction } from 'express';

export class Speed {
  _model: any;
  constructor(norm: any) {
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

  getALLspeeds(model: any) {

    return async (req: Request, res: Response, next: NextFunction) => {

      req.body = {
        get: ["*"]

      }
      let speedCtrl = model.controller;
      let resp = await speedCtrl.get(req, null, null);
      console.log('from calc model resp: ', resp);
      res.json({ message: 'works...', resp });
    }
  }

  getSpeedById(model: any) {

    return async (req: Request, res: Response, next: NextFunction) => {

      req.body = {
        get: ["*"],
        where: {
          id: req.params.id
        }

      }
      let speedCtrl = model.controller;
      let resp = await speedCtrl.get(req, null, null);
      console.log('from calc model resp: ', resp);
      res.json({ message: 'Success', resp });
    }
  }

  createSpeed(model: any) {

    return async (req: Request, res: Response, next: NextFunction) => {

      console.log('req.body====>', req.body);
      let speedCtrl = model.controller;
      let resp = await speedCtrl.insert(req, null, null);
      res.json({ message: 'works...', resp });
    }
  }
  updateSpeed(model: any) {

    return async (req: Request, res: Response, next: NextFunction) => {

      console.log('req.body====>', req.body);
      let speedCtrl = model.controller;
      let resp = await speedCtrl.update(req, null, null);
      res.json({ message: 'works...', resp });
    }
  }

  deleteSpeed(model: any) {

    return async (req: Request, res: Response, next: NextFunction) => {

      console.log('req.body====>', req.body);
      let speedCtrl = model.controller;
      let resp = await speedCtrl.remove(req, null, null);
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