# Real Estate Classifieds App

![real_estate_home](https://github.com/DimitrisPattas/real-estate-app/assets/142221795/ded759a1-36c5-465b-b8c0-dad04c387a54)


# Overview
The Real Estate Classifieds App is a web application for listing and browsing real estate properties. Users can create new listings with details like title, type, area, price, level, bathrooms, and additional descriptions.

# System Requirements
- Download and install node.js v18.17.1
- Download and install MySQL v8.0.27

# Setup
1. Create database schema and name it real_estate_db
2. Clone the repository: git clone `https://github.com/DimitrisPattas/real-estate-app.git`
3. At server folder run `npm install`
4. Update .env file at server/.env and set Database connection details and AREA_API_URL for autocomplete API endpoint. 
5. At server folder run `npm run ads:seed`
6. Run `npm run start`
7. At client folder run `npm install`
8. Run `npm run start`
9. Open your web browser in incognito mode and go to `http://localhost:3000`.

# External Libraries

This project makes use of several external libraries and frameworks to enhance functionality and improve development efficiency. Here are the key dependencies:

## Tailwind CSS

[Tailwind CSS](https://tailwindcss.com/) is a highly customizable, low-level CSS framework that provides utility classes to build designs directly in your markup. It is used for styling the user interface of this application.

## Axios

[Axios](https://axios-http.com/) is a popular JavaScript library used for making HTTP requests. It provides a simple and elegant way to interact with REST APIs. In this project, Axios is utilized for handling API requests.

## TypeORM

[TypeORM](https://typeorm.io/) is an ORM (Object-Relational Mapping) library for TypeScript and JavaScript. It allows seamless interaction with databases by providing a high-level, object-oriented API. This project leverages TypeORM for database operations and management.

## Yup

[Yup](https://github.com/jquense/yup) is a JavaScript schema builder for value parsing and validation. It is used in this project to handle form validation.


