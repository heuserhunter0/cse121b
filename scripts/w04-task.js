/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Hunter Heuser",
    photo: "../images/profilePicture.png",
    favoriteFoods: [
        'Chicken',
        'Elk', 
        'Spaghetti',
        'Rice',
        'Mashed Potatoes',
        'Steak'
    ],
    hobbies: [
        'Video Games',
        'Visiting Friends',
        'Studying Scriptures',
        'Watching videos and Movies'
    ],
    placesLived: []
};


/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: 'Moses Lake, WA',
        length: '12 years'
    },
    {
        place: 'West Jordan, UT',
        length: '6 years'
    },
    {
        place: 'Surprise, AZ',
        length: '5 years'
    }
);



/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.getElementById('photo').src = myProfile.photo;
document.getElementById('photo').alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').append(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place;

    let dd = document.createElement('dd');
    dd.textContent = place.length;

    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
})

