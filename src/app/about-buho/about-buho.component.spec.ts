import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutBuhoComponent } from './about-buho.component';

describe('AboutBuhoComponent', () => {
  let component: AboutBuhoComponent;
  let fixture: ComponentFixture<AboutBuhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutBuhoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutBuhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});