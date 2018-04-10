const App = require("./app");

const config = require("./config.json")[process.env.NODE_ENV || "dev"];

App.start(config.port);
