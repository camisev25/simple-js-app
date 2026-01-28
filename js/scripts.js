// (function () {
// // The next code line shows a list of recipes suitable for babies at weaning stage
// let recipeList = [{name:"Festive biscuits", suitabilityAgeInMonths: 9, types: ['breakfast', 'snack']}, 
// {name: "Banana ice lollies", suitabilityAgeInMonths: 9, types: ['dessert', 'snack']},
// {name: "Avocarbonara", suitabilityAgeInMonths: 9, types: ['main', 'sides']}]

// // The next code line creates a list of recipes suitable for babies under 1yo and it points out which ones can be served as a snack
// recipeList.forEach (function(recipe) {
//     let message = recipe.name + " is suitable for babies under 1yo";

// if (recipe.types.includes('snack')) {
//         message += " - you can serve this as a snack";
//     } else {
//         message += " - this is too heavy for a snack!"
//     }
    
// document.write(message + "<br>");
// });
// }) ();


// let recipeRepository = (function () {
// // The next code line shows a list of recipes suitable for babies at weaning stage
//     let recipeList = [{name:"Festive biscuits", suitabilityAgeInMonths: 9, types: ['breakfast', 'snack']}, 
// {name: "Banana ice lollies", suitabilityAgeInMonths: 9, types: ['dessert', 'snack']},
// {name: "Avocarbonara", suitabilityAgeInMonths: 9, types: ['main', 'sides']}];

//     function getAll() {
//         return recipeList;
//         }
    
//     function add(item) {
//         recipeList.push(item);
//     }

//     function showDetails(recipe) {
//         console.log(recipe);
//     }

//     function addListItem(recipe){
//         let recipeListElement = document.querySelector('.recipe-list');
//         let listItem = document.createElement('li');
//         let button = document.createElement('button');
//         button.innerText = recipe.name;
//         button.classList.add('recipe-button'); //check for existing button classes in CSS to better style them
//         button.addEventListener('click', function () {
//             showDetails (recipe);
//         });

//         listItem.appendChild(button);
//         recipeListElement.appendChild(listItem);
//     }

//     return {
//         getAll: getAll,
//         add: add,
//         addListItem: addListItem
//     };
// }) ();

// recipeRepository.add({
//     name: "Beans stew",
//     suitabilityAgeInMonths: 9,
//     types: ['main', 'sides']
// });

// recipeRepository.getAll().forEach((recipe) => {
//     recipeRepository.addListItem(recipe);
// });


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
            let title = pokemon.name;
            let text = 'Height: '+ pokemon.height;
            let imageUrl = pokemon.imageUrl;

            showModal(title, text, imageUrl);
        });
    }

    function addListItem(pokemon){
        let pokemonListElement = document.querySelector('.pokemon-list');
        let listItem = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('pokemon-button'); 
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
            item.types = details.types;
        }) .catch(function(e) {
            console.error(e);
        });
    }

    function showModal(title, text, imageUrl) {
        let modalContainer = document.querySelector('#modal-container');
        modalContainer.innerHTML = '';
        let modal = document.createElement('div');
        modal.classList.add('modal');

        let closeButtonElement = document.createElement('button');
        closeButtonElement.classList.add('modal-close');
        closeButtonElement.innerText = 'X';
        closeButtonElement.addEventListener('click', hideModal);

        let titleElement = document.createElement('h1');
        titleElement.innerText = title;

        let contentElement = document.createElement('p');
        contentElement.innerText = text;

        let imageElement = document.createElement('img');
        imageElement.src = imageUrl;
        imageElement.alt = title;

        modal.appendChild(closeButtonElement);
        modal.appendChild(titleElement);
        modal.appendChild(contentElement);
        modal.appendChild(imageElement);
        modalContainer.appendChild(modal);

        modalContainer.classList.add('is-visible');
    }

    function hideModal() {
        let modalContainer = document.querySelector('#modal-container');
        modalContainer.classList.remove('is-visible');
    }

    let modalContainer = document.querySelector('#modal-container');
    modalContainer.addEventListener('click', function (e) {
        if (e.target ===modalContainer) {
            hideModal();
        }
    });

    window.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
            hideModal();
        }
    });

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

