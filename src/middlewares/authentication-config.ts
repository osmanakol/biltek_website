import {Strategy} from  "passport-jwt"
import { readFileSync } from "fs"
import { join } from "path"
import { Request } from "express"
import {cookieExtractor} from "../lib/utils"

const pathToKey = join(__dirname, '..', '..','publicKey','id_rsa_pub.pem');
const PUB_KEY = readFileSync(pathToKey, 'utf8');


export function initalize(passport:any, getUserById:any){
    const authenticateUser = async (payload:any, done:Function) => {
        try{
            if(payload.exp < Date.now()){
                done(null, false,{message: 'Token Expired'})
            }
            const user = getUserById(payload.sub)
            if(user){
                return done(null, user)
            }else {
                return done(null, false, {message: 'token wrong'})
            }
        }
        catch(err){
                return done(err);
        }
    }

    const options = {
        jwtFromRequest:  cookieExtractor,
        secretOrKey: PUB_KEY,
        ignoreExpiration:false
    }

    passport.use( new Strategy(options, authenticateUser))
    passport.serializeUser( (user:any, done:any) => done(null, user.id) )
    passport.deserializeUser( (id:any, done:any) =>{
            getUserById(id, (err:any, user:any) => {
            done(err, user);
        });
    })
}