import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeBlurComponent } from './make-blur-component';

describe('MakeBlurComponent', () => {
  let component: MakeBlurComponent;
  let fixture: ComponentFixture<MakeBlurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MakeBlurComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MakeBlurComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
