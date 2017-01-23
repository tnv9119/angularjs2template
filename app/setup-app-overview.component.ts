import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
    selector: 'setup-app-overview-component',
    template: `
    <h3>Overview setup app</h3>
    `
})
export class SetupAppOverviewComponent implements OnInit, OnDestroy {
    public parentRouterId: number;
    public sub: Subscription;
    constructor(private router: Router, private activatedRoute: ActivatedRoute) {

    }
    ngOnInit() {
        this.sub = this.activatedRoute.parent.params.subscribe(params => {
            this.parentRouterId = params['id'];
            alert('child get id: ' + this.parentRouterId);
        });
    }
    ngOnDestroy() {

    }

}