import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from "@angular/router";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { StarRatingModule } from 'angular-star-rating';
import { CakeFormComponent } from './cake-form.component';
import { CakeService } from '../cake.service';

describe('CakeFormComponent', () => {
  let component: CakeFormComponent;
  let fixture: ComponentFixture<CakeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CakeFormComponent ],
      imports: [FormsModule, StarRatingModule, RouterTestingModule, HttpClientTestingModule],
      providers: [CakeService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CakeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
