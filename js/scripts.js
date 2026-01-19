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


let recipeRepository = (function () {
// The next code line shows a list of recipes suitable for babies at weaning stage
    let recipeList = [{name:"Festive biscuits", suitabilityAgeInMonths: 9, types: ['breakfast', 'snack']}, 
{name: "Banana ice lollies", suitabilityAgeInMonths: 9, types: ['dessert', 'snack']},
{name: "Avocarbonara", suitabilityAgeInMonths: 9, types: ['main', 'sides']}];

    function getAll() {
        return recipeList;
        }
    
    function add(item) {
        recipeList.push(item);
    }

    return {
        getAll: getAll,
        add: add
    };
}) ();

recipeRepository.add({
    name: "Beans stew",
    suitabilityAgeInMonths: 9,
    types: ['main', 'sides']
});

recipeRepository.getAll().forEach((recipe) => {
    let message = recipe.name + " is suitable for babies under 1yo";

    if (recipe.types.includes('snack')) {
        message += "- you can serve this as a snack";
    } else {
        message += "- this is too heavy for a snack!";
    }

    document.write(message + "<br>");
});