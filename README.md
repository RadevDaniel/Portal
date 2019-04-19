# Portal

Application portal for sellers and byers.

## HOME
  - Home page includes a navigation, two forms for login and register and a filed for displaying the most active sellers and a footer as well.
  - On Load a guest user session is set for the guests in that way the can see the listet users on home page.
  - Only the home page is allowed for guests.
  - On log in, the navbar is reconstructed and if you are an ordinary user (not admin) you shold see your own user image on the right corner, as well your username and a couple of navigation buttons: - "Products" and "Sellers" and also your username is a dropdown button that will show you a logout button, add product and my profile buttons.
  
  -P.S if you want to test tha app with your own Kinvey backend, please provide an init user with username guest and password guest, so the application can read the initial credentials for the guests.
  
## PRODUCTS
  - The products page is reachable for loged in users.
  - It loads all products as cards with fiew buttons and information about each product e.g. price, name, etc..
  - If you are the creator or admin of the product you should see 2 additional buttons for edit and delete. (Icons) 
  ### PRODUCT DETAIL
    - You can open this page when you click the "View Details" button on the card.
    - After the button is clecked you are leaded to the products detail page where you can see a full information about the product,
    a navigation with all other products and you can select a different product from there, instead of going back.
    
    P.S. - Add to collection and Add to card buttons haven't got any logic behind, they are static..

## SELLERS
  - Sellers page displays a cards of all sellers within the application.
  - Each card includes an img, username, user rating and a button for viewing the details of the seller.
  ### SELLERS DETAIL
    - You can open this page when you click the "Visit" button on the card.
    - After the button is clecked you are leaded to the sellers detail page where you can see a full information about the seller,
    a navigation with all other sellers and you can select a different seller from there and open his page, instead of going back.

## ADD PRODUCT
  - Add product page is a form page that allows you to fill the form and create a product in the database.
  
## MY PROFILE
  -This is a page that you can see your own profile information and your own products and manage them.
  
## LOGOUT BTN
  -Logout button cills the session and leads you to home page.
  
## ADMIN
 -Admin page is visible only if you are an admin user (to test you can try to log in with: username:danielradev, password: 123456);
 -In the admin page you can see all the users and delete them. (P.S. After deleting, kinvey still keeps a reference to the users so everithing is listed on the table again)
 
 -The admin user is provided by kinvey roles so if you try to run the app in your own Kinvey Back End you need to provide a user manualy from the kinvey console as admin.
 
 
