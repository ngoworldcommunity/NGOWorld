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

You must create a `.env` file similar to [.env.example](../.env.example) file, remember that if you are using your own database the data might vary.


## Setting up `razorpay api key`
- Head on to [Razorpay API reference](https://razorpay.com/docs/api) and Sign Up to razor pay remember you don't need to KYC. 
- Login after Signing Up then you will see this interface, you can use the test mode.

<img width="945" alt="image" src="https://github.com/tejaskh3/Milan/assets/98630752/2de85099-8167-4db2-9fc7-9d539c5bcf64">

- Then move to `Account & Settings` there you will get API keys option where you can generate the keys.

<img width="960" alt="image" src="https://github.com/tejaskh3/Milan/assets/98630752/b1feb58c-f71a-4820-b298-40f05d27146e">

- Generate and copy the key and its secret and paste it to `RAZORPAY_KEY_ID` and `RAZORPAY_KEY_SECRET` respectively and you are done setting up backend.

<img width="359" alt="image" src="https://github.com/tejaskh3/Milan/assets/98630752/5f08bde3-17fa-472d-9587-9524fa737dd5">

## Coding standards 🔐

- Make sure to follow proper latest coding practices.
- Maintain a good readable folder structure
- Incase adding an API, do documment about it.

## Next steps 🚀

So now you have the the frontend up and running locally. Now you can start
working on the issues. Now follow the below steps to setup the backend locally.

1. [Setting up the frontend locally](/rules/FrontendSetup.md)
