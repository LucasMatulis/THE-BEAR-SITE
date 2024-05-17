import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardapioHomeComponent } from './cardapio-home.component';

describe('CardapioHomeComponent', () => {
  let component: CardapioHomeComponent;
  let fixture: ComponentFixture<CardapioHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardapioHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardapioHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
