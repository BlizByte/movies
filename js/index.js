var link = "https://api.themoviedb.org/3/movie/popular?api_key=241213c1fea22c0b49c61e53273561e9"
var gambar = "https://image.tmdb.org/t/p/w300"
var populer = document.getElementById("film-populer")

fetch(link).then(r => r.json())
.then((response) => {
    var hasil = response.results
    hasil.map(film => {
        populer.innerHTML += `
        <div class="card">
            <img src="${gambar + film.poster_path}" alt="">
        </div>`
    })
})