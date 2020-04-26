import { ParticipantRepository } from "../repository/ParticipantRepository";
import ParticipantDbModel from "../models/participants/participantSchema";
import { ParticipantModel } from "../models/participants/participantsModel";

export class ParticipantService {
    private repository = new ParticipantRepository(ParticipantDbModel);

    constructor() { }

    public create = async (item: ParticipantModel) => {
        console.log("Service");
        const result = await this.repository.create(item);
        return result;
    }
}