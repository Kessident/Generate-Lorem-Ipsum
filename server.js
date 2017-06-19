const express = require("express");
const lorem = require("lorem-ipsum");
const app = express();

app.use(express.static("public"));

let loremNum;
app.get("/lorem",function(req,res){
  res.sendFile("public/html/index.html", {root: __dirname});
});

app.get("/lorem/:loremNum", function(req,res) {
  loremNum = req.params.loremNum;
  res.redirect("/lorem");
});

app.get("/loremGenerate", function (req, res){
  res.send(lorem());
});

app.get("/getLoremNum",function (req,res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send(loremNum);
});

app.listen(3000, function () {
  console.log("server running");
});
