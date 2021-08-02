/* 项目启动的入口 */
const app = require("./app");

const port = 4000;
console.log("app", app)

app.listen(port, () => {
  console.log("项目启动成功, http://localhost:", port);
});
