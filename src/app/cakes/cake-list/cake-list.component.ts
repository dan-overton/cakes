import { Component, OnInit } from '@angular/core';
import { Cake } from '../models/cake';
import { CakeService } from '../cake.service';

@Component({
  selector: 'app-cake-list',
  templateUrl: './cake-list.component.html',
  styleUrls: ['./cake-list.component.scss']
})
export class CakeListComponent implements OnInit {
  private _backupUrl = '/assets/images/not-found.png';

  errorMessage = '';
  loading = true;
  cakes: Cake[] = [];

  constructor(private _cakeService: CakeService) { 
    this.replaceMissingImages = this.replaceMissingImages.bind(this);
  }

  ngOnInit() {
    this._cakeService.getCakes().subscribe(
      cakes => {
        this.cakes = cakes.map(this.replaceMissingImages);
        this.loading = false;
      },
      err => {
        this.loading = false;
        this.errorMessage = err;
      }
    );
  }

  replaceMissingImages(cake: Cake) {
    if (!cake.imageUrl) {
      cake.imageUrl = this._backupUrl;
    }
    return cake;
  }

  imageErrorHandler(event) {
    event.target.src = this._backupUrl;
  }
}