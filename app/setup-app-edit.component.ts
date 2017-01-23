import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { SetupAppService } from './services/setup-app.service'
@Component({
    selector: 'setup-app-edit-component',
    templateUrl: './app/setup-app-edit.component.html'
})
export class SetupAppEditComponent implements OnInit, OnDestroy {
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

    GotoSetupApps() {
        this.router.navigate(['setupApps']);
    }
    SaveForm() {
        this.setupAppService.Update(this._id, this.setupApp).subscribe(response => {
            if (response) {
                alert('Save success');
                this.router.navigate(['/setupApps']);
            }
        })
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}