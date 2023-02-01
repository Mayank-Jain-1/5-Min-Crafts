const express = require('express');
const app = express()
const restaurants = require('./restaurantdata.json')
const mealtypes = require('./mealtype.json')
// console.log('restaurants: ', restaurants);
// console.log('mealtypes: ', mealtypes)


const placeFilter = (place) => {
  return restaurants.filter(rstr => rstr.city_name.toLowerCase() === place.toLowerCase())  
}

app.get('/search/:city_name', (req,res) => {
  res.send(placeFilter(req.params.city_name));
})

app.get('/mealtypes' , (req,res) => {
  res.send(mealtypes)
})

app.listen(3000)