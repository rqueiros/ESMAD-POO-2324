# Exercise Sheet 08

## Bands APP

### Description

In this exercise, you will create a simple web application that allows users to manage bands. The application should allow users to add and delete bands. The application should also allow users to view a list of all bands, filter by name and genre, and sort by name.

### Tasks

1. Use the template files to get started. The template files contain the basic structure of the application, including the HTML, CSS, and some JavaScript code. The template files also contain a list of bands that you can use to test the application. Template url: https://github.com/rqueiros/ESMAD-POO-2324/tree/main/bandsApp/template

2. Create the class `Band`. A `Band` object should have the following properties:
   
   - `name` (string): the name of the band.
   - `genre` (string): the genre of the band.
   - `cover` (string): the URL of the cover image of the band.
   - `desc` (string): a description of the band.
   - `userId` (number): the ID of the user who created the band.

3. Create the class `User`. A `User` object should have the following properties:
   
   - `id` (number): the ID of the user, which should be unique and auto-incremented.
   - `username` (string): the username of the user.
   - `password` (string): the password of the user.

4. Load the list of bands and users into localStorage if it does not exist. Then load from the localStorage into the application in each class file.

5. Implement the login functionality. The application should allow users to log in using their username and password. If the username and password are incorrect, the application should display an error message. If the username and password are correct, the application should display a success message and save the user in the sessionStorage.
   1. Create a function isLogged() in the UserModel.js to check if the user is logged in.
   2. Create a function getUserLogged() in the UserModel.js to get the user logged in.

6. Implement the logout functionality. The application should allow users to log out. When a user logs out, the application should remove the user from the sessionStorage and reload the page.

7. Implement the register functionality. The application should allow users to register by entering a username and password. If the username is already taken, the application should display an error message. If the username is not taken, the application should display a success message and save the user in the localStorage.

8. Render the catalog of bands in the application. Use the `BandCatalogView.js`, there is a function with the html template to render the bands.

9. When clicking the "View more" button of a band, the application should display the details of the band. Use the html in `html/band.html` and `js/views/BandView.js` to render the band details and display the username of the user that added it. TIP: Use localStorage to store the band selected on the catalog.

10. Implement the functionality to add a band. The application should allow users to add a band by entering the name, genre, cover, and description of the band. The application should also save the ID of the user who created the band. The application should display a success message when the band is added and go back to the catalog of bands.

11. Implement the functionality to delete a band. The application should allow users to delete a band. The application should display a confirmation message before deleting the band. When the user confirms the deletion, the application should remove the band from the catalog of bands and reload the page.

12. Implement the functionality to filter bands by name and genre. The application should allow users to filter bands by entering the name and genre of the band. The application should display only the bands that match the filter.

13. Implement the functionality to sort bands by name. The application should allow users to sort bands by name in ascending and descending order.

