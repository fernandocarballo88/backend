import { passport } from "passport";
import { usersManager } from "./managers/usersManagers.js";
import { Strategy as LocalStrategy} from "passport-local";
import  { hashData, compareData } from "./utils.js"
import { Strategy as GitHubStrategy } from "passport-github2";
import { ExtractJwt, Strategy as JWTStrategy } from "passport-jwt";

const JWT_SECRET = "jwtSECRET" 


passport.serializeUser(function(user, done) {
    done(null, user._id);
});

passport.deserializeUser( async function(id, done) {
    try {
        const user = await usersManager.findById(id);
        done(null, user);
    } catch (error) {
        done(error)        
    }
    });

passport.use("signup", new LocalStrategy({
    usernameField: 'email',
},
    async (email, password, done)=>{
        try {
            const userDB = await usersManager.findByEmail(email);
            if(userDB){
                return done(null, false);
            }
            const hashedPassword = await hashData(password)
            const createdUser = await usersManager.createOne({...req.body, password:hashedPassword});
            done(null, createdUser);
        } catch (error) {
            done(error);
        }
    }
));

passport.use("login", new LocalStrategy({
    usernameField: 'email',
},
    async (email, password, done)=>{
        try {
            const userDB = await usersManager.findByEmail(email);
            if(!userDB){
                return done(null, false);
            }
            const comparedPassword = await compareData(password, userDB.password);
            //const createdUser = await usersManager.createOne({...req.body, password:hashedPassword});
            if (!comparedPassword) {
                return done(null, false);
            }
            done(null, userDB)
        } catch (error) {
            done(error);
        }
    }
));


passport.use("github", new GitHubStrategy({
    clientID: "Iv1.9d90953c10a9b921",
    clientSecret: "8968c1165bc47f2a866e518c906b8e1ce8743942",
    callbackURL: "http://localhost:8080/api/users/github",
},
async(accessToken, refreshToken, profile, done)=>{
    try {
        const userDB = await usersManager.findByEmail(profile.email)
        if(userDB){
            if(userDB.from_github){
                return done(null, userDB)
            } else{
                return done(null, false)
            }
        }
        const newUser = {
            first_name :"",
            last_name:"",
            email: profile.email,
            password:"",
            from_github: true,
        }
        const createdUser = await usersManager.createOne(newUser);
        done(null, createdUser);
        
    } catch (error) {
        done(error)
    }
}
));

const fromCookies = (req)=>{
    return req.cookies.token;
};

passport.use("jwt", new JWTStrategy(
    {
    secretOrKey: JWT_SECRET,
    jwtFromRequest: ExtractJwt.fromExtractors([fromCookies]),
},
async(jwt_payload, done)=>{
    console.log("jwt-passport", jwt_payload);
    done(null, false)
}
))
