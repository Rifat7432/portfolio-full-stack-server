import nodemailer from "nodemailer";

export const sendEmail = async (
  from: string,
  html: string,
  subject: string
) => {
  console.log(from);
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "md.rifat.taluckdar@gmail.com",
      pass: "orri tfnp satd abkg",
    },
  });

  await transporter.sendMail({
    from: from,
    to: "md.rifat.taluckdar@gmail.com",
    subject: `${subject} from ${from}`,
    text: "An Offer",
    html: `<p>${html}</p>`,
  });
};
