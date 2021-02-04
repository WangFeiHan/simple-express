import { ResponseHeader } from './header/header';
import { ResponseBody } from './body/body';

/**
 * 設定 API 回傳的 response, 包含 header 跟 body
 */
export class CustomResponse {
    /** http header */
    private responseHeader: ResponseHeader = new ResponseHeader();

    /** http body */
    private responseBody: ResponseBody = new ResponseBody();

    constructor() { }

    /**
     * 設定 http header
     * 
     * @param header
     */
    public setHeader(header: ResponseHeader): void {
        this.responseHeader = header;
    }

    /**
     * 取得 http header
     * 
     * @returns http header
     */
    public getHeader(): ResponseHeader {
        return this.responseHeader;
    }

    /**
     * 設定 http body
     * 
     * @param body 
     */
    public setBody(body: ResponseBody): void {
        this.responseBody = body;
    }

    /**
     * 取得 http body
     */
    public getBody(): ResponseBody {
        return this.responseBody;
    }

    /**
     * 設定 http body 跟 http body
     * 
     * @param header 
     * @param body 
     */
    public set(header: ResponseHeader, body: ResponseBody): void {
        this.responseHeader = header;
        this.responseBody = body;
    }

    /** 覆寫 toJson 方法 */
    public toJson = (): {} => {
        return { "header": this.responseHeader.toJson(), "body": this.responseBody.toJson() };
    }
}