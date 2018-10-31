//functions that call upon our db folder sql querys to get info from db
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
  //function to get all of our leather items from db file
  getLeatherItems(req, res, next) {
    const db = req.app.get("db");
    db.getLeather()
      .then(response => res.status(200).json(response))
      .catch(err => res.status(500).send(err));
  },
  //function to get all of our clothes from db file
  getApparelItems(req, res, next) {
    const db = req.app.get("db");
    db.getApparel()
      .then(response => res.status(200).json(response))
      .catch(err => res.status(500).send(err));
  },
  //function get all of our accessories from db file
  getAccesoryItems(req, res, next) {
    const db = req.app.get("db");
    db.getAccesory()
      .then(response => res.status(200).json(response))
      .catch(err => res.status(500).send(err));
  },
  //function to get all our totes from db file
  getTotes(req, res, next) {
    const db = req.app.get("db");
    db.getTotes()
      .then(response => res.status(200).json(response))
      .catch(err => res.status(500).send(err));
  },
  //function to get all our messenger bags from db
  getMessenger(req, res, next) {
    const db = req.app.get("db");
    db.getMessenger()
      .then(response => res.status(200).json(response))
      .catch(err => res.status(500).send(err));
  },
  //function to get all of our duffle bags from db
  getDuffle(req, res, next) {
    const db = req.app.get("db");
    db.getDuffle()
      .then(response => res.status(200).json(response))
      .catch(err => res.status(500).send(err));
  },
  //function to get all our backpacks from db file
  getBackpack(req, res, next) {
    const db = req.app.get("db");
    db.getBackpack()
      .then(response => res.status(200).json(response))
      .catch(err => res.status(500).send(err));
  },
  //function to get all of our wallets from db file
  getWallet(req, res, next) {
    const db = req.app.get("db");
    db.getWallet()
      .then(response => res.status(200).json(response))
      .catch(err => res.status(500).send(err));
  },
  //function to get all of our belts from db
  getBelt(req, res, next) {
    const db = req.app.get("db");
    db.getBelt()
      .then(response => res.status(200).json(response))
      .catch(err => res.status(500).send(err));
  },
  //function to get all of our shirts from db file
  getShirt(req, res, next) {
    const db = req.app.get("db");
    db.getShirt()
      .then(response => res.status(200).json(response))
      .catch(err => res.status(500).send(err));
  },
  //function to get all of jackets from db file
  getJacket(req, res, next) {
    const db = req.app.get("db");
    db.getJacket()
      .then(response => res.status(200).json(response))
      .catch(err => res.status(500).send(err));
  },
  //function to get certificate from db files
  getCert(req, res, next) {
    const db = req.app.get("db");
    db.getCert()
      .then(response => res.status(200).json(response))
      .catch(err => res.status(500).send(err));
  }
};
