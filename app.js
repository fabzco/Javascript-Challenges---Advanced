//Given a rating, display a star for each full rating and a full-stop for each half rating

function showRating(rating) {
  let ratings = "";
  for (let i = 0; i < Math.floor(rating); ++i) {
    ratings += "*";
    if (i !== Math.floor(rating) - 1) {
      ratings += " ";
    }
  }
  if (!Number.isInteger(rating)) {
    ratings += " .";
  }

  return ratings;
}
console.log(showRating(5));
console.log(showRating(4));
console.log(showRating(2.5));
console.log(showRating(0.5));


//Sort by lowest to highest price

function sortLowToHigh (arr) {
 return arr.sort((a, b) => a - b);
}

console.log(sortLowToHigh([20, 40, 10, 30, 50, 10]));

//Sort highest to lowest price from an array of objects

function sortHighToLow (numbers) {
  return numbers.sort((a, b) => b.price - a.price); 
}

console.log(
  sortHighToLow([
  { id: 1, price: 50 },
  { id: 3, price: -500 },
  { id: 2, price: 0 },
])
);

console.log(
  sortHighToLow([
  { id: 1, price: 50 },
  { id: 2, price: 8000 },
  { id: 3, price: -20 },
  { id: 4, price: 365 },
])
);