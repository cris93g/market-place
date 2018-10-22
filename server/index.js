require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const massive = require("massive");
const routes = require("./routes/itemRoutes");

const app = express();
const port = process.env.port || 3001;
app.use(cors());
app.use(json());
routes(app);

massive(process.env.CONNECTION_STRING).then(dbinstance => {
  app.set("db", dbinstance);
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
