const { addNewItem, getLaptop } = require("../controllers/itemController");
const routes = app => {
  app.post("/api/items", addNewItem);
  app.get("/api/laptops", getLaptop);
};
module.exports = routes;
