import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryBoxComponent } from './country-box.component';

describe('CountryBoxComponent', () => {
  let component: CountryBoxComponent;
  let fixture: ComponentFixture<CountryBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
