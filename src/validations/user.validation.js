const { utils } = require("ethers");
const httpStatus = require("http-status");

const getUserAccountByWalletAddress = (req, res, next) => {
  const walletAddress = req.params.walletAddress;
  if (
    !walletAddress ||
    typeof walletAddress !== "string" ||
    !utils.isAddress(walletAddress)
  ) {
    return res
      .status(httpStatus.BAD_REQUEST)
      .send({ message: "Not a valid wallet address." });
  }
  next();
};

const updateUserAccount = (req, res, next) => {
  const { walletData } = req.body;
  const walletAddress = walletData?.address;
  if (
    !walletAddress ||
    typeof walletAddress !== "string" ||
    !utils.isAddress(walletAddress)
  ) {
    return res
      .status(httpStatus.BAD_REQUEST)
      .send({ message: "Not a valid wallet address." });
  }
  next();
};

module.exports = {
  getUserAccountByWalletAddress,
  updateUserAccount,
};
