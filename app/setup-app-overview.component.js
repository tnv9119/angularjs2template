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
var SetupAppOverviewComponent = (function () {
    function SetupAppOverviewComponent(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    SetupAppOverviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.activatedRoute.parent.params.subscribe(function (params) {
            _this.parentRouterId = params['id'];
            alert('child get id: ' + _this.parentRouterId);
        });
    };
    SetupAppOverviewComponent.prototype.ngOnDestroy = function () {
    };
    return SetupAppOverviewComponent;
}());
SetupAppOverviewComponent = __decorate([
    core_1.Component({
        selector: 'setup-app-overview-component',
        template: "\n    <h3>Overview setup app</h3>\n    "
    }),
    __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute])
], SetupAppOverviewComponent);
exports.SetupAppOverviewComponent = SetupAppOverviewComponent;
//# sourceMappingURL=setup-app-overview.component.js.map