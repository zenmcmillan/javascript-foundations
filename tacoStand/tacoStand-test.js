var assert = require('chai').assert
var { createIngredient, createTaco, addIngredientToTaco, calculatePrice } = require('./tacoStand')

describe('taco stand', function() {
  describe('createIngredient', function() {
    it('should take a name and price', function() {
      const ingredient1 = createIngredient('chicken', 2.50)
      const ingredient2 = createIngredient('steak', 3.25)

      assert.equal(ingredient1.name, 'chicken')
      assert.equal(ingredient1.price, 2.50)
      assert.equal(ingredient2.name, 'steak')
      assert.equal(ingredient2.price, 3.25)
    })

    it('should return an ingredient with defaults if nothing is passed', function() {
      const defaultIngredient = createIngredient()

      assert.equal(defaultIngredient.name, 'unknown')
      assert.equal(defaultIngredient.price, 0.00)
    })
  })

  describe('createTaco', function() {
    it('should have a name', function() {

      assert.equal(createTaco('southwestern').name, 'southwestern')
    })

    it('should have a default name if none provided', function() {

      assert.equal(createTaco().name, 'custom')
    })

    it('should have no ingredients by default', function() {

      assert.deepEqual(createTaco('baja').ingredients, [])
    })

    it('should be able to create a taco with ingredients', function() {
      const fish = createIngredient('fish', 2.95)
      const hotSauce = createIngredient('siracha mayo', 0.95)
      const lettuce = createIngredient('lettuce', 0.50)

      const ingredients = [fish, hotSauce, lettuce]
      const bajaTaco = createTaco('baja', ingredients)

      assert.deepEqual(bajaTaco.ingredients, ingredients)
    })
  })

  describe('addIngredientToTaco', function() {
    it('should be able to add an ingredient to a taco', function() {
      const steak = createIngredient('steak', 3.50)

      const basicSteakTaco = createTaco('basic steak', [steak])
console.log("basic steak taco",basicSteakTaco)
      const lettuce = createIngredient('lettuce', 0.50)
      const lettuceAddedTaco = addIngredientToTaco(basicSteakTaco, lettuce)
      
      assert.deepEqual(lettuceAddedTaco.ingredients, [steak, lettuce])
  
    })

    it('should return the taco unchanged if no ingredient is included', function() {
      const steak = createIngredient('steak', 3.50)
      const basicSteakTaco = createTaco('basic steak', [steak])

      const nothingAddedTaco = addIngredientToTaco(basicSteakTaco)

      assert.deepEqual(nothingAddedTaco, basicSteakTaco)
    })
  })

  describe('calculatePrice', function() {
    it('should calculate the price of a single ingredient taco', function() {
      const steak = createIngredient('steak', 3.50)
      const basicSteakTaco = createTaco('basic steak', [steak])

      assert.equal(calculatePrice(basicSteakTaco), 3.50)
    })

    it('should calculate the price of a 2 ingredient taco', function() {
      const steak = createIngredient('steak', 3.50)
      const lettuce = createIngredient('lettuce', 0.50)
      const steakTaco = createTaco('steak', [steak, lettuce])

      assert.equal(calculatePrice(steakTaco), 4.00)
    })

    it('should calculate the price of a many ingredient taco', function() {
      const steak = createIngredient('steak', 3.50)
      const lettuce = createIngredient('lettuce', 0.50)
      const hotSauce = createIngredient('siracha mayo', 0.95)
      const salsa = createIngredient('salsa', 0.75)

      const steakTaco = createTaco('steak', [steak, lettuce, hotSauce, salsa])
  
      assert.equal(calculatePrice(steakTaco), 5.70)
    })
  })
})
