const { addNewItem, getLaptop } = require("../controllers/itemController");
const routes = app => {
  app.get("/healthcheck", (req, res) => {
    res.send({
      message: "Ok"
    });
  });
  app.post("/api/items", addNewItem);
  app.get("/api/laptops", getLaptop);
};
module.exports = routes;
