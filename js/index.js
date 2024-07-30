var populer = document.getElementById("film-populer")

// Fetch Popular Data
fetch(LINK_POPULAR).then(r => r.json())
.then((response) => {
    var hasil = response.results
    hasil.map(film => {
        populer.innerHTML += `
        <div class="card">
            <img src="${LINK_GAMBAR + film.poster_path}" alt="">
        </div>`
    })
})