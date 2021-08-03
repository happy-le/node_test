/* 中间件 */
import { CommonError } from "../common/commonError";

module.exports = () => {
  return async (ctx, next) => {
    try {
      await next();
    } catch (err) {
      if (err instanceof CommonError) {
        ctx.body = err;
      } else {
        ctx.body = new CommonError();
      }
    }
  };
};
