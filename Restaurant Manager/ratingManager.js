ratingData = [
  { restaurant: "KFC", rating: 5 },
  { restaurant: "Burger King", rating: 4 },
  { restaurant: "KFC", rating: 3 },
  { restaurant: "Domino", rating: 2 },
  { restaurant: "Subway", rating: 3 },
  { restaurant: "Domino", rating: 1 },
  { restaurant: "Subway", rating: 4 },
  { restaurant: "Pizza Hut", rating: 5 },
];

let uniqueNames = [];
let ratingsDetails = {};
ratingData.forEach((x) => {
  let name = x.restaurant;
  if (!uniqueNames.includes(name)) {
    ratingsDetails[name] = {
      ratingsCount: 1,
      totalRating: x.rating,
      avgRating: x.rating,
    };
    uniqueNames.push(name);
  } else {
    ratingsDetails[name].totalRating += x.rating;
    ratingsDetails[name].ratingsCount ++;
    ratingsDetails[name].avgRating = ratingsDetails[name].totalRating / ratingsDetails[name].ratingsCount;
  }

});

function getAvgRating(ratingList){
  let result = [];
  for(res in ratingList){
    result.push(
      {
        restaurant: res,
        averageRating: ratingList[res].avgRating
      }
    );
  }
  return result
}

function filterRatings(minRating) {
  let result = avgRatings.filter((x) => x.averageRating >= minRating);
  return result
}

const avgRatings = getAvgRating(ratingsDetails);
const ratingOver4 = filterRatings(4);
console.log('\nAnswer a \n\n',avgRatings);
console.log('\nAnswer b \n\n',ratingOver4);