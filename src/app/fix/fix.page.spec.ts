import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FixPage } from './fix.page';

describe('FixPage', () => {
  let component: FixPage;
  let fixture: ComponentFixture<FixPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FixPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
