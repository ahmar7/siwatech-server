// create cookie with token in a function, taking arguments from controller
const jwtToken = (user, statusCode, res) => {
  let token = user.generateToken();
  let options = {
    httpOnly: false,
    expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
  };

  res.status(statusCode).cookie("siwatechtoken", token, options).json({
    success: true,
    token,
    user,
  });
};
module.exports = jwtToken;
