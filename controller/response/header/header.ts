/**
 * 設定 API 回傳的 header
 */
export class ResponseHeader {
    /** http 狀態碼  */
    private returnCode: string;

    /** http 狀態碼描述 */
    private returnMsg: string;

    constructor() { }

    /**
     * 設定狀態碼
     * 
     * @param statusCode 
     */
    public setReturnCode(statusCode: string): void {
        this.returnCode = statusCode;
    }

    /**
     * 取得狀態碼
     * 
     * @returns 狀態碼
     */
    public getReturnCode(): string {
        return this.returnCode;
    }

    /**
     * 設定狀態碼描述
     * 
     * @param msg 
     */
    public setReturnMsg(msg: string): void {
        this.returnMsg = msg;
    }

    /**
     * 取得狀態碼描述
     * 
     * @returns 狀態碼描述
     */
    public getReturnMsg(): string {
        return this.returnMsg;
    }

    /**
     * 設定狀態碼跟狀態碼描述
     * 
     * @param statusCode 
     * @param msg 
     */
    public set(statusCode: string, msg: string): void {
        this.returnCode = statusCode;
        this.returnMsg = msg;
    }

    /** 覆寫 toJson 方法 */
    public toJson = () => {
        return { "errorCode": this.returnCode, "errorMsg": this.returnMsg };
    }
}
