const swaggerUI = require("swagger-ui-express");
const YAML = require("js-yaml");
const fs = require("fs");

const path = require("path");
const apiYamlPath = path.join(__dirname, "api.yaml");
const swaggerJSDocs = YAML.load(fs.readFileSync(apiYamlPath, "utf8"));

const options = {
  customCss: ".swagger-ui .topbar { display: none }",
};

module.exports = {
  swaggerServe: swaggerUI.serve,
  swaggerSetup: swaggerUI.setup(swaggerJSDocs, options),
};
