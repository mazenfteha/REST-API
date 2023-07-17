import  Express  from "express";

import { login, register } from "../controllers/authentication";

export default (router: Express.Router) => {
    router.post('/auth/register', register );
    router.post('/auth/login', login );
}