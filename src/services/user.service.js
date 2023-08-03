const httpStatus = require("http-status");
const { User } = require("../models");

const getUserAccountByWalletAddress = async (walletAddress) => {
  try {
    return await User.findOne({
      walletAddress: walletAddress.toLowerCase(),
    }).select(["avatar", "userName", "bio", "walletAddress"]);
  } catch (err) {
    throw err;
  }
};

const updateUserAccount = async (data) => {
  try {
    const { avatar, userName, bio, walletAddress } = data;
    let user = await User.findOne({
      walletAddress: walletAddress.toLowerCase(),
    });
    if (!user) {
      const refinedData = avatar === 'same' ? { ...data, avatar: 'default' } : data;
      return User.create({
        ...refinedData,
        walletAddress: walletAddress.toLowerCase(),
      });
    }
    if (avatar === 'same') {
      Object.assign(user, { userName, bio });
    } else {
      Object.assign(user, { avatar, userName, bio }); 
    }
    await user.save();
    return {
      userName: user.userName,
      avatar: user.avatar,
      bio: user.bio,
      walletAddress: user.walletAddress,
    };
  } catch (err) {
    throw err;
  }
};

module.exports = {
  getUserAccountByWalletAddress,
  updateUserAccount,
};
