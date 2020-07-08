//import { Request, Response, NextFunction } from "express";
import {checkSchema } from "express-validator";
import {registerSchema } from "./validationSchemas";

export const registerValidation = checkSchema(registerSchema)