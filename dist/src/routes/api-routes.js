"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ParticipantController_1 = require("../controller/ParticipantController");
const UniversityController_1 = require("../controller/UniversityController");
const DepartmentController_1 = require("../controller/DepartmentController");
class ApiRoutes {
    constructor(router) {
        this.router = router;
        this.Routes = () => {
            // ? Routes /api 
            this.router.route('/')
                .get((req, res) => {
                res.json({
                    status: "API is working",
                    message: "Biltek Website Teams"
                });
            });
            // ? Routes /api/participant
            this.router.route('/participant')
                .get(this.participantController.findAll)
                .post(this.participantController.createParticipant)
                .put(this.participantController.updateParticipant)
                .delete(this.participantController.deleteParticipant);
            // ? Routes /api/university
            this.router.route('/university')
                .get(this.universityController.findAll)
                .post(this.universityController.createUniversity)
                .put(this.universityController.update)
                .delete(this.universityController.delete);
            // ? Routes /api/university/addMany
            this.router.route('/university/addMany')
                .post(this.universityController.createUniversities);
            // ? Routes /api/department
            this.router.route('/department')
                .get(this.deparmentController.findAll)
                .post(this.deparmentController.createMany)
                .put(this.deparmentController.update)
                .delete(this.deparmentController.delete);
            return this.router;
        };
        this.participantController = new ParticipantController_1.ParticipantController();
        this.universityController = new UniversityController_1.UniversityController();
        this.deparmentController = new DepartmentController_1.DepartmentController();
        this.Routes();
    }
}
exports.ApiRoutes = ApiRoutes;
