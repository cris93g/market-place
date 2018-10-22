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
  getLaptop(req, res, next) {
    const db = req.app.get("db");
    db.getLaptops()
      .then(response => res.status(200).json(response))
      .catch(err => res.status(500).send(err));
  }
};
