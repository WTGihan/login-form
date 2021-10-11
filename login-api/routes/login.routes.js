const { login } = require("../controllers/login.controller");

const loginUserData = {
  schema: {
    body: {
      type: "object",
      require: ["email", "password"],
      properties: {
        email: { type: "string" },
        password: { type: "string" },
      },
    },
  },
  handler: login,
};

function loginRoutes(fastify, options, done) {
  fastify.post("/login", loginUserData);

  done();
}

module.exports = loginRoutes;
