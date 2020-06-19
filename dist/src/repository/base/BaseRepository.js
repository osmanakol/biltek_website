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
class BaseRepository {
    /**
     * @constructor
     * @param model is exporting to models file
     */
    constructor(model) {
        this._model = model;
    }
    //! That functions commets line is in the their interface file (IRead and IWrite)
    createMany(item) {
        const result = this._model.create(item);
        return result;
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this._model.find();
            console.log(result);
            return result;
        });
    }
    findOne(property) {
        throw new Error("Method not implemented.");
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this._model.findById({ "_id": id });
            return result;
        });
    }
    create(item) {
        const result = this._model.create(item);
        return result;
    }
    update(id, item) {
        const result = this._model.update({ "_id": id }, item);
        console.log(result);
        return result;
    }
    delete(id) {
        const result = this._model.deleteOne({ "_id": id });
        return result;
    }
}
exports.BaseRepository = BaseRepository;
