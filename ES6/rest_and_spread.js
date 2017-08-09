/**
 * Created by siri on 2017-06-23.
 */
function addNumber(...numbers) {
    console.log(numbers);   //[1,2,3,4,5,6,7]
    return numbers.reduce((sum,num)=> sum+num,0);
}

console.log(addNumber(1,2,3,4,5,6,7));

const defaultColors = ['red','green'];
const userFavoriteColors=['orange','yellow'];
const fallColors=['fire red','fall orange'];

defaultColors.concat(userFavoriteColors);   //['red','green','orange','yellow']

//['blue','fire red','fall orange','red','green','orange','yellow']
['blue',...fallColors,...defaultColors,...userFavoriteColors];

function validateShoppingList(...items) {
    if(items.indexOf('milk')<0){
        return ['milk',...items];   //['milk','blue','fire red','fall orange']
    }

    return items;
}

validateShoppingList('blue','fire red','fall orange');


function product(...numbers) {  //rest operator
    return numbers.reduce(function(acc, number) {
        return acc * number;
    }, 1)
}

console.log(product(1,2,3,4,5));

const array=['happy','Friday'];

function unshift(array, ...array2) {
    return [...array2,...array];    //spread operator
}

console.log(unshift(array,1,2,3,4,5));