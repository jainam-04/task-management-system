const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({

      service: "gmail",

      auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
      }

});



const sendEmail = async (to, subject, message) => {
      try {


            await transporter.sendMail({

                  from: process.env.EMAIL_USER,

                  to,

                  subject,

                  html: `

            <div style="
            font-family:Arial;
            padding:20px;
            ">

            <h2 style="color:#667eea">
            Tasky
            </h2>

            <p>
            ${message}
            </p>

            </div>

            `

            });


            console.log("Email sent");


      }
      catch (error) {

            console.log("Email error:", error);

      }


}



module.exports = sendEmail;