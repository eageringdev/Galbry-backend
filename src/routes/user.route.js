const express = require("express");
const router = express.Router();

// import validators
const { userValidation } = require("../validations");

// import controllers
const { userController } = require("../controllers");

// get user account from wallet
router.get(
  "/:walletAddress",
  userValidation.getUserAccountByWalletAddress,
  userController.getUserAccountByWalletAddress
);

// create or update user account info
router.post(
  "/",
  userValidation.updateUserAccount,
  userController.updateUserAccount
);

module.exports = router;
