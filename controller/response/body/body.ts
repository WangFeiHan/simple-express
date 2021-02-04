import { ValidationError } from "express-validator";

/**
 * 定義父層
 * 
 * @function toString 父層覆寫 toString 方法
 * @function toJson 父層覆寫 toJson 方法
 */
export class ResponseBody {
    /** 基本回傳訊息狀態 */
    private success: boolean;

    /** 所有錯誤訊息 */
    private errorsMsg: Array<ValidationError>

    constructor() { }

    /**
     * 設定基本回傳訊息狀態 
     *
     * @param status 狀態
     */
    public setSuccessStatus(status: boolean) {
        this.success = status;
    }

    /**
     * 取得基本回傳訊息狀態
     */
    public getSuccessStatus(): boolean {
        return this.success;
    }

    /**
     * 設定所有錯誤訊息
     * 
     * @param errorsMsg 所有錯誤訊息
     */
    public setErrorsMsg(errorsMsg: Array<ValidationError>): void {
        this.errorsMsg = errorsMsg;
    }

    /**
     * 取得所有錯誤訊息
     */
    public getErrorsMsg(): Array<ValidationError> {
        return this.errorsMsg;
    }

    /** 父層覆寫 toJson 方法 */
    public toJson = (): {} => {
        return this.errorsMsg ? { "Success": this.success, "ErrorsMsg": this.errorsMsg } : { "Success": this.success };
    }
}