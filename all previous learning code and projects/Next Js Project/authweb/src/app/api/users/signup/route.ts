import { Connect } from "@/dbConfig/dbConfig";
import User from '@/models/userModels'
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from 'bcryptjs'
import { sendEmail } from "@/helpers/mailer";

Connect()

export async function POST(request: NextRequest) {

    try {

        const requestBody = await request.json()
        const { username, email, password } = requestBody

        const user = await User.findOne({ email })

        if (user) {
            return NextResponse.json({ error: "user already exist" }, { status: 400 })
        }

        const salt = await bcryptjs.genSalt(10);
        const hashedPass = await bcryptjs.hash(password, salt);

        const newUser = new User({
            username,
            email,
            password: hashedPass,
        })

        const savedUser = await newUser.save()
        console.log(savedUser);

        //send emailn func is here 

        await sendEmail({ email, emailType: "VERIFY", userId: savedUser._id })

        return NextResponse.json({
            message: "User Registered Succesfully",
            success: true,
            savedUser
        })


    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })

    }
}