import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalSectionComponent } from './professional-section.component';

describe('ProfessionalSectionComponent', () => {
  let component: ProfessionalSectionComponent;
  let fixture: ComponentFixture<ProfessionalSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionalSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
