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

app.get("/", (req, res) => {
  res.send(restaurants);
});

app.get("/search/:city_name", (req, res) => {
  res.send(placeFilter(req.params.city_name));
});
app.get("/mealtypes", (req, res) => {
  res.send(mealtypes);
});

app.get("/filter", (req, res) => {
  const defaultFilter = {
    city: "",
    cuisinesarr: null,
    minCost: 0,
    maxCost: Number.MAX_VALUE,
    page: 1,
    pageSize: 4,
  };

  let { city, cuisinesarr, cost, sort, page, pageSize } = req.query;
  cuisinesarr = cuisinesarr
    ? cuisinesarr.toLowerCase().split("-")
    : defaultFilter.cuisinesarr;

  let minCost = defaultFilter.minCost,
    maxCost = defaultFilter.maxCost;
  city = city ? city.toLowerCase() : defaultFilter.city;
  page = page ? page : defaultFilter.page;
  pageSize = pageSize ? pageSize : defaultFilter.pageSize;

  if (cost) {
    switch (cost[0]) {
      case "<":
        minCost = 0;
        maxCost = parseInt(cost.slice(1));
        break;
      case ">":
        minCost = parseInt(cost.slice(1));
        maxCost = Number.MAX_VALUE;
        break;
      default:
        minCost = parseInt(cost.split("-")[0]);
        maxCost = parseInt(cost.split("-")[1]);
    }
  }

  const resultData = restaurants.filter((restaurant) => {
    return (
      minCost <= restaurant.cost &&
      restaurant.cost <= maxCost &&
      (!cuisinesarr ||
        restaurant.Cuisine.some((cuisine) =>
          cuisinesarr.includes(cuisine.name.toLowerCase())
        )) &&
      (!city || restaurant.city_name.toLowerCase() === city)
    );
  });

  switch (sort) {
    case "low":
      resultData.sort((a, b) => a.cost - b.cost);
      break;
    case "high":
      resultData.sort((a, b) => b.cost - a.cost);
      break;
    default:
      break;
  }

  res.send(resultData.slice((page - 1) * pageSize, page * pageSize));

  // res.send({ cuisinesarr, minCost, maxCost, sort, page });
});

app.listen(3000);
