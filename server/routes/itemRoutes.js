const { addNewItem } = require("../controllers/itemController");
const routes = app => {
	app.get("/healthcheck", (req, res) => {
		res.send({
			message: "Ok"
		});
	});
	app.post("/api/items", addNewItem);
};
module.exports = routes;
