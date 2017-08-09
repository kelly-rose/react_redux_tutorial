/*
 * Use the 'reduce' helper to find the sum of all the distances traveled.
 * Assign the result to the variable 'totalDistance'
 */

var trips = [{distance: 34}, {distance: 12}, {distance: 1}];

var totalDistance = trips.reduce(function (result, trip) {
    return result += trip.distance;
}, 0);

console.log(totalDistance);

/*
 * Use the 'reduce' helper to create an object that tallies the number of sitting and standing desks.
 * The object returned should have the form '{ sitting: 3, standing: 2 }'.
 * The initial value has been provided to you.
 */

var desks = [
    {type: 'sitting'},
    {type: 'standing'},
    {type: 'sitting'},
    {type: 'sitting'},
    {type: 'standing'}
];

var deskTypes = desks.reduce(function (obj, desk) {
    if (desk.type === 'sitting') {
        obj.sitting++;
    }

    if (desk.type === 'standing') {
       obj.standing++;
    }

    return obj;
}, {sitting: 0, standing: 0});


console.log(deskTypes);


/*
 * Write a function called 'unique' that will remove all the duplicate values from an array.
 For example, given the following array:
 var numbers = [1, 1, 2, 3, 4, 4];
 Your function should return
 [1, 2, 3, 4]
 */
var numbers = [1, 1, 2, 3, 4, 4];

function unique(array) {
  return  array.reduce(function (pre,num) {
       if(pre.indexOf(num)==-1){
           pre.push(num);
       }
        return pre;
    },[])

}

console.log(unique(numbers));
