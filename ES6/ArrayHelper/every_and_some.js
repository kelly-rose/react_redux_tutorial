/**
 * Created by siri on 2017-06-20.
 */
function Field(value) {
    this.value=value;
}

Field.prototype.validate=function () {
    return this.value.length>0;
}

var username = new Field("cool2");
var password = new Field("my_pwd");
var birthdate = new Field("10/10/2010");

var fields =[username,password,birthdate];

let formIsValid = fields.every(function (filed) {
   return filed.validate();
});

console.log(formIsValid);

if(formIsValid){
    console.log(`allow user to submit!`);
}else{
    console.log(`show an error message`);
}


var users = [
    { id: 21, hasSubmitted: true },
    { id: 62, hasSubmitted: false },
    { id: 4, hasSubmitted: true }
];

var hasSubmitted = users.every(user=>user.hasSubmitted===true);

console.log(hasSubmitted);

var requests = [
    { url: '/photos', status: 'complete' },
    { url: '/albums', status: 'pending' },
    { url: '/users', status: 'failed' }
];

var inProgress= requests.some(req=>req.status==='pending');

console.log(inProgress);
