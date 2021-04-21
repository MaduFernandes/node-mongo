const application = require("./src/app");

const port = process.env.PORT || 3000;

application.listen(port, () => {
  console.log("Servidor rodando na porta " + port);
});
