import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

let data;

app.get("/", (req, res) => {
  res.render("./index.html", { info: data });
});

app.post("/recipe", (req, res) => {
    
    res.redirect("/");
  });
  
  app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
  });