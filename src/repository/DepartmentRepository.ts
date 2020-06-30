import { BaseRepository } from "./base/BaseRepository";
import { DepartmentModel } from "../models/departmentOfUniversity/departmentModel";
var mongoose = require('mongoose');
export class DepartmentRepository extends BaseRepository<DepartmentModel>{
    getDeparmentsById = (id:string) => {
        const result = this._model.find({"universityId":id});
        return result;
    }
}