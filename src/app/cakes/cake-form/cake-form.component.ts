import { Component } from '@angular/core';
import { Cake } from '../models/cake';
import { CakeService } from '../cake.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cake-form',
  templateUrl: './cake-form.component.html',
  styleUrls: ['./cake-form.component.css']
})
export class CakeFormComponent {
  model: Cake;
  errorMessage = "";

  constructor(private _cakeService: CakeService, private _router: Router) {
    this.model = new Cake();
  }

  submitForm(form: NgForm) {
    this.errorMessage = "";
    this._cakeService.createCake(this.model)
      .subscribe(() => {
        this._router.navigate(['/']);
      }, 
      error => {
        this.errorMessage = error;
      });
  }
}
