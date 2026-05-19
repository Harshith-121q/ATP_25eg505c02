// ASSIGNMENT 4: 
// ------------
// Movie Streaming Platform

// You are working on a movie recommendation system.

// Test data:
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];


// Tasks:
//     1. filter() only "Sci-Fi" movies
let SciFiMovies = movies.filter(m=>m.genre=="Sci-Fi")
console.log(SciFiMovies)

//     2. map() to return:   "Inception (8.8)"

let MovieInception = movies.map(e=>e.title=="Inception")
console.log("the new arr with movie inception :",MovieInception)
       

//     3. reduce() to find average movie rating
let averageRatings= movies.reduce((a,m)=>(a+m.rating,0))/movies.length
console.log("average movie ratings :",averageRatings)
//     4. find() movie "Joker"
let FindJoker = movies.find(m=>m.title=="Joker")
console.log(FindJoker)
    // 5. findIndex() of "Avengers"
let FindIndexOfAvenger = movies.findIndex(m=>m.title=="Avengers")
console.log(FindIndexOfAvenger)    