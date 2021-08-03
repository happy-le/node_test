/* 项目启动的相关初始化配置 */
require("module-alias/register"); // 配置别名依赖

const Koa = require("koa");
const router = require("@/router");
const middleware = require("@/middleware/middleware");

const app = new Koa();
middleware(app); // 加载全局中间件
router(app); // 加载全局路由

export default app;
