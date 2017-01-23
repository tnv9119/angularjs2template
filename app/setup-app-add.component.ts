import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {SetupAppService} from "./services/setup-app.service";
@Component({
    selector: 'setup-app-add-component',
    templateUrl: './app/setup-app-add.component.html'
})
export class SetupAppAddComponent implements OnInit {
    public _id: number;
    public setupApp: any;
    constructor(
        private router: Router, private activatedRoute: ActivatedRoute,
        public setupAppService: SetupAppService
    ) {

    }
    ngOnInit() {
        this.setupApp = {};
    }

    GotoEmployee() {
        this.router.navigate(['setupApps']);
    }
    SaveForm() {
        this.setupAppService.Add(this.setupApp).subscribe(response => {
            if (response) {
                alert('add success');
                this.router.navigate(['/setupApps']);
            }
        })
    }
}