import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleSegmentComponent } from './middle-segment.component';

describe('MiddleSegmentComponent', () => {
  let component: MiddleSegmentComponent;
  let fixture: ComponentFixture<MiddleSegmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiddleSegmentComponent]
    });
    fixture = TestBed.createComponent(MiddleSegmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
