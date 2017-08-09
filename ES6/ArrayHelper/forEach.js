/**
 * Created by siri on 2017-06-16.
 */
function handlePosts() {
    var posts = [
        {id: 23, title: 'Daily JS News'},
        {id: 52, title: 'Code Refactor City'},
        {id: 105, title: 'The Brightest Ruby'}
    ];

    posts.forEach(post => savePost(post));
}

function savePost(post) {
    console.log(post);
}

handlePosts();

/**
 * The array below contains an array of objects, each of which is a representation of an image.
 * Using the forEach helper, calculate the area of each image and store it in a new array called 'areas'.
 * The area of an image can be calculated as 'image.height * image.width'.
 */

var images = [
    { height: 10, width: 30 },
    { height: 20, width: 90 },
    { height: 54, width: 32 }
];
var areas = [];

images.forEach((image)=>{
    areas.push(image.height*image.width);
});

console.log(areas);