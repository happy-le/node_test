/* 项目启动的相关初始化配置 */
import Koa from "koa"

import router from "./src/router";

const app = new Koa();
router(app)

export default app
