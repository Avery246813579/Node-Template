
export async function isAccountLoggedIn(req, res, next) {
  // DO SOMETHING ASYNC
  if (req.header.somethingrandomlol) {
    return res.status(404).send();
  }

  req.dog = "black";
  next();
}
