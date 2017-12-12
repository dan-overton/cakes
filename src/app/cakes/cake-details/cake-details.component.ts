import { Component, OnInit } from '@angular/core';
import { Cake } from '../models/cake';
import { ActivatedRoute, Router } from '@angular/router';
import { CakeService } from '../cake.service';

@Component({
  selector: 'app-cake-details',
  templateUrl: './cake-details.component.html',
  styleUrls: ['./cake-details.component.scss']
})
export class CakeDetailsComponent implements OnInit {

  cake: Cake;
  loading = true;
  errorMessage = "";

  constructor(
    private _route: ActivatedRoute,
    private _cakeService: CakeService,
    private _router: Router) { }

  ngOnInit() {
    const id = this._route.snapshot.paramMap.get('id');

    this._cakeService.getCake(id)
      .subscribe(cake => {
        this.cake = cake;
        this.loading = false;
        },
        error => {
          this.errorMessage = error;
          this.loading = false;
        });
  }
}
