import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightSlideContentComponent } from './right-slide-content.component';

describe('RightSlideContentComponent', () => {
  let component: RightSlideContentComponent;
  let fixture: ComponentFixture<RightSlideContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightSlideContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightSlideContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
