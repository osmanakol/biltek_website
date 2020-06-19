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
const UniversityService_1 = require("../services/UniversityService");
const universityModel_1 = require("../models/universities/universityModel");
class UniversityController {
    constructor() {
        this.universityService = new UniversityService_1.UniversityService();
        this.createUniversity = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.universityService.create(new universityModel_1.UniversityModel(req.body.name));
                res.status(201).json({
                    data: result,
                    message: "Ok"
                });
            }
            catch (error) {
                res.json({
                    err: error,
                    state: "Error"
                });
            }
        });
        this.createUniversities = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.universityService.createMany(new Array(...req.body.universities));
                res.status(201).json({
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
                const result = yield this.universityService.findAll();
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
                const result = yield this.universityService.delete(req.body._id);
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
        this.update = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.universityService.update(req.body._id, new universityModel_1.UniversityModel(req.body.universityName));
                res.status(200).json({
                    result: result,
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
                const result = yield this.universityService.findById(req.body._id);
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
    }
}
exports.UniversityController = UniversityController;
