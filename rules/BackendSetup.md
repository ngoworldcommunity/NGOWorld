# Backend Setup

Follow the below setup to setup the backend locally. We are using `npm` as the
package manager. So make sure you have `node` and `npm` installed in your
system.

**If not installed, please read
[installation guide](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).**

## Installing dependencies ⏳

- Open your terminal and navigate to the `Milan` directory.
- After that navigate to the `server` directory by typing `cd server`.
- Type `npm install` to install all the dependencies.
- Once the installation is done, you can start the frontend server by typing
  `npm start`.
- This should start the frontend server on `localhost:5000`.

## Techstack overview 🌀

- We are currently using `ExpressJS v4` along with `MongoDB v6` as the backend
  framework.
- We are using `Nodemon` for the hot reloading.
- List of all the dependencies can be found in the `package.json` file.

## Setting up `.env`

We use a `.env` file using the `dotenv` package inside the root of the `server`
directory.

You can use the following values as denoted below, remember that if you are
using your own database the data might vary.

```bash

<!-- WE USE RAZORPAY DETAILS (TEST ACCOUNT) -->
RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=

<!-- YOU CAN PUT YOUR OWN MONGODB CREDENTIALS HERE -->
MONGO_URI=
PORT=""

<!-- YOU CAN PUT YOUR OWN SECRET RANDOM STRING HERE -->
JWT_SECRET=
```

## Coding standards 🔐

- Make sure to follow proper latest coding practices.
- Maintain a good readable folder structure
- Incase adding an API, do documment about it.

## Next steps 🚀

So now you have the the frontend up and running locally. Now you can start
working on the issues. Now follow the below steps to setup the backend locally.

1. [Setting up the frontend locally](/rules/FrontendSetup.md)
