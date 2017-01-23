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
var SetupAppComponent = (function () {
    function SetupAppComponent(setupAppService, router, activatedRouter) {
        this.setupAppService = setupAppService;
        this.router = router;
        this.activatedRouter = activatedRouter;
    }
    SetupAppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRouter.queryParams.subscribe(function (params) {
            _this.currentPage = params['pageNumber'] || 1;
            console.log(_this.currentPage);
            console.log(params['filter']);
        });
        this.LoadData();
        this.pages = [1, 2, 3, 4, 5];
    };
    SetupAppComponent.prototype.Search = function () {
        var _this = this;
        this.setupAppService.Search(this.keyword).subscribe(function (response) {
            _this.setupApps = response;
            console.log(response);
        }, function (error) {
            console.log(error);
        });
    };
    SetupAppComponent.prototype.Delete = function (id) {
        var _this = this;
        var confirmResult = confirm("Are you sure to delete setup app?");
        if (confirmResult) {
            this.setupAppService.Delete(id).subscribe(function (response) {
                if (response) {
                    alert('Delete ok');
                    _this.LoadData();
                }
            });
        }
    };
    SetupAppComponent.prototype.LoadData = function () {
        var _this = this;
        this.setupAppService.GetList().subscribe(function (response) {
            _this.setupApps = response;
            console.log(response);
        }, function (error) {
            console.log(error);
        });
    };
    return SetupAppComponent;
}());
SetupAppComponent = __decorate([
    core_1.Component({
        selector: 'setup-app-list',
        templateUrl: './app/setup-app.component.html',
    }),
    __metadata("design:paramtypes", [setup_app_service_1.SetupAppService,
        router_1.Router, router_1.ActivatedRoute])
], SetupAppComponent);
exports.SetupAppComponent = SetupAppComponent;
//# sourceMappingURL=setup-app.component.js.map