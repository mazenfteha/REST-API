import  Express  from "express";

import { register } from "../controllers/authentication";

export default (router: Express.Router) => {
    router.post('/auth/register', register );
}