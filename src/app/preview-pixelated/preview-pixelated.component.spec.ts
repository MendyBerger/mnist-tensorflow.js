import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewPixelatedComponent } from './preview-pixelated.component';

describe('PreviewPixelatedComponent', () => {
  let component: PreviewPixelatedComponent;
  let fixture: ComponentFixture<PreviewPixelatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewPixelatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewPixelatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
