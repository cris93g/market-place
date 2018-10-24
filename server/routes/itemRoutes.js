const {
	addNewItem,
	getLeatherItems,
	getApparelItems,
	getAccesoryItems,
	getTotes
} = require("../controllers/itemController");
const routes = app => {
	app.post("/api/items", addNewItem);
	app.get("/api/leather", getLeatherItems);
	app.get("/api/apparel", getApparelItems);
	app.get("/api/accesory", getAccesoryItems);
	app.get("/api/totes", getTotes);
};
module.exports = routes;
