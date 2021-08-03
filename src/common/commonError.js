/* 通用模块 */
export const COMMON_ERROR_CODE = 500;
export const PARMAS_ERROR_CODE = 501;

/**
 * 通用异常
 */
export class CommonError extends Error {
  constructor(code = COMMON_ERROR_CODE, msg = "服务器异常") {
    super();
    this.code = code;
    this.msg = msg;
  }
}

/**
 * 参数异常
 */
export class ParamsError extends CommonError {
  constructor(msg = "参数异常") {
    super(PARMAS_ERROR_CODE, msg);
  }
}
