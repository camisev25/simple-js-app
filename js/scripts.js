// The next code line shows a list of recipes suitable for babies at weaning stage
let recipeList = [{name:"Festive biscuits", suitabilityAgeInMonths: 9, types: ['breakfast', 'snack']}, 
{name: "Banana ice lollies", suitabilityAgeInMonths: 9, types: ['dessert', 'snack']},
{name: "Avocarbonara", suitabilityAgeInMonths: 9, types: ['main', 'sides']}]

// The next code line creates a list of recipes suitable for babies under 1yo and it points out which ones can be served as a snack
for (let i=0; i<recipeList.length; i++) {
    let message = recipeList[i].name + " is suitable for babies under 1yo";

if (recipeList[i].types.includes('snack')) {
        message += " - you can serve this as a snack";
    } else {
        message += " - this is too heavy for a snack!"
    }
    
document.write(message + "<br>");
}
    