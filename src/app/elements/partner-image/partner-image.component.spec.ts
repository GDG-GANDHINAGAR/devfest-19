import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerImageComponent } from './partner-image.component';

describe('PartnerImageComponent', () => {
  let component: PartnerImageComponent;
  let fixture: ComponentFixture<PartnerImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PartnerImageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
