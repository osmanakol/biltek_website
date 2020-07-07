import { Request, Response, NextFunction } from "express";
import { body, validationResult } from "express-validator";
export const registerValidation = [
        //**validate name_surname property */
    body('name_surname')
        .trim()
        .escape()
        .bail()
        .isLength({ min: 5 })
        .withMessage('Minimum 5 characters required!')
        .bail()
        .isLength({ max: 30 })
        .withMessage('Maximum 30 characters enough!')
        .bail(),
    //** validate e-mail property */
    body('email')
        .trim()
        .isEmail()
        .withMessage('Invalid email address')
        .bail(),
    //** phone validation  */
   /* body('phone')
        .trim('-')
        .optional()
        .isLength({ min: 10, max: 10 })
        .bail(),*/
     async (req: Request, res: Response, next: NextFunction) => {
        console.log("validation chaini geçip errora geliyor")
        const errors = validationResult(req);
        console.log("errors neymis,\n")
        if (!errors.isEmpty()){
            console.log("error bu\n",errors)
            return res.json({
                errors: errors.array()
            });
        }
        next();
    }
]
