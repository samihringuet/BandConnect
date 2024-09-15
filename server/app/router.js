const express = require("express");

const router = express.Router();

const userActions = require("./controllers/UserActions");
const announceActions = require("./controllers/AnnounceAction");

router.get("/user", userActions.browse);
router.get("/announce", announceActions.browse);

router.get("/user/:id", userActions.read);
router.get("/announce/:id", announceActions.read);

router.post("/user", userActions.add);
router.post("/announce", announceActions.add);

router.delete("/user/:id", userActions.destroy);
router.delete("/announce/:id", announceActions.destroy);

router.put("/user/:id", userActions.edit);
router.put("/announce/:id", announceActions.edit);

module.exports = router;
