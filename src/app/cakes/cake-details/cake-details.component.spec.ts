import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from "@angular/router";

import { StarRatingModule } from 'angular-star-rating';

import { CakeDetailsComponent } from './cake-details.component';
import { CakeService } from '../cake.service';

describe('CakeDetailsComponent', () => {
  let component: CakeDetailsComponent;
  let fixture: ComponentFixture<CakeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CakeDetailsComponent ],
      imports: [StarRatingModule, RouterTestingModule, HttpClientTestingModule],
      providers: [CakeService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CakeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
