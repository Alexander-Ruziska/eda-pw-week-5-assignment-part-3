console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line


const myCollection = []; 

/*
[x] Take in a `collection` parameter. (This allows the function to be reused to add an album to any array of album objects.)
    [x] Take in the album's `title`, `artist`, `yearPublished` as parameters.
    [x] Create a new object having the above properties.
      [x] *NOTE*: Your object's properties **must** have `title`, `artist`, and `yearPublished` in order for this assignment's automated tests to work correctly!
    [x] Add the new object to the end of the `collection` array.
    [x] `return` the newly created object.
*/
function addToCollection(collection, title, artist, yearPublished) {  
  //if (title && artist && yearPublished) {
      //make newAlblum object with provided keys from parameters
  let newAlbum = {  //js shorthand for parameters that are used as the same object key, ie, {title: title} can be shortened to {title} 
    title: title,  
    artist: artist,  
    yearPublished: yearPublished  
   };   
   collection.push(newAlbum);  
   return newAlbum;    
  }
  //return;

//} 
// let albums = [  
//   { title: "The Big One", artist: "Geazy", yearPublished: 1943 },  
//   { title: "The Medium One", artist: "Geazy", yearPublished: 1944 },  
//   { title: "The Small One", artist: "Geazy", yearPublished: 1945 },  
//   { title: "Tacos are  my friend", artist: "Taco Vato", yearPublished: 1978 },  
//   { title: "Lasagna is the only food for me", artist: "John Mayer", yearPublished: 2010 },  
//   { title: "Big and Blue", artist: "Smeazy", yearPublished: 1998 },  
//   { title: "The Big Sad", artist: "John Cena", yearPublished: 2024 } 
// ];  

/*Create a function named showCollection. This function should:

Take in a collection parameter. (This allows it to be reused to show any array of album objects.)
Loop through the collection and console.log each album's information formatted within a single string, like: TITLE by ARTIST, published in YEAR.
Test the showCollection function.

Add a function named findByArtist. This function should:

Take in a collection parameter. Remember, we want to be able to search any collection!
Take in an artist (string) parameter.
Create an empty array to hold any matching results, if any.
Loop through the collection and add any album objects with a matching artist to the array.
Return the array with the matching results. (If no results are found, an empty array should be returned.)
Test the findByArtist function. Make sure to test with an artist you know is in the collection, as well as an artist you know is not in your collection. Check that for artists with multiple matches, all are returned.
*/

function showCollection(collection) {
  
  //array method 'forEach'
  // collection.forEach(album => {  
  //   console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished}`);  
  //  });  

  //for...of loop
  // for (let album of collection) {
  //   console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished}`); 
  // }

  //standard loop for(begin; condition; step)
  for (let i=0; i < collection.length; i++) {
    //collection[i] will be ONE album from our collection -> {title: '', artist: '', yearPublished: ''}
    const album = collection[i]; // Can remove and just use collection.title etc. In the consolelog.
    console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished}`);
  }
  }

  function findByArtist(collection, artist) {  
    // Create an empty array to hold any matching results  
    let matchingAlbums = [];  
    
    // Loop through the collection and add any album objects with a matching artist to the array  
    //collection.forEach(album => { 
      //what is album? it is an object that looks like this: {title: '', artist: 'John Cena', yearPublished: ''} 
      //john cena (after the .toLowerCase())
     /*if (album.artist.toLowerCase() === artist.toLowerCase()) {  
      matchingAlbums.push(album);  
     }  
    });  
   
    return matchingAlbums;  
  }  
*/
for (let album of collection) {  
   if (album.artist === artist) {  
    matchingAlbums.push(album);  
   }  
  }  

  // Return the array with the matching results  
  return matchingAlbums;  
  }





console.log('adding to myCollection', addToCollection(myCollection, "The Big One", "Geazy", 1943));
console.log('adding to myCollection', addToCollection(myCollection, "The Medium One", "Geazy", 1944));
console.log('adding to myCollection', addToCollection(myCollection, "The Small One", "Geazy", 1945));
console.log('adding to myCollection', addToCollection(myCollection, 'Lasagna is the only food for me', 'Joh Mayer', 2010));
console.log('adding to myCollection', addToCollection(myCollection, 'Big and Blue', 'Smeazy', 1998));
console.log('adding to myCollection', addToCollection(myCollection, "The Big Sad", "John Cena", 2024));
console.log('adding to myCollection', addToCollection(myCollection, "The Big Happy", "John Cena", 2026));

//add just my favorite albums
//console.log('adding to myCollection', addToCollection(myFavAlbums, "Weezer", "Weezer", 1995));
//console.log('adding to myCollection', addToCollection(myFavAlbums, "Enter Sandman", "Metalica", 1991));

//testing bad data
//console.log('adding to myCollection', addToCollection(myFavAlbums, "ham", "Metalica"));


//myCollection should have albums now!
console.log('myCollection', myCollection);

//myFavAlbums should have albums now!
//console.log('myFavAlbums', myFavAlbums);

//call showCollection with myCollection as the argument
showCollection(myCollection); 

//show just my favorite albums!
//showCollection(myFavAlbums);


console.log(findByArtist(myCollection, "Michael Jackson")); //False, will be empty
console.log(findByArtist(myCollection, "Geazy")); //True, should show 3 results


//Stretch Goal


// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
  