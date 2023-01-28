# Backend setup guidelines 🚀

**Hello contributor, To set up the backend server in your local system, You can follow the below listed guidelines. Happy coding!**

<br/>

- After setting up the Frontend, create another terminal and change the directory to `server`
- Run `npm install` to install all dependencies
- Once you're done installing, create a `.env` file in the root of your project directory to include all environment variables
- The following are the environment variables you'll need before running the server: 
```
PORT=
MONGO_URI=
RAZORPAY_KEY_ID=
KEY_ID= 
KEY_SECRET=
JWT_SECRET=
```
- You can go through the <a href="https://razorpay.com/docs/api" target="_blank">Razorpay docs</a> to generate the API keys
- Now you're all set, run `npm run dev` and your server shoud be running locally on the specified `PORT`
<br/>
