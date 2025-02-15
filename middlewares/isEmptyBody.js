import { HttpError } from "../helpers/index.js";

const isEmptyBody = (req, res, next) => {
  const keys = Object.keys(req.body);
  console.log();
  if (!keys.length) {
    return next(HttpError(400, "missing fields"));
  }
  next();
};

export default isEmptyBody;
