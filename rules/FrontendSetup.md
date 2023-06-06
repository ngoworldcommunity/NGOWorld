
# Frontend Setup 

Follow the below steps to setup the Frontend locally. We are using `npm` as the package manager. So make sure you have `node` and `npm` installed in your system.

**If not installed, please read [installation guide](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).**
## Installing dependencies ⏳

- Open your terminal and navigate to the `Milan` directory.
- Type `npm install` to install all the dependencies.
- Once the installation is done, you can start the frontend server by typing `npm run dev`.
- This should start the frontend server on `localhost:3000`.

## Techstack overview 🌀

- We are currently using `ReactJS v18` along with `vite v3` as the frontend framework.
- We using `Twitter Bootstrap v5` for the styling.
- List of all the dependencies can be found in the `package.json` file.


## Coding standards 🔐

- We are using `ESLint` and `Prettier` for linting and formatting.
- Maintain the same coding standards as the rest of the codebase. 
- Follow good naming conventions for the files, variables and functions along with proper documentation (if needed).
- We also use `husky` and `lint-staged` to run the linter and formatter before every commit. Read about this in our [Contributing Guidelines](/CONTRIBUTING.md).
- Maintain a good folder structure, incase you use any new components or pages make sure you put them in the right folder.
- If you are using any new dependencies, make sure you mention them in the PR.
- If you are using any new Image , compress it using [online tools]("https://www.iloveimg.com/compress-image") and then use it in the project.
- **Remember**, writing readable and clean code while following the coding standards is the best thing for any developer.
## Next steps 🚀

So now you have the the frontend up and running locally. Now you can start working on the issues. Now follow the below steps to setup the backend locally.

1. [Setting up the backend locally](/rules/BackendSetup.md)

# Frontend Setup 

Follow the below steps to setup the Frontend locally. We are using `npm` as the package manager. So make sure you have `node` and `npm` installed in your system.

**If not installed, please read [installation guide](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).**
## Installing dependencies ⏳

- Open your terminal and navigate to the `Milan` directory.
- Type `npm install` to install all the dependencies.
- Once the installation is done, you can start the frontend server by typing `npm run dev`.
- This should start the frontend server on `localhost:3000`.

## Techstack overview 🌀

- We are currently using `ReactJS v18` along with `vite v3` as the frontend framework.
- We using `Twitter Bootstrap v5` for the styling.
- List of all the dependencies can be found in the `package.json` file.


## Coding standards 🔐

- We are using `ESLint` and `Prettier` for linting and formatting.
- Maintain the same coding standards as the rest of the codebase. 
- Follow good naming conventions for the files, variables and functions along with proper documentation (if needed).
- We also use `husky` and `lint-staged` to run the linter and formatter before every commit. Read about this in our [Contributing Guidelines](/CONTRIBUTING.md).
- Maintain a good folder structure, incase you use anu new components or pages make sure you put them in the right folder.
- If you are using any new dependencies, make sure you mention them in the PR.
- If you are using any new Image , compress it using [online tools]("https://www.iloveimg.com/compress-image") and then use it in the project.
- **Remember**, writing readable and clean code while following the coding standards is the best thing for any developer.
## Next steps 🚀

So now you have the the frontend up and running locally. Now you can start working on the issues. 

- If you don't need to modify/work on anything related to the backend, you can skip the backend setup and simply setup a `.env` file in the root.
- Inside that `.env` file you can put `VITE_MILANAPI="https://milan-server.vercel.app"`
- If you need your own backend and want to make changes there as well, you can follow [Setting up the backend locally](/rules/BackendSetup.md)

