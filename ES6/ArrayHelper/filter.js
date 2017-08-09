/**
 * Created by siri on 2017-06-18.
 */
var products = [
    { name: 'cucumber', type:'vegetable',quantity:0 ,price:1},
    { name: 'banana', type:'fruit',quantity:10 ,price:15},
    { name: 'celery', type:'vegetable',quantity:30 ,price:13},
    { name: 'orange', type:'fruit',quantity:3 ,price:5}
];

var fruit = products.filter(function (product) {
   return product.type==='fruit';
});

console.log(fruit);

//Type is 'vegetable', quantity is greater than 0, price is less than 15
var vegetable = products.filter(function (product) {
    return product.type==='vegetable'
        && product.quantity>0
        && product.price<15;
});

console.log(vegetable);

var post = { id: 4, title:'You are beautiful'};

var comments = [
    { postId: 3, content:'awesome post'},
    { postId: 4, content:'Everything will work out in the end'},
    { postId: 4, content:'neat'}
];

function commentsForPost(post,comments) {
    return comments.filter(function (comment) {
       return comment.postId===post.id;
    });
}

let practice = commentsForPost(post,comments);

console.log(practice);

var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

// var filteredNumbers = numbers.filter((number)=>number>50);

//If 이터레이션 function is not arrow function, you must use return keyword in 이터레이션 function.
var filteredNumbers = numbers.filter(function (number) {
   return number>50;
});

console.log(filteredNumbers);


var users = [
    { id: 1, admin: true },
    { id: 2, admin: false },
    { id: 3, admin: false },
    { id: 4, admin: false },
    { id: 5, admin: true },
];

var filteredUsers = users.filter((user)=>user.admin===true);

console.log(filteredUsers);

var numbers = [10, 20, 30];
var lessThanFifteen = reject(numbers, function(number){
    return number > 15;
});

console.log(lessThanFifteen); // [ 10 ];

// solution01
// function reject(array, iteratorFunction) {
//     return array.filter(function(num) {
//         console.log(num);
//         return !iteratorFunction(num)});
// }


//solution02
function reject(array, iteratorFunction) {
    var step1 = array.filter(iteratorFunction); //[20,30]

    return array.filter(num => {
        // console.log(step1.indexOf(8));
        return step1.indexOf(num) === -1;
    });
}