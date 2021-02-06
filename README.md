# ecommerce
## Table of contents
* [General info](##General Info)
* [Technologies](##Technologies)
* [Project stucture](##Project structure)
* [Features](##Features)
* [Setup](##setup)
*

## General info
This is a makeup ecommerce fullstack web app


## Technologies
* MongoDB
* Express
* React
* Node 
* Tailwind
* MongoDB

## Project structure

- client
- server
- README.MD

## Features

- User & mobile friendly navigation
- Mobile Responsiveness and user accesssibity
- A shop icon for users to click on a product type
- Ability to pick product color, view and unview product desciption
- The ability for Users to add a product to cart inc,rement, decrement and delete items in their cart
- Ability for users to pick the delivery type.
- Searchbar & contact page functionality
- To checkout users have to login.
- A login and signup button for personalised user experience

The api is based on a CRUD operation

## About the Rest Api:

- Protocol: The transport is HTTP
- The API Endpoints: http://localhost:5000
- Type: GET, Post, Put, Patch, Delete
- Response Format: Json

## Post requests

- To login: api/auth/signin/
- To signup: api/auth/signup/
- for adding a new product to the database: /api/product
- for contact form: /api/contact

## Get requests

Note: keyword could be anything, you'll get an HTTP response if the keyword exist, pagination can be any number

- For getting a product by id: replace ':id' with the product id "rfs555w66w778"
  - api/product/:id
- for getting all products:
  - /api/product
- search query: To search for anything "lip", append 'keyword=lip'
  - api/description?keyword=lip
- For paginating and quering by product_type: paginate '1', 'keyword=nail_polish'
  - api/product/layout/1/product_type?keyword=nail_polish
- For paginating and quering by brand or category or product_type: paginate '3', 'keyword=concealer'
  - api/product/3/product_type?keyword=concealer
- For quering product_type with no pagination: 'keyword:lip_stick'
  - api/product_type?keyword=lipstick
- For contact: /api/contact

## Delete requests

- for deleting a product by Id: replace ':id' with the product id "rfs555w66w778"
  - api/product/:id
- deleteMany
  - /api/product

## Patch request

- for updating a product by it id: replace ':id' with the product id "rfs555w66w778"
  - /api/product/:id

## put request

- updateMany
  - /api/product

## database

- To connect to MongoDB compass use the /server/config/config.js file
- To connect to MongoDB Atlas use process.env.MONGO_URI

## Available Scripts

To begin the project

## `npm i or npm install`

and then cd client

## `npm i or npm install`

To start client

- cd client
- go to package.json in scripts change start from node server.js to craco start and change it back when deploying it
### `npm start`

To start server

- cd server

### `nodemon index or npm start`
