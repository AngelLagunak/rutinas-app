import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DorsalesEspaldaPage } from './dorsales-espalda.page';

describe('DorsalesEspaldaPage', () => {
  let component: DorsalesEspaldaPage;
  let fixture: ComponentFixture<DorsalesEspaldaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DorsalesEspaldaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DorsalesEspaldaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
