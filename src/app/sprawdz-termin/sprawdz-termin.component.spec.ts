import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SprawdzTerminComponent } from './sprawdz-termin.component';

describe('SprawdzTerminComponent', () => {
  let component: SprawdzTerminComponent;
  let fixture: ComponentFixture<SprawdzTerminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SprawdzTerminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SprawdzTerminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
