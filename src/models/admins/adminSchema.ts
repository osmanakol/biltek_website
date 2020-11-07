import { Document, Model, model, Schema } from "mongoose";
import { AdminModel } from "./adminModel"
import { logger } from "../../middlewares/logger"
export interface IAdmin extends Document, AdminModel{
    
}

const AdminSchema: Schema = new Schema({
    name: { type: String, required: 'Name and surname are required', trim: true },
    password: { type: String, required: 'password is required', trim: true },
    options: {type: String, required: 'authLevel is required', trim: true}
})

AdminSchema.pre<IAdmin>( 'save', function (_next){
    AdminDbModel.findOne({ name: this.name}, {name: 1, _id:0}, (err) =>{
        if (err)
            _next(err)
    }).then((res) => {
        if (res === null) {
            logger.info(`An admin is registered`)
            _next()
        }
        else {
            logger.warn(`admin is already registered`)
            _next(new Error("bu isimde bir hesap sistemimizde mevcut"))
        }
    })
})


const AdminDbModel: Model<IAdmin> = model("admins", AdminSchema)

export default AdminDbModel