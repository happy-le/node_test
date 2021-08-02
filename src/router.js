import RequireDirectory from "require-directory";
import Router from "koa-router";

export default (app) => {
  /** 解析controller目录下所有的路由 */
  RequireDirectory(module, "./controller", {
    visit: (obj) => {
      if (obj.default instanceof Router) {
        app.use(obj.default.routes());
      }
    },
  });
};
