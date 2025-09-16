import nodemailer, { type SendMailOptions } from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function sendEmail(
  name: string,
  email: string,
  messageContent: string
) {
  const mailOption: SendMailOptions = {
    from: { name: name, address: email },
    subject: "Hello, from " + name,
    to: process.env.EMAIL_USER,
    text: messageContent,
  };

  return await transporter.sendMail(mailOption);
}
