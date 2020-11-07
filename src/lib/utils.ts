import { sign } from "jsonwebtoken"
import { readFileSync } from "fs"
import { join } from "path"
import { Request, Response, NextFunction} from "express"
import "cookie-parser"

const pathToKey = join(__dirname, '..', 'secret' ,'id_rsa_priv.pem');
const PRIV_KEY = readFileSync(pathToKey, 'utf8');


export function issueJWT(user:any) {
    const _id = user._id;
    const authLevel = user.authLevel;
    const expiresIn = "2d";  // 25 minutes
  
    const payload = {
      sub: _id,
      iat: Date.now(), 
      authLevel: authLevel
    };
  
    const signedToken = sign(payload, PRIV_KEY, { expiresIn: expiresIn, algorithm: 'RS256' });
  
    return {
      token: signedToken,
      expires: expiresIn
    }
  }

  export const cookieExtractor = (req:Request) => {
    var token = null;
    if (req && req.cookies) token = req.cookies['jwt']
     return req.cookies['jwt']
}