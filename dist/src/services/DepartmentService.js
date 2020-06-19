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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DepartmentRepository_1 = require("../repository/DepartmentRepository");
const departmentSchema_1 = __importDefault(require("../models/departmentOfUniversity/departmentSchema"));
class DepartmentService {
    constructor() {
        this.repository = new DepartmentRepository_1.DepartmentRepository(departmentSchema_1.default);
        this.create = (item) => __awaiter(this, void 0, void 0, function* () {
            console.log("Service");
            const result = yield this.repository.create(item);
            return result;
        });
        this.createMany = (item) => __awaiter(this, void 0, void 0, function* () {
            console.log("Service");
            const result = yield this.repository.createMany(item);
            return result;
        });
        this.update = (id, item) => __awaiter(this, void 0, void 0, function* () {
            console.log("Service");
            const result = yield this.repository.update(id, item);
            return result;
        });
        this.delete = (id) => __awaiter(this, void 0, void 0, function* () {
            console.log("Service");
            const result = yield this.repository.delete(id);
            return result;
        });
        this.findAll = () => __awaiter(this, void 0, void 0, function* () {
            console.log("Service");
            const result = yield this.repository.findAll();
            return result;
        });
        this.findById = (id) => __awaiter(this, void 0, void 0, function* () {
            console.log("Service");
            const result = yield this.repository.findById(id);
            return result;
        });
    }
}
exports.DepartmentService = DepartmentService;
