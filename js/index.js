var link_popular = "https://api.themoviedb.org/3/movie/popular?api_key=241213c1fea22c0b49c61e53273561e9"
var link_category = "https://api.themoviedb.org/3/genre/movie/list?api_key=241213c1fea22c0b49c61e53273561e9"
var link_content = "https://api.themoviedb.org/3/discover/movie?api_key=241213c1fea22c0b49c61e53273561e9&with_genres="
var gambar = "https://image.tmdb.org/t/p/w300"
var populer = document.getElementById("film-populer")

// Fetch Popular Data
fetch(link_popular).then(r => r.json())
.then((response) => {
    var hasil = response.results
    hasil.map(film => {
        populer.innerHTML += `
        <div class="card">
            <img src="${gambar + film.poster_path}" alt="">
        </div>`
    })
})

var input_filter = document.getElementById("filter");
var button_filter = document.getElementById("button-filter");

// Fetch Category Data
function getCategory() {
    fetch(link_category).then(r => r.json())
    .then((response) => {
        var genres = response.genres;
        genres.map(genre => {
            input_filter.innerHTML += `<option value="${genre.id}">${genre.name}</option>` 
        })
    })
}

var movies = document.getElementById("movies");

// Fetch content by category
function getContentCategory(id) {
    fetch(link_content + id).then(r => r.json())
    .then((response) => {
        var results = response.results
        results.map(result => {
            movies.innerHTML += `<img src="${gambar + result.poster_path}"/>`
        })
    })
}

function tampilkanFilter() {
    var value_filter = input_filter.value
    movies.innerHTML = ''
    getContentCategory(value_filter)
}

button_filter.addEventListener("click", tampilkanFilter);
getCategory()
getContentCategory("28")