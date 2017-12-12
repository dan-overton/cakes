import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { StarRatingModule } from 'angular-star-rating';

import { AppComponent } from './app.component';

import { CakeService } from './cakes/cake.service';
import { CakeListComponent } from './cakes/cake-list/cake-list.component';
import { CakeFormComponent } from './cakes/cake-form/cake-form.component';
import { CakeDetailsComponent } from './cakes/cake-details/cake-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CakeListComponent,
    CakeFormComponent,
    CakeDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'cake/:id', component: CakeDetailsComponent},
      { path: '', component: CakeListComponent},
      { path: 'new', component: CakeFormComponent},
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ]),
    StarRatingModule.forRoot()
  ],
  providers: [CakeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
