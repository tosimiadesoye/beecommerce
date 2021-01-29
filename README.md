# ecommerce

This project was created with Taillwindcss and the MERN stack(MongoDB, Express,React,Node)

## Project structure
* client
* server
* README.MD

## This is a makeup ecommerce fullstack web app 

## Features

* User & mobile friendly navigation
* Mobile Responsiveness and user accesssibity
* A shop icon for users to click on a product type
* Ability to pick product color, view and unview product desciption
* The ability for Users to add a product to cart inc,rement, decrement and delete items in their cart
* Ability for users to pick the delivery type. 
* Searchbar & contact page functionality
* To checkout users have to login.
* A login and signup button for personalised user experience

# About the Rest Api:
* Protocal: The transport is HTTP
* The API Endpoints:  http://localhost:5000/
* Type: GET, Post, Put, Patch
* Response Format: Json

# Post requests
* To login: api/auth/signin/
* To signup: api/auth/signup/
* for adding a new product to the database: /api/product


# Get requests
Sidenote: keyword could be anything, you'll get an HTTP response if the keyword exist 
 * For getting a product by id: replace ':id' with the product id "rfs555w66w778"
   ** api/product/:id
 * for finding a product by it id: /api/product
 * search query: To search for anything "lip", append 'keyword=lip'
   ** api/description?keyword=lip 
 * For paginating and quering by product_type: paginate '1', 'keyword=nail_polish'
  **  api/product/layout/1/product_type?keyword=nail_polish
 * For paginating and quering by brand or category or product_type: paginate '3', 'keyword=concealer'
  ** api/product/1/product_type?keyword=concealer
 * For quering product_type with no pagination: 'keyword:lip_stick' 
  ** api/product_type?keyword=lipstick
  
 # Delete requests
 * for deleting a product by  Id: replace ':id' with the product id "rfs555w66w778"
   ** api/product/:id
 * for deleteMany 
  ** /api/product
 # Patch request
 * for updating a product by it id: replace ':id' with the product id "rfs555w66w778"
  ** /api/product/:id
 
 # put request
 * for updatwMany
   ** /api/product
 
  
## Available Scripts


To begin the project
## `npm i or npm install`

and then cd client

## `npm i or npm install`

To start both the client and server 

### `npm run develop`

to start them separately navigate to the parent & client directory, and run:

### `npm start`


