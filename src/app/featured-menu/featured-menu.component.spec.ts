import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedMenuComponent } from './featured-menu.component';

describe('FeaturedMenuComponent', () => {
  let component: FeaturedMenuComponent;
  let fixture: ComponentFixture<FeaturedMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeaturedMenuComponent]
    });
    fixture = TestBed.createComponent(FeaturedMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
