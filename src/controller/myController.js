/* 接口模块 */
import Router from "koa-router";

let myRouter = new Router({
  prefix: "/statistics",
});

myRouter.get("/", async (ctx) => {
  ctx.body = "<h1>测试主页</h1>";
});

myRouter.get("/hello/:name", async (ctx) => {
  ctx.body = `<h1> 你好啊，${ctx.params.name}</h1>`;
});

export default myRouter;
