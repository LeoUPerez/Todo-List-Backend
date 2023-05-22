
const app = require("../src/App.js");
// require("./database.js");

async function main() {
  await app.listen(app.get("port"));
  console.log(`App funcionando en el puerto ${app.get("port")}`);
}

main();
