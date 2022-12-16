
exports.handler = async function (event, context) {
        try {
            if (event.httpMethod !== "POST") {
                throw new Error(
                    `Expecting a POST request, but received a ${event.httpMethod} request instead.`
                );
            }
            if (!event.body) {
                throw new Error("Body is empty. Are you trying to send an email?");
            }
    
            const data = JSON.parse(event.body);
    
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

    await fetch(`${process.env.URL}/.netlify/functions/send-email`, {
        headers: {
          "netlify-emails-secret": process.env.NETLIFY_EMAILS_SECRET,
        },
        method: "POST",
        body: JSON.stringify(email),
      });
      return {
        statusCode: 200,
        body: JSON.stringify({ success: true }),
       };
 
    } catch (error) {
        alert(error);
        console.error(error);
        return {
            body: JSON.stringify({ success: false, message: error }),
            }
        }
    };