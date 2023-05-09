# Amazon Phishing project

## Install prerequisites
You must have node and npm installed for this project to run.
Here is a link to installation instruction: [link](https://kinsta.com/blog/how-to-install-node-js/)

## Running the project
To run the project you must run the start script.
The script is designed for linux but if you are on a windows machine you can do this with the Git bash.
Here is the how to start the app: `sh ./start.sh`

## Where are the "STOLEN" user credentials stored?
The user credentials are stored at the following location in the repo: `backend-server/data.txt`

## How we used the SSL/TLS Certificate in the video:
To create and use a SSL/TLS certificate, we did the following:
1. We created the certificate by using `openssl` command as follows: `openssl req -x509 -newkey rsa:2048 -keyout key.pem -out cert.pem -days 365`.
2. After following the on-screen prompts to setup the certificate for `localhost`, we modified the `package.json` file in the `frontend-server` folder to use HTTPS.
3. After that we locally installed the certificate on the test machine so that it is verified by the browser and not throw an error.
