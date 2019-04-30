import { Request, Response, NextFunction } from 'express';

export class Vol {
  _model: any;
  constructor(norm: any) {
    this.model = [{
      id: { type: Number, key: 'primary' },
      Liter: { type: Number, maxlength: 24 },
      Gallon: { type: Number, maxlength: 24 },
      Pint: { type: Number, maxlength: 24 },
      CalculatedVol: { type: String, maxlength: 24 },
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

  getALLvol(model: any) {

    return async (req: Request, res: Response, next: NextFunction) => {

      req.body = {
        get: ["*"]

      }
      let volCtrl = model.controller;
      let resp = await volCtrl.get(req, null, null);
      console.log('from calc model resp: ', resp);
      res.json({ message: 'works...', resp });
    }
  }

  getVolById(model: any) {

    return async (req: Request, res: Response, next: NextFunction) => {

      req.body = {
        get: ["*"],
        where: {
          id: req.params.id
        }

      }
      let volCtrl = model.controller;
      let resp = await volCtrl.get(req, null, null);
      console.log('from calc model resp: ', resp);
      res.json({ message: 'Success', resp });
    }
  }

  createVol(model: any) {

    return async (req: Request, res: Response, next: NextFunction) => {

      console.log('req.body====>', req.body);
      let volCtrl = model.controller;
      let resp = await volCtrl.insert(req, null, null);
      res.json({ message: 'works...', resp });
    }
  }
  updateVol(model: any) {

    return async (req: Request, res: Response, next: NextFunction) => {

      console.log('req.body====>', req.body);
      let volCtrl = model.controller;
      let resp = await volCtrl.update(req, null, null);
      res.json({ message: 'works...', resp });
    }
  }

  deleteVol(model: any) {

    return async (req: Request, res: Response, next: NextFunction) => {

      console.log('req.body====>', req.body);
      let volCtrl = model.controller;
      let resp = await volCtrl.remove(req, null, null);
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