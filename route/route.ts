import { Router } from "express";

export abstract class Route {
    /** express 物件路由 */
    protected router: Router = Router();

    /** 設定路由進入點 */
    protected abstract setRoutes(): void;

    /** 取得路由物件 */
    public getRouter(): Router {
        return this.router;
    }
}