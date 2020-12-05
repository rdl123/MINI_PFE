import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SIGComponent } from './sig.component';

describe('SIGComponent', () => {
  let component: SIGComponent;
  let fixture: ComponentFixture<SIGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SIGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SIGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
