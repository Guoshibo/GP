import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LifePage } from './life.page';

describe('LifePage', () => {
  let component: LifePage;
  let fixture: ComponentFixture<LifePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LifePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
