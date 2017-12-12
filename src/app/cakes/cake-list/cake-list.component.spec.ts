import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from "@angular/router";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CakeListComponent } from './cake-list.component';
import { CakeService } from '../cake.service';

describe('CakeListComponent', () => {
  let component: CakeListComponent;
  let fixture: ComponentFixture<CakeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CakeListComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [CakeService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CakeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
