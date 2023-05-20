function getPokemonNames() {
    fetch('https://pokeapi.co/api/v2/pokemon/')
        .then(response => response.json())
        .then(data => {
            const pokemonNames = data.results.map(pokemon => pokemon.name);
            const pokemonNamesElement = document.getElementById('pokemonNames');
            pokemonNames.forEach(name => {
                const nameElement = document.createElement('p');
                nameElement.textContent = name;
                pokemonNamesElement.appendChild(nameElement);
            });
        })
        .catch(error => console.log(error));
}

getPokemonNames();