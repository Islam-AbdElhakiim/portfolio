import { ResponseData } from "@/types";
import type { NextApiRequest, NextApiResponse } from "next";
import nodeMailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  console.log(process.env.USER)
  console.log(process.env.HOST)
  console.log(process.env.PASS)
  const { name, email, message, subject } = req.body;
  // console.log("sending from", name, email);
  const options = {
    from: `${name} <${email}>`,
    to: "islamabdelhakiim21@gmail.com",
    subject: subject,
    html: `${message} <br /> ${email}`,
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
    res.status(200).json({ statusMessage: "success"});
    console.log(`Email sent`);
  } catch (err: any) {
    console.log(`error on sending mail ${err}`)
    res
      .status(500) 
      .json({
        statusMessage: "failed",
      });
  }
}
