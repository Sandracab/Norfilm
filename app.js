/* Array with information on movies */
const descriptionText = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa perferendis numquam nostrum vero, perspiciatis illo minima sed ducimus alias earum hic, voluptates totam necessitatibus eius?"
const moviesList = [
  {
    title: "Amelie", description: descriptionText, 
    heroImage: "hero-amelie.jpg", coverImage: "amelie.png",
    score: 9.5, time: 126, ageLimit: 11, releaseYear: 2001,
    category: ["Romance", "Comedy"]
  },
  {
    title: "Aquaman", description: descriptionText, 
    heroImage: "hero-aquaman.jpg", coverImage: "aquaman.jpg",
    score: 6.7, time: 157, ageLimit: 16, releaseYear: 2020,
    category: ["Action"]
  },
  {
    title: "Blue Planet", description: descriptionText, 
    heroImage: "hero-blueplanet.jpg", coverImage: "blueplanet.jpeg",
    score: 9.5, time: 108, ageLimit: 11, releaseYear: 2018,
    category: ["Documentary", "Nature"]
  },
  {
    title: "Good Boys", description: descriptionText, 
    heroImage: "hero-goodboys.jpg", coverImage: "goodboys.jpg",
    score: 7.8, time: 103, ageLimit: 11, releaseYear: 2020,
    category: ["Comedy"]
  },
  {
    title: "I Am Number Four", description: descriptionText, 
    heroImage: "hero-iamnumberfour.jpg", coverImage: "iamnumberfour.jpg",
    score: 6.8, time: 222, ageLimit: 16, releaseYear: 2018,
    category: ["Science-fiction"]
  },
  {
    title: "Joker", description: descriptionText, 
    heroImage: "hero-joker.jpg", coverImage: "joker.jpg",
    score: 9.0, time: 206, ageLimit: 16, releaseYear: 2020,
    category: ["Drama"]
  },
  {
    title: "Jumanji", description: descriptionText, 
    heroImage: "hero-jumanji.jpg", coverImage: "jumanji.jpg",
    score: 8.3, time: 94, ageLimit: 7, releaseYear: 2017,
    category: ["Comedy"]
  },
  {
    title: "Moonlight", description: descriptionText, 
    heroImage: "hero-moonlight.jpg", coverImage: "moonlight.jpg",
    score: 7.5, time: 88, ageLimit: 16, releaseYear: 2016,
    category: ["Drama"]
  },
  {
    title: "Natt til 17.", description: descriptionText, 
    heroImage: "hero-natttil17.jpg", coverImage: "natttil17.jpg",
    score: 7.1, time: 91, ageLimit: 3, releaseYear: 2015,
    category: ["Romance", "Teenage"]
  },
  {
    title: "The Intouchables", description: descriptionText, 
    heroImage: "hero-theintouchables.jpg", coverImage: "theintouchables.jpg",
    score: 9.8, time: 138, ageLimit: 11, releaseYear: 2011,
    category: ["Drama", "Comedy"]
  },
  {
    title: "The Walk", description: descriptionText, 
    heroImage: "hero-thewalk.jpg", coverImage: "thewalk.jpeg",
    score: 7.2, time: 83, ageLimit: 11, releaseYear: 2017,
    category: ["Drama", "History"]
  },
  {
    title: "Us", description: descriptionText, 
    heroImage: "hero-us.jpg", coverImage: "us.jpg",
    score: 6.7, time: 99, ageLimit: 18, releaseYear: 2018,
    category: ["Horror"]
  }
]

/* Different lists of movies */
let continueToWatchList = moviesList.filter( movie => movie.category == "Comedy");
let newMoviesList = moviesList.filter( movie => movie.releaseYear > 2019);
let myFavoritesList = moviesList.filter( movie => movie.score < 7);

/* Object with information on user */
const user = 
{
  name: "Fairy Lizard Queen", image: "user.png", 
  favoriteMovies: myFavoritesList,
  continueToWatch: continueToWatchList
}

/* Getting HTML objects */
const userContainer = document.querySelector("#user-container");
const mainContent = document.querySelector("#main-content");

/* Generate user content */
const generateUserContent = ( user ) => {
  userContainer.innerHTML = `
        <p>${user.name}</p>
        <div>
          <img src="images/${user.image}" alt="user profile picture">
        </div>
  `;
}

/* Generate Featured Movie Function*/
let numberOfFeatures = 0;

const generateFeaturedMovie = () => {
  let randomMovie = moviesList[Math.floor(Math.random() * moviesList.length)]
  var featuredContainer = document.createElement("article");
  featuredContainer.className = `featured-${numberOfFeatures} featured`;

  featuredContainer.innerHTML = `
  <img src="images/${randomMovie.heroImage}" alt="lorem">
          <div class="movie">
            <h2>${randomMovie.title}</h2>
            <p>${randomMovie.description}</p>
            <button class="play-btn">
              <p><i class="fas fa-play"></i> &nbsp; Spill Av</p>
            </button>
          </div>
      `;
      console.log(featuredContainer.innerHTML)
  mainContent.appendChild(featuredContainer);

  numberOfFeatures += 1;
}


/* Generate List Function */
let numberOfLists = 0;

const generateList = ( list ) => {

  var listContainer = document.createElement("section");
  let htmlTxt = "";

  if(numberOfLists % 2 == 0){
    listContainer.className = `horizontal`;

    list.forEach( movie => {
      htmlTxt += `
      <article style="background-image: url(images/${ 
        movie.heroImage })" class="movie">
      <h4>${movie.title}</h4>
      </article>
      `;
    })
  } else {
    listContainer.className = `vertical`;

    list.forEach( movie => {
      htmlTxt += `
      <article style="background-image: url(images/${ 
        movie.coverImage })" class="movie">
      <h4>${movie.title}</h4>
      </article>
      `;
    })
  }

  listContainer.innerHTML = htmlTxt;
  mainContent.appendChild(listContainer);
  numberOfLists += 1;
  console.log(numberOfLists)
}

/* Generate content Function */
const generateContent = () => {
  generateUserContent(user);

  generateFeaturedMovie();

  var continueToWatchHeader = document.createElement("h3");
  continueToWatchHeader.innerHTML = "Fortsett å se...";
  mainContent.appendChild(continueToWatchHeader);
  generateList(user.continueToWatch);

  var newMoviesHeader = document.createElement("h3");
  newMoviesHeader.innerHTML = "Nyheter";
  newMoviesHeader.id = "new-movies";
  mainContent.appendChild(newMoviesHeader);
  generateList(newMoviesList);

  generateFeaturedMovie();

  var favoriteMoviesHeader = document.createElement("h3");
  favoriteMoviesHeader.innerHTML = "Mine Favoritter";
  favoriteMoviesHeader.id = "my-favorites";
  mainContent.appendChild(favoriteMoviesHeader);
  generateList(user.favoriteMovies);

  var moviesHeader = document.createElement("h3");
  moviesHeader.innerHTML = "Filmer";
  moviesHeader.id = "movies";
  mainContent.appendChild(moviesHeader);
  generateList(moviesList);
  
}
generateContent();

/* Add Click Event to all movies and dynamic viewing of movie page info */
var moviesArray = document.querySelectorAll('.movie');
moviesArray.forEach(function( movie ) {

  movie.addEventListener('click', function() {
    let currentMovie = this.innerText;
    let currentMovieObject = moviesList.filter( movie => movie.title == currentMovie);

    let categoryHTML = "";
    currentMovieObject[0].category.forEach( category => categoryHTML += category);

    let sameCategory = moviesList.filter( movie => (movie.category[0] == currentMovieObject[0].category) && 
    (movie.title != currentMovieObject[0].title))

    mainContent.innerHTML = `
        <div class="chosen-movie" style="background-image: url(images/${ 
          currentMovieObject[0].heroImage }) ">
          <div class="movie-info-container">
            <h1>${currentMovieObject[0].title}</h1>
            <div>
              <p>${currentMovieObject[0].time} min</p>
              <p>${currentMovieObject[0].ageLimit}+</p>
              <p>${currentMovieObject[0].releaseYear}</p>
            </div>
              <p>Kategori: ${categoryHTML}</p>
          </div>
          <div class="button-container">
            <button class="play-btn">
              <p><i class="fas fa-play"></i> &nbsp; Spill Av</p>
            </button>
          </div>
        </div> 
        <div class="chosen-movie-info">
          <p>${currentMovieObject[0].description}</p>
          <div>
            <p><i class="fas fa-star fa-2x"></i>&nbsp;<span>${currentMovieObject[0].score}</span>/10</p>
            <p>${Math.floor(Math.random() * 30000)} stemmer</p>
            <a href="#">Les anmeldelser</a><br>
            <a href="#">+ Skriv anmeldelse</a>
          </div>
          <img src="images/${currentMovieObject[0].coverImage}" alt="${currentMovieObject[0].title}" height= "300"
          width= "200">
      </div>
  `;

  if(sameCategory){
    var recommendedMoviesHeader = document.createElement("h3");
    recommendedMoviesHeader.innerHTML = "Mer som denne filmen...";
    mainContent.appendChild(recommendedMoviesHeader);
    generateList(sameCategory);
  }

  })

})




