import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KingDealsComponent } from './king-deals.component';

describe('KingDealsComponent', () => {
  let component: KingDealsComponent;
  let fixture: ComponentFixture<KingDealsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KingDealsComponent]
    });
    fixture = TestBed.createComponent(KingDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
