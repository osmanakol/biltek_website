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
const ParticipantService_1 = require("../services/ParticipantService");
const participantModel_1 = require("../models/participants/participantModel");
class ParticipantController {
    constructor() {
        this.createParticipant = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const result = yield this.participantService.create(new participantModel_1.ParticipantModel(req.body.name, req.body.surName, req.body.universityId, req.body.departmentId, req.body.email)).then((result) => {
                res.status(201).json({
                    data: result,
                    message: "OK"
                });
            }).catch(err => {
                res.json({
                    err: err,
                    message: "Bir hata oluştu"
                });
            });
        });
        this.createManyParticipant = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.participantService.createMany(new Array(...req.body.participants));
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
        this.updateParticipant = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.participantService.update(req.body._id, new participantModel_1.ParticipantModel(req.body.name, req.body.surName, req.body.universityId, req.body.departmentId, req.body.email));
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
        this.deleteParticipant = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.participantService.delete(req.body._id);
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
        this.findAll = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.participantService.findAll();
                res.json({
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
                const result = yield this.participantService.findById(req.body._id);
                res.json({
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
        this.participantService = new ParticipantService_1.ParticipantService();
    }
}
exports.ParticipantController = ParticipantController;
