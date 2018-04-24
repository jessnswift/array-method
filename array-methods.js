const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/

const myPlanets = document.getElementById("planets");

const section = document.createElement("section");
planets.forEach(element => {
    const planetParagraph = document.createElement("p");
    planetParagraph.textContent = element;
    section.appendChild(planetParagraph);
});


myPlanets.appendChild(section)

/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/

const myPlanetsUpperCase = planets.map(planet => {
    const newPlanet = planet.slice(0, 1).toUpperCase() + planet.slice(1, planet.length)
    return newPlanet
})
    console.log(myPlanetsUpperCase)

myPlanetsUpperCase.forEach(element => {
    const planetParagraph = document.createElement("p");
    planetParagraph.textContent = element;
    section.appendChild(planetParagraph);
});

/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/


// Use the reduce method to create a sentence from the words in the following array


// const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"]