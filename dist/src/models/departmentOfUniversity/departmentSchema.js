"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const DepartmentSchema = new mongoose_1.Schema({
    universityId: { type: mongoose_1.Schema.Types.ObjectId, ref: "universities" },
    departmentName: { type: String, required: "Department name is required parameter", trim: true }
});
const DepartmentDbModel = mongoose_1.model("departmentOfUniversities", DepartmentSchema);
exports.default = DepartmentDbModel;
