import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms'
import {EmployeeListComponent} from './employee.component'
import {HomeComponent} from './home.component';
import {EmployeeService} from './services/employee.service';
import {HttpModule} from '@angular/http';
import {appRoutes} from './app.routes';
import {NotFoundComponent} from './notfound.component';
import {EmployeeDetailComponent} from './employee-detail.component'
import {EmployeeOverviewComponent} from './employee-overview.component'
import {EmployeeProjectsComponent} from './employee-projects.component'
import {LoginComponent} from './login.component'
import {LoginService} from './services/login.service';
import {CheckLoginGuard} from './guards/check-login.guard';
import {CheckSaveFormGuard} from './guards/check-save-form.guard';
import {EmployeeEditComponent} from './employee-edit.component'
import {EmployeeAddComponent} from './employee-add.component'
import {SetupAppComponent} from "./setup-app.component";
import {SetupAppService} from "./services/setup-app.service";
import {SetupAppEditComponent} from "./setup-app-edit.component";
import {SetupAppAddComponent} from "./setup-app-add.component";
import {SetupAppDetailComponent} from "./setup-app-detail.component";
import {SetupAppOverviewComponent} from "./setup-app-overview.component";
import {SetupAppProjectsComponent} from "./setup-app-projects.component";

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, appRoutes],
    declarations: [
        AppComponent,
        EmployeeListComponent,
        HomeComponent,
        NotFoundComponent,
        EmployeeProjectsComponent,
        EmployeeOverviewComponent,
        EmployeeDetailComponent,
        LoginComponent,
        EmployeeEditComponent,
        EmployeeAddComponent,

        SetupAppComponent,
        SetupAppEditComponent,
        SetupAppAddComponent,
        SetupAppDetailComponent,
        SetupAppOverviewComponent,
        SetupAppProjectsComponent

    ],
    providers: [EmployeeService, LoginService, CheckLoginGuard, CheckSaveFormGuard, SetupAppService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
