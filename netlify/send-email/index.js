

// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const msg = {
  to: 'anna.schmidt1697@gmail.com', 
  from: 'em3573.annaschmidt.dev', // Change to your verified sender
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}
sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })



// const sgMail = require("@sendgrid/mail");
const dotenv = require("dotenv");
dotenv.config();

const api_key = process.env.SENDGRID_API_KEY;

sgMail.setApiKey(api_key);

exports.handler = async function (event) {
    try {
        if (event.httpMethod !== "POST") {
            throw new Error(
                `Expecting a POST request, but received a ${event.httpMethod} request instead.`
            );
        }
        if (!event.body) {
            throw new Error("Body is empty. Are you trying to send a message?");
        }

        const data = event.data;

        if (!data.name) {
            throw new Error("Name is required!");
        }

        const textMessage = `
        A new message was sent by ${data.name} at ${data.email}.
        Message: ${data.message}
        `;

        const htmlMessage = `
            <p>A new message was sent by ${data.name} at ${data.email}.</p>
            <p> Message: <br/> ${data.message}</p>
        `;

        const email = {
            to: "anna.schmidt1697@gmail.com",
            from: "anna.schmidt1697@annaschmidt.dev", // Use the email address or domain you verified above
            subject: `New Contact Form: ${data.subject}`,
            text: textMessage,
            html: htmlMessage,
        };

        await sgMail.send(email);
        return {
            statusCode: 200,
            body: JSON.stringify({ success: true }),
        };
    } catch (error) {
        alert('An error occurred:', error);
        console.error(error);
        return {
            body: JSON.stringify({ success: false, message: error }),
        };
    }
};