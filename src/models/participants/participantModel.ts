import { checkSchema } from "express-validator"


export interface IEvent{
    event_id:string,
    isJoin:boolean
}
export class ParticipantModel {
    public name_surname: string;
    public university: string;
    public department: string;
    public email: string;
    public date: string;
    public phone?: string;
    public events? :IEvent[]

    constructor(name_surname: string, university: string, department: string, email: string,phone?: string,events?:IEvent[] , date = new Date().toLocaleDateString("tr-TR", { timeZone: "Europe/Istanbul", weekday: "long", year: "numeric", month: "short", day: "numeric" })) {
        this.name_surname = name_surname;
        this.university = university;
        this.department = department;
        this.email = email;
        this.phone = phone;
        this.date = date;
        this.events = events
    }

    public get FullName(): string {
        return this.name_surname.trim();
    }

}

export const ParticipantValidationChain = checkSchema({
    name_surname: {
        exists: true,
        errorMessage: "Name_surname propertysi eksik",
        trim: true,
        escape: true,

        isLength: {
            options: { min: 3 },
            errorMessage: "Minimum 3 characters required!"
        },
        customSanitizer: {
            options: (value: string, { req }) => {
                if (req.body.name_surname)
                    return value.toUpperCase()
            }
        },
        notEmpty: {
            options: { ignore_whitespace: true },
            errorMessage: "Ad Soyad kısmı boş bırakılamaz"
        }
    },
    email: {
        exists: {
            errorMessage: "Email property eksik"
        },
        trim: true,
        isEmail: true,
        errorMessage: "Invalid email",
        /* custom: {
             options: async (value: string) => {
                 await ParticipantDbModel.findOne({ email: value }).then(query => {
                     if (query)
                         return Promise.reject('E-mail already exist');
                 });
             },
         }*/
    },
    phone: {
        exists: {
            errorMessage: "Phone property eksik"
        },
        /*isMobilePhone:{
            errorMessage:"Lütfen geçerli bir telefon numarasını yazınız",
            options:"tr-TR"
        },*/
        blacklist: {
            options: ['-']
        },
        optional: {
            options: { nullable: true }
        }
        
       
        /*custom:{
            options:(value:string)=>{
                //if(value!='' || value!=undefined){
                    if(value.match('/^[0-9]+$/') || value.length==0 || value==undefined)
                        return value
                //}
            },
            errorMessage:"Invalid Phone Number"
        },*/


    },
    university: {
        exists: true,
        errorMessage: "University property eksik",
        notEmpty: {
            options: { ignore_whitespace: true },
            errorMessage: "Üniversite kısmı boş bırakılamaz"
        }
    },
    department: {
        exists: true,
        errorMessage: "Department property eksik",
        notEmpty: {
            options: { ignore_whitespace: true },
            errorMessage: "Bölüm kısmı boş bırakılamaz"
        }
    }
})