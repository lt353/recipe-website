//jshint esversion:6

/*
 * Assignment: Recipe Website
 * Description: 
 * - This is a simple website with a homepage that displays a list of 3 recipes, each 
 *   with their own url. 
 * - There are headers and footers that remain consistent across all pages.
 * - The website uses EJS to render the views.
 * - The website uses Express to handle the routes.
 *   
 * Author: Lindsay Trenton 
 * Date: February 2025
 * 
 * External Packages Used:
 * - express (http://www.npmjs.com/package/express)
 * - ejs (https://www.npmjs.com/package/ejs)
 *
 * Images found on Unsplash, specifically from: 
 * - Brooke Lark (https://unsplash.com/@brookelark)
 * - 
 */

// Importing the express package
const express = require("express");
// Creating an instance of the express package
const app = express();
// Importing the recipes.js file
const recipes = require("./recipes");

// Setting the view engine to EJS
app.set("view engine", "ejs");

// Setting the public folder to be used for static files
app.use(express.static("public"));

// Home Route
app.get("/", function (req, res) {
    res.render("index", {
        title: "Welcome to My Recipes",
        recipes: recipes //passing the recipes array to the index.ejs file
    });
});
/*
 *Recipe Routes 
 *The recipes are stored in an array in the recipes.js file
 *Each recipe has a title and content property
 *The title is displayed as a link on the home page
 *This is done with a loop to generate the links dynamically
 */
recipes.forEach((recipe, index) => {
    app.get(`/recipe${index + 1}`, (req, res) => {
        res.render("recipes", {
            recipe: recipe // Passing the entire recipe object. I tried passing just the title and content properties, but it didn't work.
        });
    });
});

app.listen(3000, function () {
    console.log("Server is running on port 3000");
});