import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticulosBuhoComponent } from './articulos-buho.component';

describe('ArticulosBuhoComponent', () => {
  let component: ArticulosBuhoComponent;
  let fixture: ComponentFixture<ArticulosBuhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticulosBuhoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticulosBuhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});