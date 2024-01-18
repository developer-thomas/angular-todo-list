import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnDeleteAllComponent } from './btn-delete-all.component';

describe('BtnDeleteAllComponent', () => {
  let component: BtnDeleteAllComponent;
  let fixture: ComponentFixture<BtnDeleteAllComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BtnDeleteAllComponent]
    });
    fixture = TestBed.createComponent(BtnDeleteAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
