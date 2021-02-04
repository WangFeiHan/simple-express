import { Route } from "./route";
import { HelloController } from '../controller/hello-controller';

export class HelloRoute extends Route {
    /** 基本路由 */
    private helloController = new HelloController();

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
        this.router.route('/')
            .all(this.helloController.defaultRouter, this.helloController.sayHello);
    }
}