import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FdOpenSuccessfullyPage } from './fd-open-successfully.page';

describe('FdOpenSuccessfullyPage', () => {
  let component: FdOpenSuccessfullyPage;
  let fixture: ComponentFixture<FdOpenSuccessfullyPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FdOpenSuccessfullyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FdOpenSuccessfullyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
