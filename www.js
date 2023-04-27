// Require the framework
const Fastify = require("fastify");

// Instantiate Fastify with some config
const app = Fastify({
  logger: true,
});

// Register your application as a normal plugin.
const appService = require("./app.js");
app.register(appService);

// Start listening.
app.listen({ port: 3000, host: "0.0.0.0" }, (err) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
});
