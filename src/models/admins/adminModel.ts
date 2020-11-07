
import {IauthOptions} from "./interface/IauthOptions"


export class AdminModel{
    
    public name: string;
    public password: string;
    public options: IauthOptions;

    constructor( name:string, password:string, options:IauthOptions){
        this.name = name;
        this.password = password;
        this.options = options;
    }
    
}