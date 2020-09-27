import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnalSectionComponent } from './personnal-section.component';

describe('PersonnalSectionComponent', () => {
  let component: PersonnalSectionComponent;
  let fixture: ComponentFixture<PersonnalSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonnalSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonnalSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
