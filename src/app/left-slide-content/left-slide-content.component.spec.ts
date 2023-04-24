import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSlideContentComponent } from './left-slide-content.component';

describe('LeftSlideContentComponent', () => {
  let component: LeftSlideContentComponent;
  let fixture: ComponentFixture<LeftSlideContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftSlideContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftSlideContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
