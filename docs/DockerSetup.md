
# Docker setup guidelines 🚀

## Prerequisite

- Install [Docker Desktop](https://docs.docker.com/get-docker/)

## Step 1 - Clone the repository

```
 git clone https://github.com/ngoworldcommunity/NGOWorld.git
```

## Step 2 - Change directory to Milan

```
 cd Milan
```

## Step 3 - Add env variables

- Once you're done installing, create a `.env` file in the root of your project directory to include all environment variables
- The following are the environment variables you'll need before running the server:
```
PORT=
MONGO_URI=
RAZORPAY_KEY_ID=
KEY_ID=
KEY_SECRET=
```
- You can go through the <a href="https://razorpay.com/docs/api" target="_blank">Razorpay docs</a> to generate the API keys

## Step 4 - Run docker compose file

```
docker-compose up -d --build
```

## Step 5 - Open in browser

`visit localhost:3000 to run the app`

