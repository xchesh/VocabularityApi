const { Router } = require("express");

const config = require("./config");
const packs = require("./packs");
const pack = require("./pack");

const router = Router();

router.get("/config", config);
router.get("/packs", packs);
router.get("/pack/:packId", pack);

module.exports = router;
