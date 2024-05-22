import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaCardapioComponent } from './pagina-cardapio.component';

describe('PaginaCardapioComponent', () => {
  let component: PaginaCardapioComponent;
  let fixture: ComponentFixture<PaginaCardapioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaCardapioComponent]
    });
    fixture = TestBed.createComponent(PaginaCardapioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
