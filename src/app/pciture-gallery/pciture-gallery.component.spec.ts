import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcitureGalleryComponent } from './pciture-gallery.component';

describe('PcitureGalleryComponent', () => {
  let component: PcitureGalleryComponent;
  let fixture: ComponentFixture<PcitureGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PcitureGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PcitureGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
