import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousSpeakerCardComponent } from './previous-speaker-card.component';

describe('PreviousSpeakerCardComponent', () => {
  let component: PreviousSpeakerCardComponent;
  let fixture: ComponentFixture<PreviousSpeakerCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviousSpeakerCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousSpeakerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
