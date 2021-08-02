/* 接口模块 */
import Router from "koa-router";

let commonRouter = new Router({
  prefix: "/",
});

commonRouter.get("/", async (ctx) => {
  ctx.body = "<h1>通用页面</h1>";
});

export default commonRouter;
