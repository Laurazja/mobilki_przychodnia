import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdwolanieComponent } from './odwolanie.component';

describe('OdwolanieComponent', () => {
  let component: OdwolanieComponent;
  let fixture: ComponentFixture<OdwolanieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OdwolanieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OdwolanieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
