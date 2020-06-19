"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const DepartmentService_1 = require("../services/DepartmentService");
const departmentModel_1 = require("../models/departmentOfUniversity/departmentModel");
class DepartmentController {
    constructor() {
        this.create = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.departmentService.create(new departmentModel_1.DepartmentModel(req.body.departmentName, req.body.universityId));
                res.json({
                    data: result,
                    state: "Success"
                });
            }
            catch (error) {
                res.json({
                    err: error,
                    message: "Bir problem oluştu"
                });
            }
        });
        this.createMany = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.departmentService.createMany(new Array(...req.body.deparments));
                res.json({
                    data: result,
                    state: "Success"
                });
            }
            catch (error) {
                res.json({
                    err: error,
                    message: "Bir hata oluştu"
                });
            }
        });
        this.update = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.departmentService.update(req.body._id, new departmentModel_1.DepartmentModel(req.body.deparmentName, req.body.universityId));
                res.status(200).json({
                    data: result,
                    state: "Success"
                });
            }
            catch (error) {
                res.json({
                    err: error,
                    state: "Error"
                });
            }
        });
        this.delete = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.departmentService.delete(req.body._id);
                res.status(200).json({
                    data: result,
                    state: "Success"
                });
            }
            catch (error) {
                res.json({
                    err: error,
                    state: "Error"
                });
            }
        });
        this.findAll = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.departmentService.findAll();
                res.status(200).json({
                    data: result,
                    state: "Success"
                });
            }
            catch (error) {
                res.json({
                    err: error,
                    state: "Error"
                });
            }
        });
        this.findById = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.departmentService.findById(req.body._id);
                res.status(200).json({
                    data: result,
                    state: "Success"
                });
            }
            catch (error) {
                res.json({
                    err: error,
                    state: "Error"
                });
            }
        });
        this.departmentService = new DepartmentService_1.DepartmentService();
    }
}
exports.DepartmentController = DepartmentController;
