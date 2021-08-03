import config from "@/config/index";

export default (app) => {
  if (config.middlewares) {
    let middleware;
    config.middleware.forEach((item) => {
      middleware = require(`../middleware/${item}`).default;
      app.use(middleware());
    });
  }
};
