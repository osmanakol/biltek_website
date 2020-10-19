import {Strategy} from "passport-local";
import {compare} from "bcrypt"

function initalize(passport:any){
    const authenticateUser = (name:string, pass:string, users:any) => {
        const user = users.indexOf(name)
        if(user == null){
            return done(null, false, {message: 'user does not exist'})
        }
        try{
            if(await compare(pass, users.findIndex(user).password){
                return done(null, user)
            }else {
                return done(null, false, {message: 'Password wrong'})
            }
        }
    }
}