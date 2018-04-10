const { StitchClientFactory } = require("mongodb-stitch");
const { stitch, databases } = require("./../configs/db.config");

const clientPromise = StitchClientFactory.create(stitch.appId);

module.exports.clientPromise = clientPromise;

module.exports.getDb = async (dbName = databases.params) => {
  const client = await clientPromise.then();
  await client.login("anon");
  return client.service("mongodb", "mongodb-atlas").db(dbName);
};
