import {Strategy} from  "passport-local"
import {compare} from "bcrypt"


export function initalize(passport:any, getUserByName:any, getUserById:any){
    const authenticateUser = (name:string, pass:string, done:Function) => {
        const user = getUserByName(name)
        if(user == null){
            return done(null, false, {message: 'user does not exist'})
        }
        try{
            if(compare(pass, user.pass)){
                return done(null, user)
            }else {
                return done(null, false, {message: 'Password wrong'})
            }
        }
        catch(err){
                return done(err);
        }
    }
    passport.use( new Strategy({usernameField:'name', passwordField:"passHash"}, authenticateUser))
    passport.serializeUser((user:any, done:any) => done(null, user.id))
    passport.deserializeUser((id:any, done:any) => {return done(null, getUserById(id)) })
}