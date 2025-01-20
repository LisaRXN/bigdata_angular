import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleBigComponent } from './title-big.component';

describe('TitleBigComponent', () => {
  let component: TitleBigComponent;
  let fixture: ComponentFixture<TitleBigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleBigComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleBigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
