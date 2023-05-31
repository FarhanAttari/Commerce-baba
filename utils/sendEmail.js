const nodemailer = require('nodemailer');

module.exports = async(email,subject,text)=>{
    console.log(email)
    console.log(process.env.HOST)
    console.log(typeof(process.env.EMAIL_PORT))
    console.log(Boolean(process.env.SECURE))
    console.log(process.env.USER)
    console.log(process.env.PASS)
    try {
        // let testAccount = await nodemailer.createTestAccount();

        const transporter = nodemailer.createTransport({
            host:process.env.HOST,
            port:process.env.EMAIL_PORT,
            secure:process.env.SECURE,
            auth:{
                user:process.env.USER,
                pass:process.env.PASS
            }

            
        })
        await transporter.sendMail({
            from:process.env.USER,
            to:email,
            subject:subject,
            text:text
        });
        console.log("Email sent successfully");
    } catch (error) {
        console.log("Email sending failed");
        console.log(error);
    }
}