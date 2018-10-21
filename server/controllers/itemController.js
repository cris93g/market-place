module.exports = {
	addNewItem: (req, res, next) => {
		const db = req.app.get("db");
		const {
			name,
			quantity,
			img_url,
			category,
			description,
			price,
			item_id
		} = req.params;
		db.addProducts([
			item_id,
			name,
			quantity,
			img_url,
			category,
			price,
			description
		])
			.then(response => {
				res.status(200).send(response);
			})
			.catch(err => res.status(500).send(err));
	}
};
