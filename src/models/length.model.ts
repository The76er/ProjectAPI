import { Request, Response, NextFunction } from 'express';

export class Length {
  _model: any;
  constructor(norm: any) {
    this.model = [{
      id: { type: Number, key: 'primary' },
      Miles: { type: Number, maxlength: 24 },
      Kilometers: { type: Number, maxlength: 24 },
      Meters: { type: Number, maxlength: 24 },
      Yards: { type: Number, maxlength: 24 },
      Feet: { type: Number, maxlength: 24 },
      Inches: { type: Number, maxlength: 24 },
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

  getALLlengths(model: any) {

    return async (req: Request, res: Response, next: NextFunction) => {

      req.body = {
        get: ["*"]

      }
      let lengthCtrl = model.controller;
      let resp = await lengthCtrl.get(req, null, null);
      console.log('from calc model resp: ', resp);
      res.json({ message: 'works...', resp });
    }
  }

  getLengthById(model: any) {

    return async (req: Request, res: Response, next: NextFunction) => {

      req.body = {
        get: ["*"],
        where: {
          id: req.params.id
        }

      }
      let lengthCtrl = model.controller;
      let resp = await lengthCtrl.get(req, null, null);
      console.log('from calc model resp: ', resp);
      res.json({ message: 'Success', resp });
    }
  }

  createLength(model: any) {

    return async (req: Request, res: Response, next: NextFunction) => {

      console.log('req.body====>', req.body);
      let lengthCtrl = model.controller;
      let resp = await lengthCtrl.insert(req, null, null);
      res.json({ message: 'works...', resp });
    }
  }
  updateLength(model: any) {

    return async (req: Request, res: Response, next: NextFunction) => {

      console.log('req.body====>', req.body);
      let lengthCtrl = model.controller;
      let resp = await lengthCtrl.update(req, null, null);
      res.json({ message: 'works...', resp });
    }
  }

  deleteLength(model: any) {

    return async (req: Request, res: Response, next: NextFunction) => {

      console.log('req.body====>', req.body);
      let lengthCtrl = model.controller;
      let resp = await lengthCtrl.remove(req, null, null);
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