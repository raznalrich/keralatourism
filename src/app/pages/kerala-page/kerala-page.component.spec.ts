import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeralaPageComponent } from './kerala-page.component';

describe('KeralaPageComponent', () => {
  let component: KeralaPageComponent;
  let fixture: ComponentFixture<KeralaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeralaPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeralaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
