import { Schema } from "express-validator";
export const registerSchema:Schema={ 
    name_surname:{
        trim:true,
        escape:true,
        isAlpha:true,
        errorMessage:"please enter an alphacase",
        isLength:{
            options:{min:5,max:30},
            errorMessage:"Minimum 5 characters required!"
        }
    },
    email:{
        trim:true,
        isEmail:true,
        errorMessage:"Invalid email",
    },
    phone:{
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