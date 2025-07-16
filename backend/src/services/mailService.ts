import { injectable } from "inversify";
import nodemailer, { Transporter } from "nodemailer";

@injectable()
export class MailService {
  private transporter: Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587", 10),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });
  }

  async sendActivationMail(to: string, link: string) {
    await this.transporter.sendMail({
      from: process.env.SMTP_USER,
      to,
      subject: "Account activation on " + process.env.API_URL,
      text: "",
      html: `
          <div>
              <h1>To activate your account go to link</h1>
              <a href="${link}">${link}</a>
          </div>
          `,
    });
  }
}
