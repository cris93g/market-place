module.exports = {
	addNewItem: (req, res, next) => {
		const db = req.app.get("db");
		const {
			name,
			quantity,
			img_url,
			category,
			description,
			price
		} = req.params;
		db.addProducts([name, quantity, img_url, category, price, description])
			.then(response => {
				res.status(200).json(response);
			})
			.catch(err => res.status(500).send(err));
	},
	getLeatherItems(req, res, next) {
		const db = req.app.get("db");
		db.getLeather()
			.then(response => res.status(200).json(response))
			.catch(err => res.status(500).send(err));
	},
	getApparelItems(req, res, next) {
		const db = req.app.get("db");
		db.getApparel()
			.then(response => res.status(200).json(response))
			.catch(err => res.status(500).send(err));
	},
	getAccesoryItems(req, res, next) {
		const db = req.app.get("db");
		db.getAccesory()
			.then(response => res.status(200).json(response))
			.catch(err => res.status(500).send(err));
	},
	getTotes(req, res, next) {
		const db = req.app.get("db");
		db.getTotes()
			.then(response => res.status(200).json(response))
			.catch(err => res.status(500).send(err));
	}
};
