import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomSlideContentComponent } from './bottom-slide-content.component';

describe('BottomSlideContentComponent', () => {
  let component: BottomSlideContentComponent;
  let fixture: ComponentFixture<BottomSlideContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomSlideContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomSlideContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
