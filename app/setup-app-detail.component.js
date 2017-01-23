"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var setup_app_service_1 = require("./services/setup-app.service");
var SetupAppDetailComponent = (function () {
    function SetupAppDetailComponent(router, activatedRoute, setupAppService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.setupAppService = setupAppService;
    }
    SetupAppDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.activatedRoute.params.subscribe(function (params) {
            _this._id = params['id'];
        });
        this.setupAppService.GetSingle(this._id).subscribe(function (data) {
            _this.setupApp = data;
        });
    };
    SetupAppDetailComponent.prototype.GotoEmployee = function () {
        this.router.navigate(['employees']);
    };
    SetupAppDetailComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return SetupAppDetailComponent;
}());
SetupAppDetailComponent = __decorate([
    core_1.Component({
        selector: 'setup-app-detail-component',
        templateUrl: './app/setup-app-detail.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute,
        setup_app_service_1.SetupAppService])
], SetupAppDetailComponent);
exports.SetupAppDetailComponent = SetupAppDetailComponent;
//# sourceMappingURL=setup-app-detail.component.js.map