import { Route } from "./route";
import { LoginController } from "../controller/login-controller";

export class LoginRoute extends Route {
    /** 基本路由 */
    private loginController = new LoginController();

    constructor() {
        super();
        this.setRoutes();
    }

    /**
     * 路由導向設定
     * 
     * @description route('/')
     */
    protected setRoutes(): void {
        this.router.route('/login')
            .all(this.loginController.defaultRouter, this.loginController.loginWithName.bind(this.loginController))
            .get(this.loginController.notImplemented)
            .put(this.loginController.notImplemented)
            .post(this.loginController.notImplemented)
            .delete(this.loginController.notImplemented);
    }
}