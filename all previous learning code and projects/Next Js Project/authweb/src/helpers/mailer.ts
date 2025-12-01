import nodemailer from 'nodemailer'
import bcryptjs from 'bcryptjs';
import User from '@/models/userModels';


export const sendEmail = async ({ email, emailType, userId }: any) => {

    try {

        const hashedToken = await bcryptjs.hash(userId.toString(), 10)

        if (emailType === 'VERIFY') {
            await User.findByIdAndUpdate(userId, { verifyToken: hashedToken, verifyTokenExpiry: Date.now() + 3600000 })
        } else if (emailType === 'RESET') {
            await User.findByIdAndUpdate(userId, { forgotPasswordToken: hashedToken, forgotPasswordTokenExpiry: Date.now() + 3600000 })
        }


        // Looking to send emails in production? Check out our Email API/SMTP product!
        const transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "b5f3f7dca4772d", // wrong way.
                pass: "c1f523c0883a4f"
            }
        });

        const mailOptions = {
            from: 'sahil@sahil.ai',
            to: email,
            subject: emailType === 'VERIFY' ? "Verify your email" : "Reset your password",
            html: `<p>Click <a herf="${process.env.DOMAIN}/verifyemail?token=${hashedToken}" >here</a>  to ${emailType === 'VERIFY' ? "Verify your email" : "reset your password"}  
            or copy and paste the link below in your browser 
            <br>
            </p>`,
        }

        const mailResponse = await transport.sendMail(mailOptions)
        return mailResponse;


    } catch (error: any) {
        throw new Error(error.message)
    }
}