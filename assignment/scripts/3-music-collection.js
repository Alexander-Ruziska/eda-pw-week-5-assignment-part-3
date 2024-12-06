console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

const myCollection = [];  
function addToCollection(collection, title, artist, yearPublished) {  
  let newAlbum = {  
   title: title,  
   artist: artist,  
   yearPublished: yearPublished  
  };   
  collection.push(newAlbum);  
  return newAlbum;    
} 
let albums = [  
  { title: "The Big One", artist: "Geazy", yearPublished: 1943 },  
  { title: "The Medium One", artist: "Geazy", yearPublished: 1944 },  
  { title: "The Small One", artist: "Geazy", yearPublished: 1945 },  
  { title: "Tacos are  my friend", artist: "Taco Vato", yearPublished: 1978 },  
  { title: "Lasagna is the only food for me", artist: "John Mayer", yearPublished: 2010 },  
  { title: "Big and Blue", artist: "Smeazy", yearPublished: 1998 },  
  { title: "The Big Sad", artist: "John Cena", yearPublished: 2024 } 
];  
albums.forEach(album => {  
  addToCollection(myCollection, album.title, album.artist, album.yearPublished);  
});  
  
console.log(myCollection);

function showCollection(collection) {
  collection.forEach(album => {  
    console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished}`);  
   });  
 }  
   
 showCollection(myCollection);

function findByArtist(collection, artist) {  
  // Create an empty array to hold any matching results  
  let matchingAlbums = [];  
  
  // Loop through the collection and add any album objects with a matching artist to the array  
  collection.forEach(album => {  
   if (album.artist.toLowerCase() === artist.toLowerCase()) {  
    matchingAlbums.push(album);  
   }  
  });  
 
  return matchingAlbums;  
}  

console.log("Testing findByArtist function:");  
console.log("Searching for 'Ham'. (This should be blank):");  
let results1 = findByArtist(myCollection, "Ham");  
console.log(results1);  
  
console.log("Searching for 'John Cena':");  
let results2 = findByArtist(myCollection, "John Cena");  
console.log(results2);  
   
let album8 = { title: "What What", artist: "Butters Stotch", yearPublished: 2022 };  
myCollection.push(album8);  
  
console.log("Searching for 'Butters Stotch':");  
let results3 = findByArtist(myCollection, "Butters Stotch");  
console.log(results3);










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
