$("document").ready(function() {

//=== Hard coded examples ======

var recipeBank = [];

function recipe(name, ingredient, link, image) {
            this.name = name;
            this.ingredients = ingredient;
            this.link = link;
            this.image = image;
            this.id = Math.floor(Math.random() * 100);
}

var newRecipe = new recipe('Chicken Curry', ['Chicken',' Onions'], 
'http://allrecipes.co.uk/recipe/1162/chicken-curry.aspx?o_is=Hub_TopRecipe_1', 'http://ukcdn.ar-cdn.com/recipes/xlarge/d3b3a94b-4c24-4e25-98e9-5d4c0146d53d.jpg');
recipeBank.push(newRecipe);

var newRecipe = new recipe('Chicken Jalfrezi', ['Chicken'], 
'http://allrecipes.co.uk/recipe/4845/chicken-jalfrezi.aspx?o_is=Hub_TopRecipe_3', 'http://ukcdn.ar-cdn.com/recipes/xlarge/b8efa3bc-d7ed-4402-a367-24e72dc54dd5.jpg');
recipeBank.push(newRecipe);

var newRecipe = new recipe('Chicken Katsu Curry', ['Chicken'], 
'http://allrecipes.co.uk/recipe/29578/chicken-katsu-curry.aspx?o_is=LV', 'http://ukcdn.ar-cdn.com/recipes/xlarge/c920d513-90f2-4a1b-a761-677c838fdd69.jpg');
recipeBank.push(newRecipe);


console.log(recipeBank);


//===== addtions-form section =========

var addtionsForm = $(".addtions-form");
    var recipeName = $(".recipeName");
    var ingredientsInput = $(".ingredientChoice")
    var recipeLink = $(".recipeLink");
    var linkImage = $(".linkImage");

    var submitButton = $(".submitButton");


recipeName.on('click', function(){
    $(this).val("")
});

linkImage.on('click', function(){
    $(this).val("")
});

submitButton.on("click",function(){

        addtionsForm.toggleClass('formGrow');

        function recipe(name, ingredient, link, image) {
            this.name = name;
            this.ingredients = ingredient;
            this.link = link;
            this.image = image;
            this.id = Math.floor(Math.random() * 100);
        }

        var newRecipe = new recipe(recipeName.val(), ingredientsInput.val(), recipeLink.val(), linkImage.val());
        recipeBank.push(newRecipe);
        
        $('.addtionsInput').val("");


        console.log(recipeBank);
});

//================ search ingredient section ========

var foundRecipes = [];
var searchButton = $(".searchButton");
var resultsList = $(".resultsList");

$(".ingredientMatch").on('click', function(){
    $(this).val("");
    resultsList.empty('li');
});


searchButton.on('click',function(){

    var ingredientMatch = $(".ingredientMatch").val();
    foundRecipes = [];
    $('.listItem').remove();
    

        recipeBank.forEach(function(recipe){
                if(recipe.ingredients[0] === ingredientMatch){
                    foundRecipes.push(recipe)
                }
            });  


        foundRecipes.forEach(function(recipe){
                resultsList.append(`<li data-id="${recipe.id}"class="listItem">${recipe.name}</li>`)
        });

        console.log(foundRecipes);
        
});

function showRecipeDetails(recipe) {
    $('.outputName').append('<p class="outputString"> ' + "<span>Title: </span>" + recipe.name + ' </p>');
    $('.outputIngredients').append('<p class="outputString"> ' + "<span>Ingredients: </span>" + '</br>' + recipe.ingredients + ' </p>');
    $('.outputImage').append('<img class="outputString" src="' + recipe.image + '">');
    $('.outputLink').append('<a class="outputString" href="' + recipe.link + '" target="_blank">'+ "Website Link" +'</a>');
    

}

function removeRecipeDetails() {
    $('.outputString').remove();
}


resultsList.on('click', '.listItem', function(){
    $('.second').toggleClass('secondMove');

    removeRecipeDetails();
    var recipeItem = $(this);
    var id = recipeItem.data('id');
    var selectedRecipe;
    foundRecipes.forEach(function(recipe) {
        if(recipe.id=== id) {
            selectedRecipe = recipe;
        }
    });
    showRecipeDetails(selectedRecipe);


});

$()

//============= Output containers =============



});
