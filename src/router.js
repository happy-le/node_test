const requireDirectory = require("require-directory");
const Router = require("koa-router");

export default (app) => {
  requireDirectory(module, "./controller", {
    visit: (obj) => {
      if (obj.default instanceof Router) {
        app.use(obj.default.routes());
      }
    },
  });
};
