catchAsyncErrors = require("./catchAsyncErrors");
const jwt = require("jsonwebtoken");
const ErrorHandler = require("../utils/errorHandler");
const User = require("../models/userModel");

exports.isAuthorizedUser = catchAsyncErrors(async (req, res, next) => {
  const { siwatechtoken } = await req.cookies;
  if (!siwatechtoken) {
    return next(new ErrorHandler("Please login to access this resource", 401));
  }
  let decodedData = jwt.verify(
    siwatechtoken,
    "AAMKMSKXMskjdcmsdkjcxsdxsxsxsxssdkcsdkjcnsk"
  );

  req.user = await User.findById(decodedData._id);

  next();
});

exports.authorizedRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorHandler(
          `Role: ${req.user.role} is not allowed to access this resource`,
          403
        )
      );
    }
    next();
  };
};
