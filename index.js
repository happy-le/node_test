/* 项目启动的入口 */
import app from "./app";

const port = 51129;
 
app.listen(port, () => {
  console.log(`项目启动成功, http://127.0.0.1:${port}`);
});
