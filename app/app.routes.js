"use strict";
var router_1 = require("@angular/router");
var home_component_1 = require("./home.component");
var employee_component_1 = require("./employee.component");
var employee_detail_component_1 = require("./employee-detail.component");
var notfound_component_1 = require("./notfound.component");
var employee_overview_component_1 = require("./employee-overview.component");
var employee_projects_component_1 = require("./employee-projects.component");
var login_component_1 = require("./login.component");
var employee_edit_component_1 = require("./employee-edit.component");
var employee_add_component_1 = require("./employee-add.component");
var setup_app_component_1 = require("./setup-app.component");
var setup_app_edit_component_1 = require("./setup-app-edit.component");
var setup_app_add_component_1 = require("./setup-app-add.component");
var setup_app_detail_component_1 = require("./setup-app-detail.component");
var setup_app_overview_component_1 = require("./setup-app-overview.component");
var setup_app_projects_component_1 = require("./setup-app-projects.component");
var routing = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'employees', component: employee_component_1.EmployeeListComponent },
    { path: 'employee-edit/:id', component: employee_edit_component_1.EmployeeEditComponent },
    { path: 'employee-add', component: employee_add_component_1.EmployeeAddComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    {
        path: 'employee-detail/:id', component: employee_detail_component_1.EmployeeDetailComponent,
        children: [
            { path: '', redirectTo: 'overview', pathMatch: 'full' },
            { path: 'overview', component: employee_overview_component_1.EmployeeOverviewComponent },
            { path: 'projects', component: employee_projects_component_1.EmployeeProjectsComponent }
        ]
    },
    { path: 'setupApps', component: setup_app_component_1.SetupAppComponent },
    { path: 'setup-app-edit/:id', component: setup_app_edit_component_1.SetupAppEditComponent },
    { path: 'setup-app-add', component: setup_app_add_component_1.SetupAppAddComponent },
    {
        path: 'setup-app-detail/:id', component: setup_app_detail_component_1.SetupAppDetailComponent,
        children: [
            { path: '', redirectTo: 'overView', pathMatch: 'full' },
            { path: 'overview', component: setup_app_overview_component_1.SetupAppOverviewComponent },
            { path: 'projects', component: setup_app_projects_component_1.SetupAppProjectsComponent }
        ]
    },
    { path: '**', component: notfound_component_1.NotFoundComponent }
];
exports.appRoutes = router_1.RouterModule.forRoot(routing);
//# sourceMappingURL=app.routes.js.map