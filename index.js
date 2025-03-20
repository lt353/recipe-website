/*
 * Assignment: Recipe Website
 * Description: 
 * - This is a simple website with a homepage that displays a list of 3 recipes, each 
 *   with their own url. 
 * - There are headers and footers that remain consistent across all pages, though the 
 *   links adjust dynamically depending on what page you are on.
 * - There is the ability to print the recipes, without all the extra things like the
 *   header, footer, images, etc. Just the recipe itself.
 * - The website uses EJS to render the views.
 * - The website uses Express to handle the routes.
 * - The website uses fs to read the recipes from a JSON file.
 * - The website uses a custom CSS file for styling.
 *   
 * Author: Lindsay Trenton 
 * Date: March 2025
 * 
 * Wireframe: a simple wireframe was created to help guide the design of the website using figma. 
 *      Here is the link: https://www.figma.com/proto/8h04jJjVaL8BlXTsjqDVr5/Recipe-Website-wireframe?node-id=0-1&t=L7vAkP1WgrJTJVBd-1
 * 
 * ChatGPT was used to help figure out how to do some of the more complicated parts of the website: 
 * - It helped me with the grunt work of turning my recipes into JSON format
 * - It helped me figure out how to get printing to work properly
 * - It helped me a lot with CSS styling and how to make things look a little more professional
 * - It helped me figure out how to make  the navigation bar more dynamic so that it would change depending on what page you were on
 * 
 * External Packages Used:
 * - express (http://www.npmjs.com/package/express)
 * - ejs (https://www.npmjs.com/package/ejs)
 * - fs (https://www.npmjs.com/package/fs)
 *
 * Images found on Unsplash, specifically from: 
 * - Brooke Lark for header & background images (https://unsplash.com/@brookelark)
 * - Nick Varvounis for the thai curry (https://unsplash.com/@nickkarvounis)
 * 
 * And other images from: 
 * - https://theflavoursofkitchen.com/ for the crispy chicken tacos
 * - https://sanitasbynikki.com/ for the chicken marsala
 */

// Importing the express package
const express = require("express");
// Importing the fs package to read JSON files, specifically the recipes.json file
const fs = require("fs");
// Creating an instance of the express package
const app = express();
// Path to the recipes.json file
const FILE_PATH = "./recipes.json";
// Port number for the server
const PORT = 3000;

// Setting the view engine to EJS
app.set("view engine", "ejs");

// Setting the public folder to be used for static files, which include the images and CSS
app.use(express.static("public"));

/*
 * Function: loadRecipes
 * Reads the recipes from recipes.json and returns them as an array.
 * If the file does not exist, it returns an empty array.
 */
const loadRecipes = () => {
    if (fs.existsSync(FILE_PATH)) {
        // Reads from the recipes array in the recipes.json file. 
        // JSON.parse is used to convert the string into a JSON object
        // fs.readFileSync is used to read the file synchronously meaning 
        // it will block the code until it is done reading the file   
        return JSON.parse(fs.readFileSync(FILE_PATH, "utf8")).recipes;
    }
    return [];
};

/* 
 * Route: Homepage
 * - Displays only a small image and tile for each recipes
 * - Botht he image and the title will be clickable
 */
app.get("/", function (req, res) {
    const recipes = loadRecipes(); // Loads recipes dynamically from the JSON file
    res.render("index", {
        title: "Welcome to My Recipes",
        recipes: recipes //passing the recipes array to the index.ejs file
    });
});

/*
 * Route: Individual Recipe Pages
 * - Each recipe has its own URL
 * - Each recipe has a title, image, ingredients, instructions, and print button 
 * - the title is used in the URL and is passed to the EJS file
 */
app.get("/recipe/:title", (req, res) => {
    const recipes = loadRecipes(); // Loads recipes dynamically
    // Finds the recipe object in the recipes array that matches the title in the URL
    const recipe = recipes.find(recipe => recipe.title.toLowerCase() === req.params.title.toLowerCase());
    // If the recipe is not found, send a 404 status and message
    if (!recipe) {
        res.status(404).send("Recipe not found.");
    }
    // Render the full recipe page with the recipe object
    res.render("recipes", {
        recipe: recipe, //passing the recipe object to the recipes
        recipes: recipes, //needed for navigation in the header
        currentPage: recipe.title // Identifies the current recipe page for header.ejs
    });
});

app.listen(PORT, function () {
    console.log(`Server is running on port ${PORT}`);
});