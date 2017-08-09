/**
 * Created by siri on 2017-06-23.
 */
function createBookShop(inventory) {
    return {
        inventory,
        inventoryValue() {
            return this.inventory.reduce((total,book)=>total+book.price,0);
        },
        priceForTitle(title) {
            return this.inventory.find(book=>book.title===title).price;
        }
    };
}

const inventory = [
    {title:'Harry Potter',price : 10},
    {title:'Eloquent javascript',price : 15}
];

const bookShop = createBookShop(inventory);

console.log(bookShop.inventoryValue());
console.log(bookShop.priceForTitle('Harry Potter'));

//---------------------------
function User(id) {
    this.id =id;
}

function generateId() {
    return Math.random()*9999999;
}

function createAdminUser(user=new User(generateId())) {
    user.admin=true;
    return user;
}
const user= new User(generateId());
createAdminUser(user);
