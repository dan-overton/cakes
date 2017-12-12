import { Component, OnInit } from '@angular/core';
import { Cake } from '../models/cake';
import { CakeService } from '../cake.service';

@Component({
  selector: 'app-cake-list',
  templateUrl: './cake-list.component.html',
  styleUrls: ['./cake-list.component.css']
})
export class CakeListComponent implements OnInit {
  cakes: Cake[] = [];
  
  constructor(private _cakeService: CakeService) { }

  ngOnInit() {
    this._cakeService.getCakes().subscribe(
      cakes => this.cakes = cakes,
      err => console.log(err)
    );
  }
}
