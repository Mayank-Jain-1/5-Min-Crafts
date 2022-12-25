class restaurant {
  constructor(name, address, city) {
    this.name = name;
    this.address = address;
    this.city = city;
  }

  info() {
    return {
      name: this.name,
      address: this.address,
      city: this.city,
    };
  }
}

class restaurantManager {
  constructor() {
    this.restaurantList = [];
  }

  addRestaurant(restaurant) {
    this.restaurantList.push(restaurant.info());
  }

  printAllRestaurantNames() {
    let result = [];
    this.restaurantList.map((restaurant) => {
      result.push(restaurant.name);
    });
    console.log(result);
  }

  filterRestaurantByCity(city) {
    let result = this.restaurantList.filter((restaurant) => {
      if (restaurant.city === city) {
        return true;
      } else return false;
    });
    return result;
  }
}

const r1 = new restaurant("DelhiBelly", "Somewher Not in Delhi", "rohini");
const r2 = new restaurant("Mannat", "sector 37", "Chandigarh");
const r3 = new restaurant("Kalsang", "South City", "Ludhiana");

const manager = new restaurantManager();
manager.addRestaurant(r1);
manager.addRestaurant(r2);
manager.addRestaurant(r3);

console.log("\n\nProblem 1 ->\n");
console.log("Here is a list of all the restaurants");
manager.printAllRestaurantNames();
console.log("\nHere is a list of all the restaurants with city Ludhiana");
console.log(manager.filterRestaurantByCity("Ludhiana"));

console.log("\n\nProblem 2 ->\n");

const orderData = {
  "Below 500": 20,
  "500-1000": 29,
  "1000-1500": 30,
  "1500-2000": 44,
  "Above 2000": 76,
};

function caculateTotalOrder(orders){
  let result = 0;
  Object.values(orders).forEach((x) => {
    result += x;
  })
  return result
}

function calculateOrderProportions(orders){
  let result = Object.keys(orders).length;
  return result
}

function getPercentageOrders(orders){
  const totalOrders = caculateTotalOrder(orders);
  let result = [];
  let id = 0;
  for ( key in orders){
    id++;
    result.push(
      {
        id:id,
        order: key,
        'order percentage': ((orders[key]/totalOrders)*100).toFixed(2),
        restaurant: 'Punjabi Tadka'
      }
    );
  }
  console.log(result);
}

console.log('Total numbers of order placed = ' , caculateTotalOrder(orderData));
console.log('Total numbers of order proportions = ' , calculateOrderProportions(orderData));
getPercentageOrders(orderData);