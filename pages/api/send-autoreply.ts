import type { NextApiRequest, NextApiResponse } from "next";
import nodeMailer from "nodemailer";

type RequesteData = {
  name?: string;
  email?: string;
};

export type ResponseData = {
  statusMessage: string;
  errors?: string | {};
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const { name, email } = req.body;
  const options = {
    from: `Islam Abdelhakiim <${process.env.USER}>`,
    to: `${name} <${email}>`,
    subject: "Thanks for reaching me out",
    html: `
    <div
    style="
      width: 100%;
      max-width: 800px;
      margin: 0 auto;
      font-family: Arial, sans-serif;
      font-size: 14px;
      line-height: 1.6;
      padding: 20px;
    "
  >
    <h2
      style=" padding: 20px; font-size: 24px; background-color: rgb(25, 39, 55); color: white"
    >
      Thank you for your message!
    </h2>
    <h4>Hey there ${name}!</h4>
    <p>
      <b>Thanks a bunch</b> for taking the time to reach out my <a href="https://islamabdelhakiim.xyz">Portfolio</a> and leave a
      message. 🎉
    </p>
    <p>
      I must say, your message has made my day brighter than a double rainbow
      on a sunny day! 🌈☀️
    </p>
    <p>
      Rest assured, your words have been whisked away to my inbox, and I'm
      eagerly looking forward to reading them. 📥
    </p>
    <p>
      In the meantime, keep embracing the magic of life and spreading your own
      creative sparkle wherever you go! 🎨🖌️💻
    </p>
    <p>
      <b>Stay awesome</b> and stay tuned for a reply that will make you go
      "Wowza!" 💌💻🎵
    </p>
    <p>Cheers,</p>
    <br />
    <div
      style="padding: 20px; background-color: rgb(25, 39, 55); color: white"
    >
      <p>IslamAbdelhakiim</p>
      <a href="https://islamabdelhakiim.xyz" style='color:white;'>Portfolio</a>
      <p>+20 01201179651</p>
    </div>
  </div>
    `,
  };

  const transporter = nodeMailer.createTransport({
    host: process.env.HOST,
    port: 587,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: process.env.USER,
      pass: process.env.PASS,
    },
  });

  try {
    const info = await transporter.sendMail(options);
    res.status(200).json({ statusMessage: "success" });
    console.log(`reply sent`);
  } catch (err) {
    console.log(`error on sending reply ${err}`)
    res.status(500).json({
      statusMessage: "failed",
    });
  }
}
