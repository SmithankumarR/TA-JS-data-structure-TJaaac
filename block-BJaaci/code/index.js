let movies = [
  {
    id: '1',
    title: 'Game Night',
    year: '2018',
    genres: ['Action', 'Comedy', 'Crime'],
    releaseDate: '2018-02-28',
    actors: ['Rachel McAdams', 'Jesse Plemons', 'Jason Bateman'],
  },
  {
    id: '2',
    title: 'Area X: Annihilation',
    year: '2018',
    genres: ['Adventure', 'Drama', 'Fantasy'],
    releaseDate: '2018-02-23',
    actors: ['Tessa Thompson', 'Jennifer Jason Leigh', 'Natalie Portman'],
  },
  {
    id: '3',
    title: 'Hannah',
    year: '2017',
    genres: ['Drama'],
    releaseDate: '2018-01-24',
    actors: ['Charlotte Rampling', 'Andr Wilms', 'Phanie Van Vyve'],
  },
];

/*
Go through the variable named movies properly before solvinf the exercises.
Use the variable named movies to solve the requirement below.
*/
// 1. Log the value of the title key in the first movie of the array named `movies`
console.log(movies[0].title)
// 2. Log the value of the title key in the last movie of the array named `movies`
console.log(movies[movies.length - 1].title)
// 3. Log the value of the title key in the second movie (index 1) of the array named `movies`
console.log(movies[1].title)
// 4. Log the value of the year key in the first movie of the array named `movies`
console.log(movies[0])
// 5. Log all the named of actors (key named actors) of the first movie
for(actor of movies[1].actors){
console.log(actor)
}
// 6. Log the name of the first actor of the first movie
console.log(movies[1].actors[0])
// 7. Log the name of the last actor of the first movie
console.log(movies[1].actors[movies[0].actors.length - 1])
// 8. Log the name of the second actor (index 1) of the first movie
console.log(movies[1].actors[1])

// 9. Log the name of the second actor (index 1) of the seco
console.log(movies[1].actors[1])

// 10. Log the name of the last actor of the thrid movie
console.log(movies[2].actors[2])

// 11. Log the name of the second actor (index 1) of the third movie
console.log(movies[2].actors[1])

// 12. Log all the genres of the third movie
console.log(movies[2].genres)

// 13. Log all the genres of the first movie
console.log(movies[0].genres)

// 14. Log the first genres of the first movie
console.log(movies[0].genres[0])

// 15. Log the first genres of the second movie
console.log(movies[1].genres[0])

// 16. Log the last genres of the first movie (using the length property of array)
console.log(movies[0].genres[movies.length - 1])

// 17. Log the first genres of the second movie (using the length property of array)
console.log(movies[1].genres[0])
// 18. Log all the genres of the first movie one by one
for(let gener of movies[0].genres){
  console.log(gener)
}
// 19. Log all the genres of the second movie one by one
for(let gener of movies[1].genres){
  console.log(gener)
}
// 20. Log if the first actor of the first movie is `Rachel McAdams` or not (You have to log true or false)
console.log(movies[0].actors[0] == "Rachel McAdams");
// 21. Log if the second actor (index 1) of the second movie is `Natalie Portman` or not (You have to log true or false)
console.log(movies[0].actors[0] == "Natalie portman");
// 22. Log if the year of all three movies is greater than `2017` or not one by one. (Log true or false)
for(let movie of movies){
    console.log(movie.year > 2017)
 }
// 23. Log the title of all three movies one by one.
for(let movie of movies){
  console.log(movie.title)
}
// 24. Log if the title of the first movie is `Hannah` or not
console.log(movies[0].title == "Hannah");

// 25. Log the number of actors in all three movies one by one


for(let movie of movies){
for(let actor of movies.actors){
  console.log(actor);
}
}
// 26. Log the number of genres in all three movies one by one
for(let movie of movies){
console.log(movie.genres.length, `length`) 
}
// 27. Log the name of all the movies with more than 1 genre
for(let movie of movies){
  if(movie.genres.length > 1, `length`) {
    console.log(movies.title)
  }
  }
// 28. Log the name of all the movies with more than 1 actors
for(let movie of movies){
  if(movie.actors.length > 1){
    console.log(movie.title);
  }
}
// 29. Log the name of all the movies with exactly 3 actors
for(let movie of movies){
  if(movie.actors.length === 3){
    console.log(movie.title);
  }
}
