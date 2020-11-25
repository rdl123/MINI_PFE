import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyIncidentsPage } from './my-incidents.page';

describe('MyIncidentsPage', () => {
  let component: MyIncidentsPage;
  let fixture: ComponentFixture<MyIncidentsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyIncidentsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyIncidentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
