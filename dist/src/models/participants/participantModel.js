"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ParticipantModel {
    constructor(name, surName, university, department, email, date = new Date().toLocaleDateString("tr-TR", { timeZone: "Europe/Istanbul", weekday: "long", year: "numeric", month: "short", day: "numeric" })) {
        this.name = name;
        this.surName = surName;
        this.university = university;
        this.department = department;
        this.email = email;
        this.date = date;
    }
    get FullName() {
        return this.name.trim() + this.surName.trim();
    }
    set Name(name) {
        this.name = name;
    }
    set SurName(surName) {
        this.surName = surName;
    }
}
exports.ParticipantModel = ParticipantModel;
