"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WebRoutes {
    constructor(router) {
        this.router = router;
        this.Routes = () => {
            this.router.get("/", (req, res) => {
                res.render("site/comingSoon", { layout: "comingSoonLayout" });
            });
            return this.router;
        };
    }
}
exports.WebRoutes = WebRoutes;
