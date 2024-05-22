import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackAdmComponent } from './feedback-adm.component';

describe('FeedbackAdmComponent', () => {
  let component: FeedbackAdmComponent;
  let fixture: ComponentFixture<FeedbackAdmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeedbackAdmComponent]
    });
    fixture = TestBed.createComponent(FeedbackAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
