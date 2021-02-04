import { Route } from "./route";

import { HelloRoute } from "./hello-route";
import { LoginRoute } from "./login-route";

export const router: Array<Route> = [
    new HelloRoute(),
    new LoginRoute()
];