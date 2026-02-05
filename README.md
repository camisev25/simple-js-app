# Pokédex project

A simple, beginner-friendly Pokédex we application built using **HTML**, **CSS**, **JavaScript**, **jQuery** and **Bootstrap**.
The app loads data from the public [PokéAPI](https://pokeapi.co/) and displays a list of Pokémon.
Clicking on a Pokémon name opens a modal with details such as its image, height, types, abilities and moves.

---

## Features

- Loads the first 150 Pokémon from the PokéAPI
- Displays Pokémon in a responsive, multi-clomn list
- Opens a Bootstrap modal with detailed Pokémon information
- Uses jQuery for DOM manipulation and event handling
- Uses Bootstrap for layout and styling
- Fully responsive design for mobile and desktop

---

## How to run the project

1. **Download or clone the repository**
    git clone <https://github.com/camisev25/simple-js-app>

2. Open the project folder
3. Start a local server
    If you use VS Code, the easiest option is the Live Server extension
    - Right click index.html
    - Select "Open with live server"
4. The app will open in your browser and load Pokémon automatically

---

## Project structure

project-root/ 
│ 
├── css/ 
│ └── styles.css 
├── js/ 
│ └── scripts.js 
├── dist/ 
│ ├── styles.min.css 
│ └── scripts.min.js 
├── index.html 
└── README.md

- css/ and js/ contain the original source files
- dist/ containd the minified production files
- index.html links to the minified versions

---

## Dependencies

JavaScript:
- Written using vanilla JavaScript (ES6)
- Uses Promises and the Fetch API to load data
- No build tools required

jQuery used for:
- Selecting DOM elements
- Adding event listeners
- Manipulating the modal
Version used: 3.3.1.min.js 

Bootstrap used for:
- Layout
- Buttons
- Modal component
- Responsive grid
Version used: 4.3.1

ESLint
Used to maintain consistent code quality.
This .eslintrc defines:
- Environtment: browser + ES6
- Rules based on estlint: recommended

API used
This project uses the public PokéAPI
- Base endpoint: https://pokeapi.co/api/v2/pokemon/?limit=150
- Each Pokémon entry includes:
    - Name
    - Details URL
    - Height
    - Types
    - Abilities
    - Moves
    - Sprite images
PokéAPI is free, open-source and requires no authentication.

---

## Future improvements

- Add search functionality
- Add pagination or infinite scroll
- Add Pokémon stats
- Add loading animations
- Improve accessibility and keyboard navigation

---

## Author

Created by Camila Sevalho as part of her 1st Achievenet in Career Foundry Software Engineer bootcamp.