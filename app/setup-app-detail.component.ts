import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from './services/employee.service'
import { Subscription } from 'rxjs';
import {SetupAppService} from "./services/setup-app.service";
@Component({
    selector: 'setup-app-detail-component',
    templateUrl: './app/setup-app-detail.component.html'
})
export class SetupAppDetailComponent implements OnInit, OnDestroy {
    public _id: number;
    public subscription: Subscription;
    public setupApp: any;
    constructor(
        private router: Router, private activatedRoute: ActivatedRoute,
        public setupAppService: SetupAppService
    ) {

    }
    ngOnInit() {
        this.subscription = this.activatedRoute.params.subscribe(params => {
            this._id = params['id'];
        });

        this.setupAppService.GetSingle(this._id).subscribe((data) => {
            this.setupApp = data;
        });

    }
    GotoEmployee() {
        this.router.navigate(['employees']);
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}