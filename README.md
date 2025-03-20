# recipe-website
This is a bare bones website with 4 webpages: 
  - Homepage
  - Recipe 1
  - Recipe 2
  - Recipe 3

There is a navigation bar in the header which is available throughout all the webpages, though on the homepage it will just be welcome text. In each recipe page it will contain links to the homepage and the 2 other recipes. 
There is also a footer available  as well on every page.

I am basing the layout on this base figma wirefram: https://www.figma.com/proto/8h04jJjVaL8BlXTsjqDVr5/Recipe-Website-wireframe?node-id=0-1&t=L7vAkP1WgrJTJVBd-1 

# Completed previously: 
- Improved navigation
  - Fixed the background (lightened)
  - Adjusted spacing between the items.
  - Make it fixed at the top so it stays visible when scrolling
- Turn the titles into the actual names of the recipes
- Added a background to the body and adjusted the styling of main (semi-transparent white box) so that the text could still stand out. 
- Adjusted styling of the navigation links on homepage. 
- Created a bit of a stylized border at the bottom of th header. 
- Fixed the footer to the bottom of the page. 
- Put in the thai curry recipe
- Made a lot of styling adjustments for the recipes pages
- Made a slight content change in recipes.ejs (Each step # in bold)
- Found images for the recipes (not added into content yet)


# Recently completed: 
- Insert the actual recipes in recipes.json
  - Ingredients (as an array with quantity, unit, ingredient for each)
  - Step-by-step insstructions
  - I decided to go with json as we learned about it and if this ever evolved as a more dynamic webpage with a lot more recipes, JSON is the way to go. 
- Updated recipes.ejs to display the ingredients and instructions for the remaining recipes
- Inserted pictures (stored in /public/images/recipe(#).jpg)
  - Updated recipes.js to include the image paths
- Added more of a writeup above the recipes on the homepage. 
- I adjusted the navigation bar so that it changes depending on what recipe we are on. 
- I changed the homepage a bit
  - More of an intro
  - The recipe links are now small images and recipe titles in card/grid format, both of which are clickable. 
- I added a print button
  - In CSS I made changes so that when printing it only prints out the recipe, no header, footer, buttons, images. 
- I made a lot of changes to CSS to account for the new content. 

# Possible future changes
Although this now meets the project requirements, there are some things I could add in the future to make this a more dynamic website: 
  - Metric/Imperial conversion. There is a npm called convert-units that can help with this. 
  - Serving size changes. Create a function to scale the ingredient amounts up or down. 
  - For both of the ideas above there is something called fraction.js that will come in handy to make this work that is an npm that can be imported. 
  - Let user add recipes
    - I found an npm called ingredient-parser which can be used to turn long ingredient lists that users enter and turn it into structured JSON, handy. 
    - I found the multer npm can be used to allow users to add images to the recipes they add