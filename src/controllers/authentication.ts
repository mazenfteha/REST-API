import express  from "express";

import { createUser, getUserByEmail } from "../db/users";
import { authentication, random } from "../helpers/index";


export const register = async(req: express.Request,res: express.Response)=> {
    try {
        const {email, password, username} = req.body;

        if(!email || !password || !username) {
            return res.status(400).send('you must complete all form')
        }

        const existingUser = await getUserByEmail(email);

        if(existingUser){
            return res.status(400).send('user is already exist')
        }

        const salt = random()
        const user = await createUser({
            email,
            username,
            authentication: {
                salt,
                password: authentication(salt, password),
            },
        })
        return res.status(200).json(user).end()
    } catch (error) {
        console.log(error)
        return res.sendStatus(400)
    }
}