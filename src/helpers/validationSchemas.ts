import { Schema } from "express-validator";
export const registerSchema:Schema={ 
    name_surname:{
        exists:true,
        errorMessage:"Name_surname propertysi eksik",
        trim:true,
        escape:true,
        isAlpha:{
            errorMessage:"Invalid name_surname"
        },
        isLength:{
            options:{min:5,max:30},
            errorMessage:"Minimum 5 characters required!"
        }
    },
    email:{
        exists:{
            errorMessage:"Email property eksik"
        },
        trim:true,
        isEmail:true,
        errorMessage:"Invalid email",
    },
    phone:{
        exists:true,
        errorMessage:"Phone propertysi eksik",
        blacklist:{
            options:['-']
        },
        optional:true,
        matches:{
            options:["^[0-9]"],
            errorMessage:"Please enter digits",
        },
        isLength:{
            options:{
                min:10,
                max:10,
            },
            errorMessage:"Invalid phone number"
        },
    },
    university:{
        exists:true,
        errorMessage:"University property eksik"
    },
    department:{
        exists:true,
        errorMessage:"Department property eksik"
    }
}


























/*export const validationSchema=({
    fullname:
        body('name_surname')
            .trim()
            .escape()
            .bail()
            .isLength({ min: 5 })
            .withMessage('Minimum 5 characters required!')
            .bail()
            .isLength({ max: 30 })
            .withMessage('Maximum 30 characters enough!')
            .bail()
    ,
    email: body('email')
        .trim()
        .isEmail()
        .withMessage('Invalid email address')
        .bail()
    ,
    /*phone:body('phone')
        .trim('-')
        .optional()
        .isLength({ min: 10, max: 10 })
        .bail(),
})*/