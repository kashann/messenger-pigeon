# Digital Messenger Pigeon
A digital pigeon companion that will send predefined SMS texts to your desired phone number.

## Getting started
Prerequisites:
- [twilio.com](https://www.twilio.com/) account
    - add values for `TWILIO_ACCOUNT_SID`, `TWILIO_AUTH_TOKEN`, `FROM_PHONE_NUMBER` in [.env](./.env) file
- NPM
    - `node-cron`
    - `twilio`
    - `dotenv`
    - `fs`

## Running
You need:
- A phone number to send texts to [TO_PHONE_NUMBER](./.env)
- A [CRON](./.env) expression to run the job.

Start with `node main.js`

Enjoy :)