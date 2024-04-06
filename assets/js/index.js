window.addEventListener("DOMContentLoaded", () => {
  let musicGenres = [
    "Pop music genre",
    "Hip hop music genre",
    "Rock music genre",
    "Rhythm and blues music genre",
    "Soul music genre",
    "Reggae music genre",
    "Country music genre",
    "Funk music genre",
    "Folk music genre",
    "Jazz music genre",
    "Disco music genre",
    "Classical music genre",
    "Electronic music genre",
    "Blues music genre",
    "New age music genre",
    "Christian Music genre",
    "Traditional Music genre",
    "Ska music genre",
    "Indian classical music genre",
    "Metal music genre",
    "Brazilian music genre",
    "Flamenco music genre",
    "Salsa music genre",
    "Merengue music genre",
    "Bachata music genre",
  ];
  let ul = document.querySelector('ul');
  musicGenres.forEach((genre) => {
    console.log(genre);
    let li = document.createElement('li');
    let hr = document.createElement("hr");
    li.setAttribute('class', 'genre-li');
    li.textContent = genre;
    ul.appendChild(li);
    ul.appendChild(hr);
  });
});
