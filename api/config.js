const { wrapRequest } = require("./../utils");
const { getDb } = require("./../utils/stitch");
const { collections } = require("./../configs/db.config");

const config = (req, res) =>
  getDb().then(db =>
    db
      .collection(collections.app)
      .find()
      .execute()
  );

module.exports = wrapRequest(config, "Config error");
