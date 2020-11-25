import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyIncidentsMapPage } from './my-incidents-map.page';

describe('MyIncidentsMapPage', () => {
  let component: MyIncidentsMapPage;
  let fixture: ComponentFixture<MyIncidentsMapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyIncidentsMapPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyIncidentsMapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
