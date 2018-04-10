const { wrapRequest, BadRequestError } = require("./../utils");
const { getDb } = require("./../utils/stitch");
const { wordsCollections, databases } = require("./../configs/db.config");

const pack = (req, res) => {
  if (!req.params.packId || !wordsCollections.includes(req.params.packId)) {
    return Promise.reject(new BadRequestError("Pack id is required"));
  }
  return getDb(databases.words).then(db =>
    db
      .collection(req.params.packId)
      .find()
      .execute()
  );
};

module.exports = wrapRequest(pack, "Getting pack words error");
