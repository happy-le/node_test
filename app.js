/* 项目启动的相关初始化配置 */
require('module-alias/register'); // 配置别名依赖

const Koa = require("koa")
const router = require("@/router")
const globalError = require("@/middleware/globalError")

const app = new Koa();

app.use(globalError()); // 将异常处理注册到全局

router(app); // 加载全局路由

export default app;
