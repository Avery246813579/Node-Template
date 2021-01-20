import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());

app.get("/ping", (req, res) => {
  res.status(200).json({success: true});
})

app.listen(8069, () => {
  console.log("YO WAZZUP");
});
