import {Strategy} from  "passport-local"
import {compare, hash} from "bcrypt"
import  "passport-jwt"

export function initalize(passport:any, getUserByName:Function, getUserById:Function, users:any){
    const authenticateUser = (name:string, pass:string, done:Function) => {
        const user = getUserByName(name, users)
        if(user == null){
            return done(null, false, {message: 'user does not exist'})
        }
        try{
            if(compare(hash(pass, 10), user.pass)){
                return done(null, user)
            }else {
                return done(null, false, {message: 'Password wrong'})
            }
        }
        catch(err){
                return done(err);
        }
    }
    passport.use( new Strategy({usernameField:'Name'}, authenticateUser))
    passport.serializeUser((user:any, done:any) => done(null, user.id))
    passport.deserializeUser((id:any, done:any) => {return done(null, getUserById(id, users)) })
}