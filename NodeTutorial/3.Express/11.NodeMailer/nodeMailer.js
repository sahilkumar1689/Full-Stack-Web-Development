const nodemailer = require("nodemailer");
require("dotenv").config({
    path:"./.env"
})


// console.log(process.env.Mailer_Email);
// console.log(process.env.Mailer_Pass);

const transporter = nodemailer.createTransport({
    service:"gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: process.env.Mailer_Email,
    pass: process.env.Mailer_Pass
  },
});

const Mail = async (mailObj)=>{
    try {
        // send mail with defined transport object
      
      const response = await transporter.sendMail(mailObj);
      
      if(response) return response;
      else null;

    } catch (err) {

        return err.message;
    }
}

module.exports = Mail;  

/*
{
    from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  }

*/ 