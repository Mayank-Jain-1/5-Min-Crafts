const express = require("express");
const fs = require("fs");
const restaurants = JSON.parse(fs.readFileSync("./restaurantdata.txt", "utf8"));
const mealtypes = JSON.parse(fs.readFileSync("./mealtype.txt", "utf8"));

const placeFilter = (place) => {
  return restaurants.filter(
    (rstr) => rstr.city_name.toLowerCase() === place.toLowerCase()
  );
};

const app = express();
app.get("/search/:city_name", (req, res) => {
  res.send(placeFilter(req.params.city_name));
});
app.get("/mealtypes", (req, res) => {
  res.send(mealtypes);
});
app.listen(3000);
