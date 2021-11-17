const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');

class Email {
    constructor(email, url, nickname) {
        this.email = email;
        this.url = url;
        this.nickname = nickname
        this.fromEmail = 'pepitoperezprueba3@gmail.com';
        this.fromName = 'Pepito Perez';
    }

    async sendEmail() {
        const mailOptions = {
            to: this.email,
            from: {
                email: this.fromEmail,
                name: this.fromName,
            },
            templateId: 'd-6c9dd6013f044334b55a94fb25f1db9d',
            dynamic_template_data: {
                url_act: this.url,
                name: this.nickname,
                subject: 'Activa tu cuenta',
            },
        };
        await sgMail.send(mailOptions).then(() => { }, console.error);
    }
}