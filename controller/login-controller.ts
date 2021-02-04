import { Controller } from "./controller";
import { Request, Response } from 'express';

export class LoginController extends Controller {

    constructor() {
        super();
    }

    /** 回應關閉紅利折抵彈窗接口 */
    public loginWithName(req: Request, res: Response): void {
        if (req.query.name) { res.send(`Welcome login ${req.query.name}`) } else { this.notImplemented(req, res); }
    }
}