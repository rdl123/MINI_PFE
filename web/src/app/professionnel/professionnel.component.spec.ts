import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionnelComponent } from './professionnel.component';

describe('ProfessionnelComponent', () => {
  let component: ProfessionnelComponent;
  let fixture: ComponentFixture<ProfessionnelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionnelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
