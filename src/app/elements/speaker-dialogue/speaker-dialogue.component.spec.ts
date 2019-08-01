import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakerDialogueComponent } from './speaker-dialogue.component';

describe('SpeakerDialogueComponent', () => {
  let component: SpeakerDialogueComponent;
  let fixture: ComponentFixture<SpeakerDialogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeakerDialogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakerDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
