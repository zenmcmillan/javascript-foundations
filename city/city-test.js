var assert = require('chai').assert;
var { createCity, greetResident, setBuildings, checkBuildingAvailability } = require('./city');

describe.skip('City', function() {
  it('should create a city', function() {
    var city = createCity('Metropolis', ['City Hall', 'Library', 'Park'], 50);

    assert.equal(city.name, 'Metropolis');
    assert.equal(city.availableBuildings, 50);
    assert.equal(city.landmarks[0], 'City Hall');
  });

  it('should welcome residents of the city', function() {
    var metropolis = createCity('Metropolis', ['City Hall', 'Library', 'Park'], 50);
    var gotham = createCity('Gotham', ['Wayne Tower', 'Arkham Asylum'], 30);

    var metropolisGreeting = greetResident(metropolis);
    var gothamGreeting = greetResident(gotham);

    assert.equal(metropolisGreeting, 'Welcome to Metropolis!');
    assert.equal(gothamGreeting, 'Welcome to Gotham!');
  });

  it('should keep track of available buildings', function() {
    var smallVillage = createCity('Smallville', ['Farm', 'School'], 5);
    var gotham = createCity('Gotham', ['Wayne Tower', 'Arkham Asylum'], 30);

    var smallVillageBuildings = setBuildings(smallVillage, 3);
    var gothamBuildings = setBuildings(gotham, 10);

    assert.equal(smallVillageBuildings.availableBuildings, 2);
    assert.equal(gothamBuildings.availableBuildings, 20);
  });

  it.skip('should not be able to exceed available buildings', function() {
    var smallVillage = createCity('Smallville', ['Farm', 'School'], 5);

    var updatedCityBuildings = setBuildings(smallVillage, 4);

    assert.equal(updatedCityBuildings.availableBuildings, 1);
    assert.equal(updatedCityBuildings.message, 'Success! Current availability is 1.');

    var updatedCityBuildings2 = setBuildings(updatedCityBuildings, 3);
  
    assert.equal(updatedCityBuildings2.availableBuildings, 0);
    assert.equal(updatedCityBuildings2.message, 'Oh no! Not enough buildings available. Current overflow is 2.');
  });

  it.skip('should be able to check where a building is available', function() {
    var smallVillage = createCity('Smallville', ['Farm', 'School'], 5);
    var metropolis = createCity('Metropolis', ['City Hall', 'Library', 'Park'], 50);
    var gotham = createCity('Gotham', ['Wayne Tower', 'Arkham Asylum'], 30);
    var cities = [smallVillage, metropolis, gotham];

    var parkCities = checkBuildingAvailability(cities, 'Park');
    var farmCities = checkBuildingAvailability(cities, 'Farm');

    assert.deepEqual(parkCities, ['Metropolis']);
    assert.deepEqual(farmCities, ['Smallville']);
  });
});
