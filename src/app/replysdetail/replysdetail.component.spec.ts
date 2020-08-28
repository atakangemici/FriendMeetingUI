import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplysdetailComponent } from './replysdetail.component';

describe('ReplysdetailComponent', () => {
  let component: ReplysdetailComponent;
  let fixture: ComponentFixture<ReplysdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReplysdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplysdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
