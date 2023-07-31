
var {createIngredient, calculateIngredientCost, createPantry, addIngredient, createNewRecipe, compareIngredients
} = require('./cooking');
var assert = require('chai').assert;

describe('Cooking', function() {
  describe('Ingredient', function() {
    it('should create a new ingredient', function() {
      var chickenBreast = createIngredient('chicken breast', 'piece', 2.50);

      assert.equal(chickenBreast.name, 'chicken breast');
      assert.equal(chickenBreast.unit, 'piece');
      assert.equal(chickenBreast.costPerUnit, 2.50);
    });

    it('should calculate the cost of an ingredient', function() {
      var onion = createIngredient('onion', 'piece', 0.50);

      var onionCost = calculateIngredientCost(onion, 3);

      assert.equal(onionCost, `3 pieces of onion cost $1.50.`);

      var tomato = createIngredient('tomato', 'piece', 0.30);

      var tomatoCost = calculateIngredientCost(tomato, 5);

      assert.equal(tomatoCost, `5 pieces of tomato cost $1.50.`);
    });
  });

  describe('Pantry', function() {
    it('should create a pantry with various ingredients', function() {
      var chickenBreast = createIngredient('chicken breast', 'piece', 2.50);
      var rice = createIngredient('rice', 'cup', 0.75);
      var carrots = createIngredient('carrots', 'piece', 0.25);

      var myPantry = createPantry([chickenBreast, rice, carrots]);

      assert.deepEqual(myPantry, { ingredients: ['chicken breast', 'rice', 'carrots'] });
    });

    it('should be able to start empty', function() {
      var emptyPantry = createPantry();

      assert.deepEqual(emptyPantry, { ingredients: [] });
    });

    it('should be able to add new ingredients to the pantry', function() {
      var pasta = createIngredient('pasta', 'box', 1.50);

      var myPantry = createPantry([pasta]);

      var sauce = createIngredient('sauce', 'jar', 2.00);

      var updatedPantry = addIngredient(myPantry, sauce);

      assert.deepEqual(updatedPantry, ['pasta', 'sauce']);
    });

    it('should not allow you to add the same ingredient again', function() {
      var chickenBreast = createIngredient('chicken breast', 'piece', 2.50);
      var rice = createIngredient('rice', 'cup', 0.75);

      var myPantry = createPantry([chickenBreast, rice]);

      assert.deepEqual(addIngredient(myPantry, chickenBreast), 'You already have chicken breast in your pantry!');
    });
  });

  describe('Recipe', function() {
    it('should create a new recipe', function() {
      var pasta = createIngredient('pasta', 'box', 1.50);
      var tomatoSauce = createIngredient('tomato sauce', 'can', 1.25);
      var ingredients = [pasta, tomatoSauce];

      var spaghettiRecipe = createNewRecipe(ingredients, 'easy');

      assert.deepEqual(spaghettiRecipe.ingredientsNeeded, ingredients);
      assert.equal(spaghettiRecipe.difficulty, 'easy');
    });

    it('should have a difficulty level of normal if not specified', function() {
      var chicken = createIngredient('chicken', 'piece', 3.00);
      var potatoes = createIngredient('potatoes', 'pound', 1.50);

      assert.equal(createNewRecipe([chicken, potatoes]).difficulty, 'normal');
    });

    it('should be able to see if you have the necessary ingredients to cook a recipe', function() {
      var sugar = createIngredient('sugar', 'cup', 1.25);
      var flour = createIngredient('flour', 'pound', 2.00);

      var myPantry = createPantry([sugar, flour]);

      var cookieRecipe = createNewRecipe([sugar, flour]);

      var check = compareIngredients(cookieRecipe, myPantry);

      assert.equal(check, 'Yay! You have all the ingredients to cook this recipe!');
    });

    it('should be able to see if you have the necessary ingredients to cook a recipe', function() {
      var butter = createIngredient('butter', 'stick', 0.75);
      var eggs = createIngredient('eggs', 'dozen', 1.50);

      var myPantry = createPantry([butter]);

      var cakeRecipe = createNewRecipe([butter, eggs]);

      var check = compareIngredients(cakeRecipe, myPantry);

      assert.equal(check, 'Oops! You need to go shopping before you can cook this recipe!');
    });
  });
});
