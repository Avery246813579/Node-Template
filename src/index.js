import express from "express";
import bodyParser from "body-parser";
import setupLoginRoutes from "./routes/login-routes";

const app = express();


setupLoginRoutes(app);

require('./tables/TableHandler')();

app.use(bodyParser.json());

app.get("/ping", (req, res) => {
  res.status(200).json({success: true});
})

app.listen(8069, () => {
  console.log("YO WAZZUP");
});
