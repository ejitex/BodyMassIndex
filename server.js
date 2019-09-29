const express = require("express");
const bodyParserBmi = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParserBmi.urlencoded({extended:true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index2.html")
});


app.post("/", function(res, req){
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  var answer = weightValue/(height * height);

  res.send("Your BMI is" + answer);
});


app.listen(port,function(){
  console.log("Running on port 3001");
});
