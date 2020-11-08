import { checkSchema } from "express-validator"

export class TModel {
    public name_surname: string;
    public university: string;
    public department: string;
    public email: string;
    public date: string;
    public team: string
    public sinif:string

    constructor(name_surname: string, department: string, email: string, team: string,sinif:string ,university: "Ankara Yıldırım Beyazıt Üniversite", date = new Date().toLocaleDateString("tr-TR", { timeZone: "Europe/Istanbul", weekday: "long", year: "numeric", month: "short", day: "numeric" })) {
        this.name_surname = name_surname;
        this.university = university;
        this.department = department;
        this.email = email;
        this.sinif = sinif
        this.date = date;
        this.team = team
    }

    public get FullName(): string {
        return this.name_surname.trim();
    }

}

export const TValidationChain = checkSchema({
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