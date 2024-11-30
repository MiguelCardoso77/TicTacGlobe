import { Component, EventEmitter, Output } from '@angular/core';
import { countries } from '../../data/countries';
import { NgForOf, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-country-searcher',
  imports: [
    NgIf,
    NgForOf,
    FormsModule
  ],
  templateUrl: './country-searcher.component.html',
  styleUrl: './country-searcher.component.css'
})
export class CountrySearcherComponent {
  allCountries = countries;
  searchTerm: string = '';
  searchResults: { id: string; name: string }[] = [];
  @Output() countrySelected = new EventEmitter<any>();

  handleSearch(): void {
    if (this.searchTerm.length >= 3) {
      this.searchResults = this.allCountries.filter((country) =>
        country.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.searchResults = [];
    }
  }

  selectCountry(country: { id: string; name: string }): void {
    this.countrySelected.emit(country);
  }
}
