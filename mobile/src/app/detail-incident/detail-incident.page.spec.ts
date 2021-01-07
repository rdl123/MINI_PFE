import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailIncidentPage } from './detail-incident.page';

describe('DetailIncidentPage', () => {
  let component: DetailIncidentPage;
  let fixture: ComponentFixture<DetailIncidentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailIncidentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailIncidentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
