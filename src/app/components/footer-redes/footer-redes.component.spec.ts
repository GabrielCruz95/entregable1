import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterRedesComponent } from './footer-redes.component';

describe('FooterRedesComponent', () => {
  let component: FooterRedesComponent;
  let fixture: ComponentFixture<FooterRedesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterRedesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterRedesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
