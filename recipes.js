/* 
 * Purpose: To store an array of recipes that can be used in index.js
 * The recipes array is an array of objects
 * Each object has a title and content property
 * The title is the name of the recipe
 * The content is the recipe instructions
 */
const recipes = [
  {
    title: "Recipe 1",
    content: "This is the first recipe."
  },
  {
    title: "Recipe 2",
    content: "This is the second recipe."
  },
  {
    title: "Recipe 3",
    content: "This is the third recipe."
  }
];
// Exporting the recipes array so it can be used in index.js
module.exports = recipes;