var name = 'Recipe details';
var line = '----------------------------'; 
var recipeName = 'Creamy squash linguine';
var preparationTime = 45;
var recipeBy = 'Jimmy Cutter';
var isVegetarianDish = 'true';
var calories = 223.7;


//Printing a new line using \n
console.log(name + "\n" + line + "\n" + 'RecipeName:'+recipeName + "\n" +'PreparationTime:'+preparationTime + "\n" + 'Recipe By:'+ recipeBy + "\n" + 'IsVegetarianDish:'+isVegetarianDish + "\n" + 'Calories:'+ calories);


var newName = 'Recipe details after update';
var newLine = '---------------------------';

//Using the same variable and adding a new value to the variable

//Need not declare the variable again since it is already declared
preparationTime = 60;
recipeBy = 'jimmy Cutter George';

//Calling old values and adding new values to print them again
console.log(newName + "\n" + newLine + "\n" + 'RecipeName:'+recipeName + "\n" +'PreparationTime:'+preparationTime + "\n" + 'Recipe By:'+ recipeBy + "\n" + 'IsVegetarianDish:'+isVegetarianDish + "\n" + 'Calories:'+ calories);

