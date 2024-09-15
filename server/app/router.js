const express = require("express");

const router = express.Router();

const userActions = require("./controllers/UserActions");

router.get("/users", userActions.browse);
router.get("/users/:id", userActions.read);
router.post("/users", userActions.add);
router.delete("/users/:id", userActions.destroy);
router.put("/users/:id", userActions.edit);

module.exports = router;
