let pokemonRepository = (function () {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    function getAll() {
        return pokemonList;
        }
    
    function add(item) {
        pokemonList.push(item);
    }

    function showDetails(pokemon) {
        loadDetails(pokemon).then(function () {
            showModal(pokemon);
        });
    }

    function addListItem(pokemon){
        let pokemonListElement = document.querySelector('.pokemon-list');
        let listItem = document.createElement('li');
        listItem.classList.add('list-group-item');

        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('btn', 'btn-pokemon', 'btn-block'); //full-width button
        
        //Bootstrap modal attributes
        button.setAttribute('data-toggle', 'modal');
        button.setAttribute('data-target', '#pokemonModal');

        button.addEventListener('click', function () {
            showDetails (pokemon);
        });

        listItem.appendChild(button);
        pokemonListElement.appendChild(listItem);
    }

    function loadList () {
        return fetch(apiUrl)
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                json.results.forEach(function (item) {
                    let pokemon = {
                        name: item.name,
                        detailsUrl: item.url
                    };
                    add(pokemon);
                });
            })
            .catch(function (e) {
                console.error(e);
            });
    }

    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
            return response.json();
        }) .then(function (details) {
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;

            //array like data//
            item.types = details.types.map(function(typeInfo) {
                return typeInfo.type.name;
            });
            item.abilities = details.abilities.map(function (abilityInfo) {
                return abilityInfo.ability.name;
            });
            item.moves = details.moves.map(function (moveInfo) {
                return moveInfo.move.name;
            })

        }) .catch(function(e) {
            console.error(e);
        });
    }

    function showModal(pokemon) {
        let modalTitle = document.querySelector('#pokemonModalLabel');
        let modalBodyHeight = document.querySelector('.pokemon-height');
        let modalBodyTypes = document.querySelector('.pokemon-types');
        let modalBodyAbilities = document.querySelector('.pokemon-abilities');
        let modalBodyMoves = document.querySelector('.pokemon-moves');
        let modalImage = document.querySelector('.pokemon-image');

        modalTitle.innerText = pokemon.name;
        modalBodyHeight.innerText = 'Height: '+ pokemon.height;

        modalBodyTypes.innerText = 'Type: '+ pokemon.types.join(', ');
        modalBodyAbilities.innerText = 'Abilities: '+ pokemon.abilities.join(', ');

        //limiting number of moves from the list
        let movestoShow = pokemon.moves.slice(0, 5); //first 5 moves
        modalBodyMoves.innerText = 'Moves: '+ movestoShow.join(', ');

        modalImage.src = pokemon.imageUrl;
        modalImage.alt = pokemon.name;

        // Bootstrap handles showing the modal via data-toggle/data-target
    }

    return {
        getAll: getAll,
        add: add,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails
    };
}) ();

pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});


