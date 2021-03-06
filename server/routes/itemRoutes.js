//gets variables from item controller file to be put into routes
const {
  addNewItem,
  getLeatherItems,
  getApparelItems,
  getAccesoryItems,
  getTotes,
  getMessenger,
  getDuffle,
  getBackpack,
  getWallet,
  getBelt,
  getShirt,
  getJacket,
  getCert
} = require("../controllers/itemController");
//all of the routes to get info from our server
const routes = app => {
  app.post("/api/items", addNewItem);
  app.get("/api/leather", getLeatherItems);
  app.get("/api/apparel", getApparelItems);
  app.get("/api/accesory", getAccesoryItems);
  app.get("/api/totes", getTotes);
  app.get("/api/messenger", getMessenger);
  app.get("/api/duffle", getDuffle);
  app.get("/api/backpack", getBackpack);
  app.get("/api/wallet", getWallet);
  app.get("/api/belt", getBelt);
  app.get("/api/shirt", getShirt);
  app.get("/api/jacket", getJacket);
  app.get("/api/cert", getCert);
};
//export the routes into server index file
module.exports = routes;
