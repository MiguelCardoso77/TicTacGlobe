import { Injectable } from '@angular/core';
import { ref, set, onValue } from 'firebase/database';
import { db } from '../firebaseConfig';
import { countries } from '../data/countries';

interface Country {
  id: string;
  name: string;
  flagUrl?: string;
  continent?: string;
}

@Injectable({
  providedIn: 'root'
})
export class FirebaseCommsService {
  logCountries(): void {
    const countriesRef = ref(db, 'countries');

    onValue(countriesRef, (snapshot) => {
      const countriesData = snapshot.val() as Record<string, Country>;

      if (countriesData) {
        // Group countries by continent
        const continentsMap: Record<string, Country[]> = {};

        Object.values(countriesData).forEach((country) => {
          if (country.continent) {
            if (!continentsMap[country.continent]) {
              continentsMap[country.continent] = [];
            }
            continentsMap[country.continent].push(country);
          }
        });

        let southAmerica = '';
        let africa = '';
        let europe = '';
        let asia = '';
        let oceania = '';
        let northAmerica = '';

        // Print countries grouped by continent
        console.log('Countries grouped by continent:');
        Object.entries(continentsMap).forEach(([continent, countries]) => {
          countries.forEach((country) => {
            const countryName = `'${country.name}'`;
            switch (continent) {
              case 'South America':
                southAmerica += `${countryName}, `;
                break;
              case 'Africa':
                africa += `${countryName}, `;
                break;
              case 'Europe':
                europe += `${countryName}, `;
                break;
              case 'Asia':
                asia += `${countryName}, `;
                break;
              case 'Oceania':
                oceania += `${countryName}, `;
                break;
              case 'North America':
                northAmerica += `${countryName}, `;
                break;
            }
          });
        });

        // Print all continent strings
        console.log('South America:', southAmerica);
        console.log('Africa:', africa);
        console.log('Europe:', europe);
        console.log('Asia:', asia);
        console.log('Oceania:', oceania);
        console.log('North America:', northAmerica);

      } else {
        console.log('No data found in countries node.');
      }
    });
  }
}
