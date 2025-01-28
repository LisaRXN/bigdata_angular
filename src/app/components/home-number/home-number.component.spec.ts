import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNumberComponent } from './home-number.component';

describe('HomeNumberComponent', () => {
  let component: HomeNumberComponent;
  let fixture: ComponentFixture<HomeNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeNumberComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
