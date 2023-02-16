import nodemailer from 'nodemailer';

const host = process.env.HOST_MAIL
const email = process.env.EMAIL_USER;
const emailPass = process.env.PASSWORD_EMAIL;
const port = process.env.PORT

const transporter = nodemailer.createTransport({
    host: host,
    port: port,
    auth: {
        user: email,
        pass: emailPass
    }

});

const mailer = ({ senderMail, name, text }) => {

    const from = name && senderMail ? `${name} <${senderMail}>` : `${name || senderMail}`;

    const message = {
        from,
        to: `${email}`,
        subject: `Nova Mensagem de Contato - ${name}`,
        text,
        replyTo: from
    };

    return new Promises((resolve, reject) => {
        transporter.sendMail(message, (error, info) =>
            error ? reject(error) : resolve(info)
        );
    });

};

export default async (req, res) => {

    const { senderMail, name, content } = req.body;

    if (!senderMail || !name || !content) {
        res.status(403).send();
        return;
    }

    const mailerRes = await mailer({ senderMail, name, text: content });
    res.send(mailerRes);
};


