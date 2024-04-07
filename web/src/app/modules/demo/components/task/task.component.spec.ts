import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudComponent } from './task.component';

describe('DemoComponent', () => {
  let component: CrudComponent;
  let fixture: ComponentFixture<CrudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrudComponent]
    });
    fixture = TestBed.createComponent(CrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
