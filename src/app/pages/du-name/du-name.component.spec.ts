import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuNameComponent } from './du-name.component';

describe('DuNameComponent', () => {
  let component: DuNameComponent;
  let fixture: ComponentFixture<DuNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DuNameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DuNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
