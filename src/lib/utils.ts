import { sign } from "jsonwebtoken"
import { readFileSync } from "fs"
import { join } from "path"

const pathToKey = join(__dirname, '..', 'secret' ,'id_rsa_priv.pem');
const PRIV_KEY = readFileSync(pathToKey, 'utf8');


export function issueJWT(user:any) {
    const _id = user._id;
  
    const expiresIn = 60 * 25;
  
    const payload = {
      sub: _id,
      iat: Date.now(),
      authLevel:user.authLevel
    };
  
    const signedToken = sign(payload, PRIV_KEY, { expiresIn: expiresIn, algorithm: 'RS256' });
  
    return {
      token: signedToken,
      expires: expiresIn
    }
  }