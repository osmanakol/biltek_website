"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ParticipantSchema = new mongoose_1.Schema({
    name: { type: String, required: 'Name is required', trim: true },
    surName: { type: String, required: 'Surname is required parameter', trim: true },
    university: { type: String, required: 'University is required parameter' },
    department: { type: String, required: 'Department is required parameter' },
    email: { type: String, required: 'Email is a required parameter', trim: true },
    date: { type: String, required: "Date is a required parameter", default: new Date().toLocaleDateString("tr-TR", { timeZone: "Europe/Istanbul", weekday: "long", year: "numeric", month: "short", day: "numeric" }) }
});
const ParticipantDbModel = mongoose_1.model('partipacipants', ParticipantSchema);
exports.default = ParticipantDbModel;
