document.getElementById('generate').addEventListener('click', () => {
  randomPokemon();
});

function randomPokemon() {
  fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      let pokemon =
        data.results[Math.floor(Math.random() * data.results.length)].name;
      console.log(pokemon);

      fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          document.getElementById('image').src = data.sprites.front_shiny;
        });
    });
}
