import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { EmployeeListComponent } from './employee.component';
import { EmployeeDetailComponent } from './employee-detail.component'
import { NotFoundComponent } from './notfound.component';
import { EmployeeOverviewComponent } from './employee-overview.component'
import { EmployeeProjectsComponent } from './employee-projects.component'
import { LoginComponent } from './login.component';
import { EmployeeEditComponent } from './employee-edit.component';
import { EmployeeAddComponent } from './employee-add.component';
import { SetupAppComponent } from './setup-app.component';
import { SetupAppEditComponent } from './setup-app-edit.component'
import { SetupAppAddComponent } from './setup-app-add.component'
import { SetupAppDetailComponent } from './setup-app-detail.component'
import { SetupAppOverviewComponent} from './setup-app-overview.component'
import { SetupAppProjectsComponent} from './setup-app-projects.component'

const routing: Routes = [
    { path: '', component: HomeComponent },
    { path: 'employees', component: EmployeeListComponent },
    { path: 'employee-edit/:id', component: EmployeeEditComponent },
    { path: 'employee-add', component: EmployeeAddComponent },

    { path: 'login', component: LoginComponent },

    {
        path: 'employee-detail/:id', component: EmployeeDetailComponent,
        children: [
            { path: '', redirectTo: 'overview', pathMatch: 'full' },
            { path: 'overview', component: EmployeeOverviewComponent },
            { path: 'projects', component: EmployeeProjectsComponent }
        ]
    },

    { path: 'setupApps', component: SetupAppComponent },
    { path: 'setup-app-edit/:id', component: SetupAppEditComponent},
    { path: 'setup-app-add', component: SetupAppAddComponent},

    {
        path: 'setup-app-detail/:id', component: SetupAppDetailComponent,
        children: [
            {path: '', redirectTo: 'overView', pathMatch: 'full'},
            { path: 'overview', component: SetupAppOverviewComponent },
            { path: 'projects', component: SetupAppProjectsComponent }
        ]
    },

    { path: '**', component: NotFoundComponent }
]
export const appRoutes = RouterModule.forRoot(routing);