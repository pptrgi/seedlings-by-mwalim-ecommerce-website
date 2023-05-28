# Seedlings By Mwalim E-Commerce Website

Inspired by my uncle's (Mr. Njagi) seedlings farm, Seedlings By Mwalim is an online seedlings selling site that is integrated with M-Pesa for the payment service. It is built with React on the frontend and the Express.js backend communicates with Safaricom's Daraja API. The application also serves as a training project for API integration, state management with technologies like Redux, and also to master 60 30 10 color principle when styling.

Along with my credentials for Daraja 2.0 account, the backend sends a post request with the data(phone number and amount) received from the user as payload to the Daraja API for authentication, after which an STK push is triggered to the user's phone prompting them to enter their M-Pesa password to complete the transaction. This request is then sent to M-Pesa for processing.

The application uses Redux library to manage the state of the cart operations, signed-in user, and filter products by category from various components. Device's local storage holds the state data thanks to Redux-persist.

Before the user can checkout, the application requires that they are signed-in, have atleast one item in the shopping cart, and only then they can click the proceed to checkout button and the form to input number(Safaricom) appears.

The user sign-in method is Google's Sign-In With Popup provided by Firebase authentication

It is styled with Tailwind CSS, and Canva is used to create the logo.


**The Main Features are:**
1. M-Pesa STK push payment method
1. Fully responsive
1. Typing simulation on the landing page
1. Sign-in with popup by Google
1. Offer window period countdown
1. Navigation system with nav bar and hamburger menu
1. Swiper for recommended, best selling and all season products
1. Email service by EmailJS
1. Various ways to contact me including contact form, Whatsapp, call, email
1. Device local storage for state data
1. Copy to clipboard


## Installation
1. Clone the repository to your local machine: `git clone git@github:pptrgi/seedlings-by-mwalim-ecommerce-website.git`
1. Navigate to the cloned project's directory: `cd seedlings-by-mwalim-ecommerce-website`
1. Install the dependencies from the package.json file: `npm install`
1. Start the development server: `npm start`
The application will then be opened in your default browser at http://localhost:3000

## Technologies
The project is created with:
- React: 18.2.0
- Express: 4.18.2
- Firebase: 9.22.0
- React-redux: 8.0.5
- Tailwindcss: 3.3.1
- Axios: 1.4.0
- CORS: 2.8.5
- React-router-dom: 6.10.0
- @emailjs/browser: 3.11.0
- React-icons: 4.8.0
- @reduxjs/toolkit: 1.9.5
- React-toastify: 9.1.3
- Typed.js: 2.0.16
- Redux-persist: 6.0.0
- Swiper: 9.3.2
- React-countdown: 2.3.5
- Body-parser: 1.20.2
  

## Usage
After you have installed and started the development server you can use and modify the project.
 <br> But in order to enjoy some services including authentication, M-Pesa STK push and email service you'll need to set them up with their hosts. 

## Contributing
If you would like to contribute to this project, open a pull request, fork the repository. 

## Acknowledgments
I would like to express our gratitude to the creators and maintainers of the following open-source libraries and frameworks, as they have played a significant role in the development of this project:

- React
- Express
- Firebase
- Rdux
- Tailwindcss
- Axios
- CORS
- React Router
- EmailJS
- Font Awesome
- Redux Toolkit
- React Toastify
- Typed.js
- Redux Persist
- Swiper
- React Countdown
- Body-parser
- Canva
I appreciate the hard work and dedication of the developers behind these projects, which have greatly contributed to the success of my own work.