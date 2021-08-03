/* 接口模块 */
import Router from "koa-router";
import { ParamsError, CommonError } from "../common/commonError";

let myRouter = new Router({
  prefix: "/statistics",
});

myRouter.get("/", async (ctx) => {
  ctx.body = "<h1>测试主页</h1>";
});

myRouter.get("/hello/:name", async (ctx) => {
  ctx.body = `<h1> 你好啊，${ctx.params.name}</h1>`;
});

myRouter.get("/exception", async (ctx) => {
  throw new ParamsError("缺少参数");
});

export default myRouter;
