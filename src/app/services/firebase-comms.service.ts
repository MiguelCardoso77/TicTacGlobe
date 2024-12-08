import { Injectable } from '@angular/core';
import { ref, set, update } from 'firebase/database';
import { db } from '../firebaseConfig';
import { countries } from '../data/countries';
import { promptData } from '../data/promptData';

interface Country {
  name: string;
  flagUrl: string;
  continent: string;
  islandNation?: boolean;
  HDIndex?: number;
  GDPPerCapita?: number;
  size?: number;
}

@Injectable({
  providedIn: 'root'
})
export class FirebaseCommsService {

  createCountries(): void {
    const countriesRef = ref(db, 'countries');

    let counter = 1;
    const countriesToAdd: Record<string, Country> = {};

    countries.forEach((country) => {
      countriesToAdd[counter.toString()] = {
        name: country.name,
        flagUrl: country.flagUrl,
        continent: '',
        islandNation: false,
        HDIndex: 0,
        GDPPerCapita: 0,
        size: 0
      };

      counter++;
    });

    set(countriesRef, countriesToAdd)
      .then(() => {
        console.log('Countries have been successfully added to Firebase!');
      })
      .catch((error) => {
        console.error('Error adding countries:', error);
      });
  }

  updateContinents(): void {
    countries.forEach((country) => {
      let continent: string | undefined;

      if (promptData['inNorthAmerica'].includes(country.name)) {
        continent = 'North America';
      } else if (promptData['inSouthAmerica'].includes(country.name)) {
        continent = 'South America';
      } else if (promptData['inEurope'].includes(country.name)) {
        continent = 'Europe';
      } else if (promptData['inAfrica'].includes(country.name)) {
        continent = 'Africa';
      } else if (promptData['inAsia'].includes(country.name)) {
        continent = 'Asia';
      } else if (promptData['inOceania'].includes(country.name)) {
        continent = 'Oceania';
      }

      if (continent) {
        const countryRef = ref(db, `countries/${country.id}`);
        update(countryRef, {
          continent: continent
        }).then(() => {
          console.log(`Updated ${country.name} to continent ${continent}`);
        }).catch((error) => {
          console.error(`Error updating ${country.name}:`, error);
        });
      }
    });
  }

  logCountries(): void {
    countries.forEach((country) => {
      console.log(`'${country.name}', `);
    });
  }
}
