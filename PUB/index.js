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
    switch (req.body.choice) {
      case "chicken":
        data = JSON.parse(recipeJSON)[0];
        break;
      case "beef":
        data = JSON.parse(recipeJSON)[1];
        break;
      case "fish":
        data = JSON.parse(recipeJSON)[2];
        break;
      default:
        break;
    }
    res.redirect("/");
  });
  
  app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
  });