export const promptData: { [key: string]: string[] } = {
  // Flag
  flagHasCoatOfArms: ['Afghanistan', 'Andorra', 'Belize', 'Bermuda', 'Bolivia', 'Costa Rica', 'Croatia',
  'Dominican Republic', 'Ecuador', 'Egypt', 'Equatorial Guinea', 'El Salvador', 'Fiji', 'French Polynesia',
  'Guam', 'Guatemala', 'Haiti', 'Jersey', 'Moldova', 'Mexico', 'Montenegro', 'Nicaragua', 'Paraguay', 'Portugal',
  'San Marino', 'Serbia', 'Slovakia', 'Slovenia', 'Spain', 'Sint Maarten', 'United States Virgin Islands',
  'Vatican City'],
  flagHasAnimal: ['Belize', 'Malta', 'Argentina', 'Ecuador', 'Uruguay', 'Brunei', 'Isle of Man', 'British Virgin Islands',
  'Montserrat', 'Saint Helena, Ascension and Tristan da Cunha', 'Bolivia', 'Christmas Island', 'Dominica', 'Fiji',
  'Guatemala', 'Kiribati', 'Papua New Guinea', 'Sint Maarten', 'Uganda', 'Zimbabwe', 'Albania', 'Egypt', 'Kazakhstan',
  'Mexico', 'Moldova', 'Montenegro', 'Serbia', 'United States Virgin Islands', 'Zambia', 'Andorra', 'Croatia',
  'Falkland Islands', 'Jersey', 'Paraguay', 'Spain', 'Sri Lanka', 'Anguilla'],

  // Geography
  landlocked: ['Afghanistan', 'Andorra', 'Armenia', 'Austria', 'Azerbaijan', 'Belarus', 'Bhutan', 'Bolivia', 'Botswana',
  'Burkina Faso', 'Burundi', 'Central African Republic', 'Chad', 'Czech Republic', 'Eswatini', 'Ethiopia', 'Hungary',
  'Kazakhstan', 'Kosovo','Kyrgyzstan', 'Laos', 'Lesotho', 'Liechtenstein', 'Luxembourg', 'Malawi', 'Mali', 'Moldova',
  'Mongolia', 'Nepal', 'Niger', 'North Macedonia', 'Paraguay', 'Rwanda', 'San Marino', 'Serbia', 'Slovakia', 'South Sudan',
  'Switzerland', 'Tajikistan', 'Turkmenistan', 'Uganda', 'Uzbekistan', 'Vatican City', 'Zambia', 'Zimbabwe'],
  touchesEurasianSteppe: ['Hungary', 'Bulgaria', 'Romania', 'Moldova', 'Ukraine', 'Russia', 'Kazakhstan', 'China'],
  touchesEquator: ['São Tomé and Príncipe', 'Gabon', 'Republic of the Congo', 'Democratic Republic of the Congo', 'Uganda',
  'Kenya', 'Somalia', 'Indonesia', 'Ecuador', 'Colombia', 'Brazil'],
  touchesSaharaDesert: ['Algeria', 'Chad', 'Egypt', 'Libya', 'Mali', 'Mauritania', 'Niger', 'Western Sahara', 'Sudan',
  'Morocco', 'Tunisia'],

  // Economic
  producesNuclearPower: ['Argentina', 'Armenia', 'Bangladesh', 'Belarus', 'Belgium', 'Brazil', 'Bulgaria', 'Canada', 'China',
  'Czech Republic', 'Egypt', 'Finland', 'France', 'Hungary', 'India', 'Iran', 'Japan', 'Mexico', 'Netherlands', 'Pakistan',
  'Romania', 'Russia', 'Slovakia', 'Slovenia', 'South Africa', 'South Korea', 'Spain', 'Sweden', 'Switzerland', 'Taiwan',
  'Turkey', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States of America'],
  top20InWheatProduction: ['China', 'India', 'Russia', 'United States of America', 'France', 'Canada', 'Germany', 'Australia',
  'Pakistan', 'Argentina', 'Ukraine', 'Turkey', 'Kazakhstan', 'United Kingdom', 'Poland', 'Brazil', 'Iran', 'Egypt',
  'Romania', 'Ethiopia'],
  top20InOilProduction: ['United States of America', 'Saudi Arabia', 'Russia', 'Canada', 'China', 'Iraq', 'Iran',
  'United Arab Emirates', 'Brazil', 'Kuwait', 'Mexico', 'Kazakhstan', 'Nigeria', 'Norway', 'Qatar', 'Libya',
  'Angola', 'Algeria', 'Oman', 'Venezuela'],

  // Facts
  drivesOnTheLeft: ['Antigua and Barbuda', 'Australia', 'Bahamas', 'Bangladesh', 'Barbados', 'Bhutan', 'Botswana',
  'Brunei', 'Hong Kong', 'Macau', 'Cyprus', 'Dominica', 'Timor-Leste', 'Eswatini', 'Fiji', 'Grenada', 'Guyana', 'India',
  'Indonesia', 'Ireland', 'Jamaica', 'Japan', 'Kenya', 'Kiribati', 'Lesotho', 'Malawi', 'Malaysia', 'Maldives', 'Malta',
  'Mauritius', 'Mozambique', 'Namibia', 'Nauru', 'Nepal', 'New Zealand', 'Pakistan', 'Papua New Guinea', 'Saint Kitts and Nevis',
  'Saint Lucia', 'Saint Vincent and the Grenadines', 'Samoa', 'Seychelles', 'Singapore', 'Solomon Islands', 'South Africa',
  'Sri Lanka', 'Suriname', 'Tanzania', 'Thailand', 'Tonga', 'Trinidad and Tobago', 'Tuvalu', 'Uganda', 'United Kingdom',
  'British Virgin Islands', 'Cayman Islands', 'Falkland Islands', 'Guernsey', 'Isle of Man', 'Jersey', 'Pitcairn Islands',
  'Turks and Caicos Islands', 'United States Virgin Islands', 'Zambia', 'Zimbabwe'],
  top20InObesityRate: ['Nauru', 'Cook Islands', 'Palau', 'Marshall Islands', 'Tuvalu', 'Niue', 'Tonga', 'Samoa', 'Kiribati',
  'Federated States of Micronesia', 'Kuwait', 'United States of America', 'Jordan', 'Saudi Arabia', 'Qatar', 'Libya', 'Turkey',
  'Lebanon', 'Egypt', 'United Arab Emirates'],
  alcoholProhibition: ['Afghanistan', 'Algeria', 'Bangladesh', 'Brunei', 'Canada', 'Chile', 'Comoros', 'Djibouti', 'Egypt',
  'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Kuwait', 'Libya', 'Malaysia', 'Maldives', 'Mauritania',
  'Morocco', 'Norway', 'Oman', 'Pakistan', 'Palestine', 'Qatar', 'Saudi Arabia', 'Sudan', 'Somalia', 'Tunisia', 'Turkmenistan',
  'United Kingdom', 'United States of America', 'Yemen', 'United Arab Emirates'],
  top20InAlcoholConsumption: ['Romania', 'Georgia', 'Czech Republic', 'Latvia', 'Germany', 'Uganda', 'Austria', 'Seychelles',
  'Bulgaria', 'Lithuania', 'Ireland', 'Poland', 'Laos', 'Luxembourg', 'Moldova', 'Estonia', 'France', 'Andorra', 'Slovenia',
  'Belarus'],
  top20InNumberOfWorldHeritageSites: ['Italy', 'China', 'Germany', 'France', 'Spain', 'India', 'Mexico', 'United Kingdom',
  'Russia', 'Iran', 'Japan', 'United States of America', 'Brazil', 'Canada', 'Turkey', 'Australia', 'Greece', 'Czech Republic',
  'Poland', 'Portugal'],
  top10InNumberOfLakes: ['Canada', 'Russia', 'Finland', 'United States of America', 'China', 'Sweden', 'Brazil', 'Norway',
  'Argentina', 'Kazakhstan'],

  // Sports
  hasNeverWonAnOlympicMedal: ['American Samoa', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Aruba', 'Bangladesh', 'Belize',
  'Benin', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'British Virgin Islands', 'Brunei', 'Cambodia', 'Cayman Islands',
  'Central African Republic', 'Chad', 'Comoros', 'Republic of the Congo', 'Democratic Republic of the Congo', 'Cook Islands',
  'El Salvador', 'Eswatini', 'Equatorial Guinea', 'Gambia', 'Guam', 'Guinea', 'Guinea-Bissau', 'Honduras', 'Kiribati', 'Laos',
  'Lesotho', 'Liberia', 'Libya', 'Madagascar', 'Malawi', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania',
  'Federated States of Micronesia', 'Monaco', 'Myanmar', 'Nauru', 'Nepal', 'Nicaragua', 'Oman', 'Palau', 'Palestine',
  'Papua New Guinea', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Vincent and the Grenadines', 'São Tomé and Príncipe',
  'Seychelles', 'Sierra Leone', 'Solomon Islands', 'Somalia', 'South Sudan', 'Timor-Leste', 'Tuvalu', 'Vanuatu', 'Yemen'],
  hasHostedTheOlympics: ['Australia', 'Sweden', 'Austria', 'Belgium', 'Brazil', 'Canada', 'China', 'Finland', 'France',
  'Germany', 'Greece', 'Italy', 'Japan', 'Mexico', 'Netherlands', 'Norway', 'Russia', 'South Korea', 'Spain', 'Switzerland',
  'United Kingdom', 'United States of America'],
  hasHostedMensFIFAWorldCup: ['Uruguay', 'Italy', 'France', 'Brazil', 'Switzerland', 'Sweden', 'Chile', 'United Kingdom', 'Mexico',
  'Germany', 'Argentina', 'Spain', 'United States of America', 'Japan', 'South Korea', 'South Africa', 'Russia', 'Qatar'],
  hasPlayedMensFIFAWorldCup: ['United Kingdom', 'Brazil', 'Germany', 'Argentina', 'Italy', 'Mexico', 'France', 'Spain',
  'Uruguay', 'Belgium', 'Serbia', 'Sweden', 'Switzerland', 'Netherlands', 'Russia', 'United States of America', 'South Korea',
  'Poland', 'Hungary', 'Czech Republic', 'Chile', 'Portugal', 'Paraguay', 'Cameroon', 'Austria', 'Romania', 'Japan',
  'Bulgaria', 'Croatia', 'Denmark', 'Colombia', 'Costa Rica', 'Morocco', 'Nigeria', 'Australia', 'Tunisia', 'Saudi Arabia',
  'Iran', 'Peru', 'Ghana', 'Ecuador', 'Algeria', 'Senegal', 'Ireland', 'Ivory Coast', 'South Africa', 'Norway', 'Greece',
  'Honduras', 'Egypt', 'Bolivia', 'Turkey', 'Slovenia', 'North Korea', 'New Zealand', 'Canada', 'El Salvador', 'Ukraine',
  'Slovakia', 'Cuba', 'Bosnia and Herzegovina', 'Jamaica', 'Angola', 'Israel', 'Iceland', 'Kuwait', 'Trinidad and Tobago',
  'Iraq', 'Togo', 'Qatar', 'Indonesia', 'Panama', 'United Arab Emirates', 'China', 'Haiti', 'Democratic Republic of the Congo'],
  hasWonMensFIFAWorldCup: ['Brazil', 'Germany', 'Italy', 'Argentina', 'France', 'Uruguay', 'United Kingdom', 'Spain'],
  hasHostedFormula1GrandPrix: ['Argentina', 'Australia', 'Austria', 'Azerbaijan', 'Bahrain', 'Belgium', 'Brazil', 'Canada',
  'China', 'France', 'Germany', 'Hungary', 'India', 'Italy', 'Japan', 'Malaysia', 'Mexico', 'Monaco', 'Netherlands',
  'Portugal', 'Qatar', 'Russia', 'Saudi Arabia', 'Singapore', 'South Africa', 'South Korea', 'Spain', 'Sweden', 'Switzerland',
  'Turkey', 'United Arab Emirates', 'United Kingdom', 'United States of America'],

  // Political
  memberOfEuropeanUnion: ['Austria', 'Belgium', 'Bulgaria', 'Croatia', 'Cyprus', 'Czech Republic', 'Denmark', 'Estonia',
  'Finland', 'France', 'Germany', 'Greece', 'Hungary', 'Ireland', 'Italy', 'Latvia', 'Lithuania', 'Luxembourg', 'Malta',
  'Netherlands', 'Poland', 'Portugal', 'Romania', 'Slovakia', 'Slovenia', 'Spain', 'Sweden'],
  memberOfCommonwealthOfNations: ['Antigua and Barbuda', 'Australia', 'Bahamas', 'Bangladesh', 'Barbados', 'Belize', 'Botswana',
  'Brunei', 'Cameroon', 'Canada', 'Cyprus', 'Dominica', 'Eswatini', 'Fiji', 'Gabon', 'Gambia', 'Ghana', 'Grenada', 'Guyana',
  'India', 'Jamaica', 'Kenya', 'Kiribati', 'Lesotho', 'Malawi', 'Malaysia', 'Maldives', 'Malta', 'Mauritius', 'Mozambique',
  'Namibia', 'Nauru', 'New Zealand', 'Nigeria', 'Pakistan', 'Papua New Guinea', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia',
  'Saint Vincent and the Grenadines', 'Samoa', 'Seychelles', 'Sierra Leone', 'Singapore', 'Solomon Islands', 'South Africa',
  'Sri Lanka', 'Tanzania', 'Togo','Tonga', 'Trinidad and Tobago', 'Tuvalu', 'Uganda', 'United Kingdom', 'Vanuatu', 'Zambia'],
  wasPartOfTheUSSR: ['Kazakhstan', 'Kyrgyzstan', 'Tajikistan', 'Turkmenistan', 'Uzbekistan', 'Belarus', 'Moldova', 'Russia',
  'Ukraine', 'Estonia', 'Latvia', 'Lithuania', 'Armenia', 'Azerbaijan', 'Georgia'],
  hasNuclearWeapons: ['United States of America', 'Russia', 'United Kingdom', 'France', 'China', 'Pakistan', 'India',
  'North Korea', 'Israel'],
  hasMoreThan1Timezone: ['France', 'Russia', 'United States of America', 'Australia', 'United Kingdom', 'Canada', 'Denmark',
  'New Zealand', 'Brazil', 'Mexico', 'Chile', 'Indonesia', 'Kiribati', 'Democratic Republic of the Congo', 'Ecuador',
  'Federated States of Micronesia', 'Netherlands', 'Mongolia', 'Papua New Guinea', 'Portugal', 'South Africa', 'Spain'],
}
