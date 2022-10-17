require('dotenv').config();
const {readFileSync, promises: fsPromises} = require('fs');
const cron = require('node-cron');
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const cronExpression = process.env.CRON;
const client = require('twilio')(accountSid, authToken);

var currentMessage = 0;

function sendMessage() {
    const messages = readFileSync('./messages.txt', 'UTF-8').split(/\r?\n/);
	client.messages
		.create({
			body: messages[currentMessage],
			from: process.env.FROM_PHONE_NUMBER,
			to: process.env.TO_PHONE_NUMBER
		})
		.then(message => {
			console.log(message);
			console.log('Sent message #' + currentMessage);
			currentMessage++;
		});
}

cron.schedule(cronExpression, () => {
	sendMessage();
	console.log('Message sent!');
});
