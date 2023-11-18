import passport from "passport";
import { Router } from "express";

const router = Router()

app.get('/auth/google',
passport.authenticate('google', { scope: ['profile'] }));

app.get('/auth/google/callback', 
passport.authenticate('google', { successRedirect: "/profile"})
); 


export default router