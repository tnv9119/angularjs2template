import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SetupAppService} from "./services/setup-app.service";
@Component({
    selector: 'setup-app-list',
    templateUrl: './app/setup-app.component.html',
})
export class SetupAppComponent implements OnInit {
    public setupApps: any[];
    public pages: number[];
    public currentPage: number;
    public keyword: string;
    constructor(private setupAppService: SetupAppService,
        private router: Router, private activatedRouter: ActivatedRoute
    ) {

    }
    ngOnInit() {
        this.activatedRouter.queryParams.subscribe(params => {
            this.currentPage = params['pageNumber'] || 1;
            console.log(this.currentPage);
            console.log(params['filter']);
        });
        this.LoadData();
        this.pages = [1, 2, 3, 4, 5];
    }
    Search() {
        this.setupAppService.Search(this.keyword).subscribe((response: any) => {
            this.setupApps = response;
            console.log(response);
        }, error => {
            console.log(error);
        });
    }
    Delete(id: number) {
        let confirmResult = confirm("Are you sure to delete setup app?");
        if (confirmResult) {
            this.setupAppService.Delete(id).subscribe(response => {
                if (response) {
                    alert('Delete ok');
                    this.LoadData();
                }
            })
        }
    }
    LoadData() {
        this.setupAppService.GetList().subscribe((response: any) => {
            this.setupApps = response;
            console.log(response);
        }, error => {
            console.log(error);
        });
    }
}