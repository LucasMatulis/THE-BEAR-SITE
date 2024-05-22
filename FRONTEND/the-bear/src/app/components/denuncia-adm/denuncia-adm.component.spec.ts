import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DenunciaAdmComponent } from './denuncia-adm.component';

describe('DenunciaAdmComponent', () => {
  let component: DenunciaAdmComponent;
  let fixture: ComponentFixture<DenunciaAdmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DenunciaAdmComponent]
    });
    fixture = TestBed.createComponent(DenunciaAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
