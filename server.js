const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema");
const config = require("./config");

console.log(config.KEY);

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema
  })
);

app.get("/", (req, res) => res.redirect("/graphql"));

app.listen(config.PORT, () => console.log(`Listening on: ${config.PORT}`));
