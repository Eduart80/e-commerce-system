# TypeScript and Advanced JavaScript

Folder Structure:
```js
e-commerce-system/
├── src/
│   ├── models/
│   │   ├── Product.ts
│   ├── services/
│   │   └── apiService.ts
│   ├── utils/
│   │   ├── discountCalculator.ts
│   │   ├── errorHandler.ts
│   │   └── taxCalculator.ts
│   └── main.ts
└── tsconfig.json
```
### API Project

Research and analyze the Dummy JSON Products API.
URL: https://dummyjson.com/c/<br>
Abilities: Get, Post, Put, Patch, Delete<br>
In this presantation we are using only GET method and apply price discount and taxes.<br>
From my src/services folder will handle all the API calls.

### Project plan and outline
 Steps to implement the API interactions and display product data.
In this example we will not include any HTML file. Data and responds will console log on terminal.
First i will start with creating async function to call the api url.
After will be cashing the respond, convert to json format.
We are using async/await for the call to retreive the data.
And also handelling errors with try/catch. At this point we are able to export the data to index.ts file.

index.ts file:<br>
Import the product (data) from API service.
Create instances of the Product class, convert to json format, and print out the information.
In eddition to other info, we print out the price with discount and tax, by calling funtions from discount calculation and tax calculation files.<br>
From fetchProducts(id) function, ( on index.ts ) you can use other id as a prameter to check for other products.<br>
For example id: 16, is a grocery product witch will apply option products with a category of “groceries”, and taxed at 3%.<br> 
Standard tax rate for each product will be 4.75%.
