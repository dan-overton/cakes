import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CakeFormComponent } from './cake-form.component';

describe('CakeFormComponent', () => {
  let component: CakeFormComponent;
  let fixture: ComponentFixture<CakeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CakeFormComponent ]
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
