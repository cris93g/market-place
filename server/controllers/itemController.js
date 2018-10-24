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
	},
	getMessenger(req, res, next) {
		const db = req.app.get("db");
		db.getMessenger()
			.then(response => res.status(200).json(response))
			.catch(err => res.status(500).send(err));
	},
	getDuffle(req, res, next) {
		const db = req.app.get("db");
		db.getDuffle()
			.then(response => res.status(200).json(response))
			.catch(err => res.status(500).send(err));
	},
	getBackpack(req, res, next) {
		const db = req.app.get("db");
		db.getBackpack()
			.then(response => res.status(200).json(response))
			.catch(err => res.status(500).send(err));
	},
	getWallet(req, res, next) {
		const db = req.app.get("db");
		db.getWallet()
			.then(response => res.status(200).json(response))
			.catch(err => res.status(500).send(err));
	},
	getBelt(req, res, next) {
		const db = req.app.get("db");
		db.getBelt()
			.then(response => res.status(200).json(response))
			.catch(err => res.status(500).send(err));
	},
	getShirt(req, res, next) {
		const db = req.app.get("db");
		db.getShirt()
			.then(response => res.status(200).json(response))
			.catch(err => res.status(500).send(err));
	},
	getJacket(req, res, next) {
		const db = req.app.get("db");
		db.getJacket()
			.then(response => res.status(200).json(response))
			.catch(err => res.status(500).send(err));
	},
	getCert(req, res, next) {
		const db = req.app.get("db");
		db.getCert()
			.then(response => res.status(200).json(response))
			.catch(err => res.status(500).send(err));
	}
};
