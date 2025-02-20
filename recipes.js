/* 
 * Purpose: To store an array of recipes that can be used in index.js
 * The recipes array is an array of objects
 * Each object has a title and content property
 * The title is the name of the recipe
 * The content is the recipe instructions
 * The ingredients property is an array of ingredients
 * The instructions property is an array of instructions 
 */
const recipes = [
    {
        title: "Green Thai Chicken Curry",
        content: "A rich and aromatic Thai curry with tender chicken and fresh herbs.",
        ingredients: [
          "4-5 Boneless/Skinless Chicken thighs",
          "1/2 onion",
          "2 tbsp garlic",
          "1-2 tbsp ginger",
          "1 stalk lemongrass",
          "3-4 tbsp curry paste",
          "1 tbsp crispy chili",
          "1 tbsp brown sugar",
          "1 tbsp fish sauce",
          "1 tbsp chicken bouillon + 1 cup water",
          "1 large carrot",
          "1 red bell pepper",
          "2 cans coconut milk",
          "1 lime",
          "A couple handfuls of thai basil"
        ],
        instructions: [
            "Heat avocado oil in a large pan over medium-high heat. Add a spoonful of curry paste and mix with a small amount of coconut milk to create a fragrant base. Add the chicken thighs and cook until they are nearly done, then remove from the pan and set aside.",
            "In the same pan, add the sliced onion, minced garlic, grated ginger, and the bottom quarter of a stalk of lemongrass (thinly sliced). Stir-fry for about 2 minutes until softened and aromatic.",
            "Add the remaining curry paste and mix well into the sautéed ingredients. Cook for another 1-2 minutes to release the full flavors of the paste.",
            "Add the crispy chili, brown sugar, fish sauce, chicken bouillon, and 1 cup of water. Stir everything together and let it simmer for about 10 minutes, allowing the liquid to reduce by half.",
            "Slice the carrot into thin diagonal pieces and julienne the red bell pepper. Add them to the pan and cook for 2-3 minutes until slightly softened but still vibrant.",
            "Pour in 2 cans of coconut milk and squeeze the juice of 1 lime into the mixture. Stir well and let it cook for another 1-2 minutes to blend the flavors.",
            "Return the cooked chicken (along with any juices) back to the pan. Stir it into the sauce and let everything simmer together for an additional 2-3 minutes.",
            "Tear a couple of handfuls of Thai basil and mix it in. Cook for a final 1-2 minutes, allowing the basil to wilt slightly and release its flavor.",
            "Serve hot over a bed of steamed jasmine or basmati rice. Enjoy your homemade Thai Green Curry!"
        ]
    },
    {
        title: "Crispy Chicken Griddle Tacos",
        content: "This is the second recipe."
    },
    {
        title: "Chicken Marsala",
        content: "This is the third recipe."
    }
];
// Exporting the recipes array so it can be used in index.js
module.exports = recipes;