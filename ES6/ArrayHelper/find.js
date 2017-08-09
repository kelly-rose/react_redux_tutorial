/**
 * Created by siri on 2017-06-19.
 */
var users = [
    { id: 1, admin: false },
    { id: 2, admin: false },
    { id: 3, admin: true }
];

var admin = users.find(user=>user.admin===true);
console.log(admin);

var accounts = [
    { balance: -10 },
    { balance: 12 },
    { balance: 0 }
];

var account = accounts.find(account=>account.balance===12);
console.log(account);

var obj = {
    a : 'a',
    b : 'b',
    c :  123
};

console.log(Object.keys(obj));  // ['a','b','c'];
console.log(Object.keys(obj)[0]);  // a

var ladders = [
    { id: 1, height: 20 },
    { id: 2, height: 25 },
    { id: 3, height: 25 }
];

function findWhere(array, criteria) {
    return array.find(function (element) {
        return element[Object.keys(criteria)]===criteria[Object.keys(criteria)];
    });
}

var ladder= findWhere(ladders, { height: 25 });
console.log(ladder);

// result: { id:3, height: 25 }