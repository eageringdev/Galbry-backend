const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");
const { userServices } = require("../services");

const getUserAccountByWalletAddress = catchAsync(async (req, res) => {
  try {
    const user = await userServices.getUserAccountByWalletAddress(
      req.params.walletAddress
    );
    if (!user) {
      return res.status(httpStatus.OK).send({
        user: undefined,
      });
    }
    return res.status(httpStatus.OK).send(user);
  } catch (err) {
    console.log("getUserAccountByWalletAddress ERROR: ", err);
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
  }
});

const updateUserAccount = catchAsync(async (req, res) => {
  try {
    let { avatar, userName, bio, walletData } = req.body;
    avatar = typeof avatar === "string" ? avatar : "default";
    userName = typeof userName === "string" ? userName : "";
    bio = typeof bio === "string" ? bio : "";
    let walletAddress = walletData?.address;
    const user = await userServices.updateUserAccount({
      avatar,
      userName,
      bio,
      walletAddress,
    });
    return res.status(httpStatus.OK).send(user);
  } catch (err) {
    console.log("updateUserAccount ERROR: ", err);
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
  }
});

module.exports = {
  getUserAccountByWalletAddress,
  updateUserAccount,
};
