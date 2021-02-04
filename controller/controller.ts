import { Request, Response, NextFunction } from 'express';
import { ValidationError } from 'express-validator';

import { CustomResponse } from './response/response';
import { ResponseHeader } from './response/header/header';
import { ResponseBody } from './response/body/body';

/**
 * 定義父層
 * 
 * @function defaultRouter 資料的基本處裡
 * 
 * @function notImplemented 回傳用戶端的請求目前未支援
 * 
 * @function registeSender 註冊傳送資料服務
 */
export abstract class Controller {

    constructor() { }

    /** 資料的基本處裡 */
    public defaultRouter(req: Request, res: Response, next: NextFunction): void {
        console.log(`[API    ] [${JSON.stringify(req.url).replace(new RegExp('\"', 'gm'), '')}]`, 'info');
        next();
    };

    /** 說你好 */
    public sayHello(req: Request, res: Response): void {
        res.send('Hello bro !!!');
    }

    /** 回傳用戶端的請求已成功 */
    public successfulOK(req: Request, res: Response): void {
        let response = new CustomResponse();
        let header = new ResponseHeader();
        let body = new ResponseBody();

        // 設定 header
        header.setReturnCode('0000');
        header.setReturnMsg('SUCCESS');

        // 設定 body
        body.setSuccessStatus(true);

        response.set(header, new ResponseBody());

        res.json(response.toJson());
    }

    /** 回傳用戶端的請求目前未支援 */
    public notImplemented(req: Request, res: Response): void {
        let response = new CustomResponse();
        let header = new ResponseHeader();

        // 設定 header
        header.setReturnCode('501');
        header.setReturnMsg('Not Implemented');

        response.set(header, new ResponseBody());

        res.json(response.toJson());
    }

    /** 該請求格式正確，但由於語義錯誤而無法遵循，用戶端錯誤回應 */
    public unprocessableEntity(errMsg: Array<ValidationError>): {} {
        let response = new CustomResponse();
        let header = new ResponseHeader();
        let body = new ResponseBody();

        // 設定 header
        header.setReturnCode('422');
        header.setReturnMsg('Unprocessable Entity');

        // 設定 body
        body.setSuccessStatus(false);
        body.setErrorsMsg(errMsg);

        response.set(header, body);

        return response.toJson();
    }
}
