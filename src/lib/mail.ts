import nodemailer from "nodemailer";

interface ISendMail {
  to: string;
  hrEmail?: string;
  subject: string;
  body: string;
}

export const sendMail = async ({ to, hrEmail, subject, body }: ISendMail) => {
  const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });

  try {
    const testResult = await transport.verify();
    console.log(testResult);
  } catch (error) {
    console.log(error);
  }

  try {
    const sendResult = await transport.sendMail({
      from: SMTP_EMAIL,
      to,
      subject,
      html: `FROM: ${hrEmail}` + "<br/>" + body,
    });
    console.log(sendResult);
  } catch (error) {
    console.log(error);
  }
};
