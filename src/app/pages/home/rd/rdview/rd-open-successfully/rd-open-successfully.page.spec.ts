import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RdOpenSuccessfullyPage } from './rd-open-successfully.page';

describe('RdOpenSuccessfullyPage', () => {
  let component: RdOpenSuccessfullyPage;
  let fixture: ComponentFixture<RdOpenSuccessfullyPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RdOpenSuccessfullyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RdOpenSuccessfullyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
