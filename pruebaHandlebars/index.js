const express = require('express');
const path = require('path');
const app = express();
const engines = require('consolidate')

app.engine('hbs', engines.handlebars)
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs" )

app.get("/mirror", function(req, res) {
  res.render("eyes", { name: "white", code: "FFFFFF"})
})

const server = app.listen(8000, function(){
   console.log(`Listening http://localhost:${server.address().port}`)
})