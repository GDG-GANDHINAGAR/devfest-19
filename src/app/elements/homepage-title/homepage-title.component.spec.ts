import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageTitleComponent } from './homepage-title.component';

describe('HomepageTitleComponent', () => {
  let component: HomepageTitleComponent;
  let fixture: ComponentFixture<HomepageTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
