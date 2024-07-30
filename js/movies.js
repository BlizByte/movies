var input_filter = document.getElementById("filter");
var button_filter = document.getElementById("button-filter");

// Fetch Category Data
function getCategory() {
    fetch(LINK_CATEGORY).then(r => r.json())
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
    fetch(LINK_CONTENT + id).then(r => r.json())
    .then((response) => {
        var results = response.results
        results.map(result => {
            movies.innerHTML += `<a href="detail.html?id=${result.id}"><img src="${LINK_GAMBAR + result.poster_path}"/></a>`
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