"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UniversitySchema = new mongoose_1.Schema({
    universityName: { type: String, required: "University name is a required parameter" }
});
const UniversityDbModel = mongoose_1.model("universities", UniversitySchema);
exports.default = UniversityDbModel;
