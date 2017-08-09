/**
 * Created by siri on 2017-06-18.
 */
var cars=[
    {model:'A', price:'CHEAP'},
    {model:'B', price:'EXPENSIVE'},
];

var prices = cars.map(function(car){
    console.log(car.price);
    return car.price;
});

console.log(prices);

var images = [
    { height: '34px', width: '39px' },
    { height: '54px', width: '19px' },
    { height: '83px', width: '75px' },
];

var heights = images.map(function (image) {
    return image.height;
});

console.log(heights);


var trips = [
    { distance: 34, time: 10 },
    { distance: 90, time: 50 },
    { distance: 59, time: 25 }
];

var speeds= trips.map(function(trip){
    return trip.distance/trip.time;
});

console.log(speeds);


var paints = [ { color: 'red' }, { color: 'blue' }, { color: 'yellow' }];
pluck(paints, 'color'); // returns ['red', 'yellow', 'blue'];

function pluck(array,property) {
    let result = array.map(function (arr) {
        return arr[property];
    });

    console.log(result);
}