import {Strategy} from  "passport-local"
import {compare} from "bcrypt"

export function initalize(passport:any, getUserByName:any, getUserById:any){
    const authenticateUser = async (name:string, pass:string, done:Function) => {
        console.log("")
        const user = await getUserByName(name)
        if(user == null){
            return done(null, false, {message: 'user does not exist'})
        }
        try{
            if( await compare(pass, user.password)){
                return done(null, user)
            }else {
                return done(null, false, {message: 'Password wrong'})
            }
        }
        catch(err){
                return done(err);
        }
    }
    passport.use( new Strategy({usernameField:'name', passwordField:"password"}, authenticateUser))
    passport.serializeUser( (user:any, done:any) => done(null, user.id) )
    passport.deserializeUser( (id:any, done:any) =>{
            console.log("")
            getUserById(id, (err:any, user:any) => {
            done(err, user);
        });
    })
}