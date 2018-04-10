const { wrapRequest } = require("./../utils");
const { getDb } = require("./../utils/stitch");
const { collections } = require("./../configs/db.config");

const packs = (req, res) =>
  getDb().then(db =>
    db
      .collection(collections.packs)
      .find()
      .execute()
  );

module.exports = wrapRequest(packs, "Get pack list error");
