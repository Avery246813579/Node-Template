import {isAccountLoggedIn} from "../middleware/account-middleware";
import {loginTest} from "../helpers/account-helper";

export default function setupLoginRoutes(app) {
  app.get("/login", [isAccountLoggedIn], (req, res) => {
    loginTest().then((data) => {
      res.status(200).json(data);
    }).catch((err) => {
      res.status(200).json({success: false, err});
    })
  });
}
