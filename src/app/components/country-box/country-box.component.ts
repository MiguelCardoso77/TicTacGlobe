import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { countries } from '../../data/countries';
import { NgIf, NgOptimizedImage } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-country-box',
  imports: [
    NgIf,
    NgOptimizedImage
  ],
  templateUrl: './country-box.component.html',
  styleUrl: './country-box.component.css'
})
export class CountryBoxComponent implements OnChanges {
  @Input() countryId: string | null = null;
  countryName: string | undefined;
  flagUrl: string | undefined;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['countryId'] && this.countryId) {
      this.findCountryById();
    }
  }

  findCountryById(): void {
    this.countryId = '1';
    const country = countries.find(country => country.id === this.countryId);
    if (country) {
      console.log(`Country found: ${country.name}`);
      this.countryName = country.name;
      this.flagUrl = country.flagUrl;
    } else {
      console.log(`Country not found`);
      this.countryName = undefined;
      this.flagUrl = undefined;
    }
  }
}
