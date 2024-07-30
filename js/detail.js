var param = new URLSearchParams(window.location.search);
var id = param.get("id")

var title = document.getElementById("title");
var date = document.getElementById("date")
var overview = document.getElementById("overview")
var overlay = document.querySelector(".overlay")

fetch(LINK_DETAIL + id + KEY).then(r => r.json())
.then((response) => {
    title.innerText = response.title
    date.innerText = response.release_date
    overview.innerText = response.overview
    overlay.style.backgroundImage = `linear-gradient(rgb(0, 0, 0,.3), rgba(0,0,0,.9)), url("${LINK_BACKGROUND + response.backdrop_path}")`
})