window.addEventListener("DOMContentLoaded", () => {
    // nav bar scroll fuction to blur mode
    window.addEventListener("scroll", function(){
        var nav = this.document.querySelector("nav");
        nav.classList.toggle("sticky", window.scrollY>0)
    })
    // list of music genre to select from
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
//   creating and appending list items to parent dom
  let ul = document.querySelector('ul');
  musicGenres.forEach((genre) => {
    let li = document.createElement('li');
    let hr = document.createElement("hr");
    li.setAttribute('class', 'genre-li');
    li.textContent = genre;
    ul.appendChild(li);
    ul.appendChild(hr);
  });
//   creating move over effect over the cards
let cards = document.querySelectorAll('.card');

cards.forEach((card) => {
    let button = card.querySelector('.buttons');

    card.addEventListener('mouseover', (e) => {
        button.classList.add('show'); 
    });

    card.addEventListener('mouseout', (e) => {
        button.classList.remove('show'); 
    });
});


});
