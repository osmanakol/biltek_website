import { Document, Schema, Model, model } from "mongoose";

export interface IDeparment extends Document {
    departmentName: string
    universityId: string
}

const DepartmentSchema: Schema = new Schema({
    universityId: { type: Schema.Types.ObjectId, ref: "universities" },
    departmentName: { type: String, required: "Department name is required parameter", trim: true }
})

const DepartmentDbModel: Model<IDeparment> = model("departmentOfUniversities", DepartmentSchema);

export default DepartmentDbModel