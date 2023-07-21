const swaggerUI = require("swagger-ui-express");
const YAML = require("js-yaml");
const fs = require("fs");
const swaggerJSDocs = YAML.load(fs.readFileSync("./config/api.yaml", "utf8"));

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Arif Books Express API with Swagger",
      version: "0.1.0",
      description:
        "This is a simple Book API application made with Express and documented with Swagger",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "skills with arif",
        url: "arif.com",
        email: "info@email.com",
      },
    },
  },
};

module.exports = {
  swaggerServe: swaggerUI.serve,
  swaggerSetup: swaggerUI.setup(swaggerJSDocs, options),
};
