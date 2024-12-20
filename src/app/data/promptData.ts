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


  // -------------------------------------------------------------------------------------------------------------------
  // -------------------------------------------------Geography---------------------------------------------------------
  // -------------------------------------------------------------------------------------------------------------------
  islandNation: ['Åland', 'American Samoa', 'Anguilla', 'Antigua and Barbuda', 'Aruba', 'Australia', 'Bahamas', 'Bahrain','Barbados',
  'Bermuda', 'Bouvet Island', 'British Indian Ocean Territory', 'British Virgin Islands', 'Cabo Verde', 'Caribbean Netherlands',
  'Cayman Islands', 'Christmas Island', 'Cocos Islands', 'Comoros', 'Cook Islands', 'Cuba', 'Curacao', 'Cyprus', 'Dominica',
  'Falkland Islands', 'Faroe Islands', 'Federated States of Micronesia', 'Fiji', 'French Polynesia', 'French Southern Territories',
  'Greenland', 'Grenada', 'Guadeloupe', 'Guam', 'Guernsey', 'Heard Island and McDonald Islands', 'Iceland', 'Isle of Man',
  'Jamaica', 'Japan','Jersey', 'Kiribati', 'Madagascar', 'Maldives', 'Malta', 'Martinique', 'Marshall Islands', 'Mauritius', 'Mayotte',
  'Montserrat', 'Nauru', 'New Caledonia', 'New Zealand', 'Niue', 'Norfolk Island', 'Northern Mariana Islands', 'Palau',
  'Philippines', 'Pitcairn Islands', 'Puerto Rico', 'Réunion', 'Saint Barthelemy', 'Saint Helena, Ascension and Tristan da Cunha',
  'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Martin', 'Saint Pierre and Miquelon', 'Saint Vincent and the Grenadines',
  'Samoa', 'São Tomé and Príncipe', 'Seychelles', 'Singapore', 'Sint Maarten', 'Solomon Islands', 'South Georgia and the South Sandwich Islands',
  'Sri Lanka', 'Svalbard and Jan Mayen', 'Taiwan', 'Tokelau', 'Tonga', 'Trinidad and Tobago', 'Turks and Caicos Islands',
  'Tuvalu', 'United States Virgin Islands', 'Vanuatu', 'Wallis and Futuna'],
  landlocked: ['Afghanistan', 'Andorra', 'Armenia', 'Austria', 'Azerbaijan', 'Belarus', 'Bhutan', 'Bolivia', 'Botswana',
  'Burkina Faso', 'Burundi', 'Central African Republic', 'Chad', 'Czech Republic', 'Eswatini', 'Ethiopia', 'Hungary',
  'Kazakhstan', 'Kosovo','Kyrgyzstan', 'Laos', 'Lesotho', 'Liechtenstein', 'Luxembourg', 'Malawi', 'Mali', 'Moldova',
  'Mongolia', 'Nepal', 'Niger', 'North Macedonia', 'Paraguay', 'Rwanda', 'San Marino', 'Serbia', 'Slovakia', 'South Sudan',
  'Switzerland', 'Tajikistan', 'Turkmenistan', 'Uganda', 'Uzbekistan', 'Vatican City', 'Zambia', 'Zimbabwe'],

  top20CoastlineLength: ['Canada', 'Norway', 'Indonesia', 'Greenland', 'Russia', 'Philippines', 'Japan', 'Australia',
  'United States of America', 'New Zealand', 'China', 'Greece', 'United Kingdom', 'Mexico', 'Italy', 'Brazil', 'Denmark',
  'Turkey', 'India', 'Chile'],

  nileRiverRunsThrough: ['Egypt', 'Sudan', 'South Sudan', 'Uganda', 'Ethiopia'],
  amazonRiverRunsThrough: ['Brazil', 'Peru', 'Bolivia', 'Colombia', 'Ecuador', 'Venezuela', 'Guyana'],
  danubeRiverRunsThrough: ['Germany', 'Austria', 'Slovakia', 'Hungary', 'Croatia', 'Serbia', 'Bulgaria', 'Romania', 'Moldova',
  'Ukraine'],

  inNorthAmerica: ['Anguilla', 'Antigua and Barbuda', 'Bahamas', 'Barbados', 'Belize', 'Bermuda', 'British Virgin Islands',
  'Canada', 'Caribbean Netherlands', 'Cayman Islands', 'Costa Rica', 'Cuba', 'Dominica', 'Dominican Republic', 'El Salvador',
  'Greenland', 'Grenada', 'Guadeloupe', 'Guatemala', 'Haiti', 'Honduras', 'Jamaica', 'Martinique', 'Mexico', 'Montserrat',
  'Nicaragua', 'Panama', 'Puerto Rico', 'Saint Barthelemy', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Martin',
  'Saint Pierre and Miquelon', 'Saint Vincent and the Grenadines', 'Sint Maarten', 'Turks and Caicos Islands', 'United States of America',
  'United States Virgin Islands'],
  inSouthAmerica: ['Argentina', 'Aruba', 'Bolivia', 'Brazil', 'Chile', 'Colombia', 'Curacao', 'Ecuador', 'Falkland Islands',
  'French Guiana', 'Guyana', 'Paraguay', 'Peru', 'South Georgia and the South Sandwich Islands', 'Suriname', 'Trinidad and Tobago',
  'Uruguay', 'Venezuela'],
  inEurope: ['Åland', 'Albania', 'Andorra', 'Austria', 'Belarus', 'Belgium', 'Bosnia and Herzegovina', 'Bouvet Island', 'Bulgaria',
  'Croatia', 'Cyprus', 'Czech Republic', 'Denmark', 'Estonia', 'Faroe Islands', 'Finland', 'France', 'Germany', 'Gibraltar', 'Greece',
  'Guernsey', 'Hungary', 'Iceland', 'Ireland', 'Isle of Man', 'Italy', 'Jersey', 'Kosovo', 'Latvia', 'Liechtenstein', 'Lithuania',
  'Luxembourg', 'Malta', 'Moldova', 'Monaco', 'Montenegro', 'Netherlands', 'North Macedonia', 'Norway', 'Poland', 'Portugal',
  'Romania', 'San Marino', 'Serbia', 'Slovakia', 'Slovenia', 'Spain', 'Svalbard and Jan Mayen', 'Sweden', 'Switzerland', 'Ukraine',
  'United Kingdom', 'Vatican City'],
  inAfrica: ['Algeria', 'Angola', 'Benin', 'Botswana', 'Burkina Faso', 'Burundi', 'Cabo Verde', 'Cameroon', 'Central African Republic',
  'Chad', 'Comoros', 'Democratic Republic of the Congo', 'Djibouti', 'Egypt', 'Equatorial Guinea', 'Eritrea', 'Eswatini', 'Ethiopia',
  'French Southern Territories', 'Gabon', 'Gambia', 'Ghana', 'Guinea', 'Guinea-Bissau', 'Ivory Coast', 'Kenya', 'Lesotho',
  'Liberia', 'Libya', 'Madagascar', 'Malawi', 'Mali', 'Mauritania', 'Mauritius', 'Mayotte', 'Morocco', 'Mozambique', 'Namibia',
  'Niger', 'Nigeria', 'Republic of the Congo', 'Réunion', 'Rwanda', 'Saint Helena, Ascension and Tristan da Cunha', 'São Tomé and Príncipe',
  'Senegal', 'Seychelles', 'Sierra Leone', 'Somalia', 'South Africa', 'South Sudan', 'Sudan', 'Tanzania', 'Togo', 'Tunisia', 'Uganda',
  'Western Sahara', 'Zambia', 'Zimbabwe'],
  inAsia: ['Afghanistan', 'Armenia', 'Azerbaijan', 'Bahrain', 'Bangladesh', 'Bhutan', 'British Indian Ocean Territory', 'Brunei',
  'Cambodia', 'China', 'Christmas Island', 'Cocos Islands', 'Georgia', 'Hong Kong', 'India', 'Indonesia', 'Iran', 'Iraq',
  'Israel', 'Japan', 'Jordan', 'Kazakhstan', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Lebanon', 'Macau', 'Malaysia', 'Maldives',
  'Mongolia', 'Myanmar', 'North Korea', 'Nepal', 'Oman', 'Pakistan', 'Palestine', 'Philippines', 'Qatar', 'Russia', 'Saudi Arabia',
  'Singapore', 'Sri Lanka', 'Syria', 'South Korea', 'Taiwan', 'Tajikistan', 'Thailand', 'Timor-Leste', 'Turkey', 'Turkmenistan',
  'United Arab Emirates', 'Uzbekistan', 'Vietnam', 'Yemen'],
  inOceania: ['American Samoa', 'Australia', 'Cook Islands', 'Federated States of Micronesia', 'Fiji', 'French Polynesia',
  'Guam', 'Heard Island and McDonald Islands', 'Kiribati', 'Marshall Islands', 'Nauru', 'New Caledonia', 'New Zealand', 'Niue',
  'Norfolk Island', 'Northern Mariana Islands', 'Palau', 'Papua New Guinea', 'Pitcairn Islands', 'Samoa', 'Solomon Islands',
  'Tokelau', 'Tonga', 'Tuvalu', 'Vanuatu', 'Wallis and Futuna'],

  touchesEurasianSteppe: ['Hungary', 'Bulgaria', 'Romania', 'Moldova', 'Ukraine', 'Russia', 'Kazakhstan', 'China'],
  touchesEquator: ['São Tomé and Príncipe', 'Gabon', 'Republic of the Congo', 'Democratic Republic of the Congo', 'Uganda',
  'Kenya', 'Somalia', 'Indonesia', 'Ecuador', 'Colombia', 'Brazil'],
  touchesSaharaDesert: ['Algeria', 'Chad', 'Egypt', 'Libya', 'Mali', 'Mauritania', 'Niger', 'Western Sahara', 'Sudan',
  'Morocco', 'Tunisia'],
  // -------------------------------------------------------------------------------------------------------------------
  // -------------------------------------------------Geography---------------------------------------------------------
  // -------------------------------------------------------------------------------------------------------------------

  // -------------------------------------------------------------------------------------------------------------------
  // --------------------------------------------------Economic---------------------------------------------------------
  // -------------------------------------------------------------------------------------------------------------------
  humanDevelopmentIndexOver95: ['Switzerland', 'Norway', 'Iceland','Hong Kong', 'Denmark', 'Sweden', 'Germany',
  'Ireland', 'Singapore', 'Australia', 'Netherlands'],
  humanDevelopmentIndexOver90: ['Switzerland', 'Norway', 'Iceland','Hong Kong', 'Denmark', 'Sweden', 'Germany',
  'Ireland', 'Singapore', 'Australia', 'Netherlands', 'Belgium', 'Finland', 'Liechtenstein', 'New Zealand', 'United Kingdom',
  'United Arab Emirates', 'Canada', 'South Korea', 'United States of America', 'Luxembourg', 'Austria', 'Slovenia', 'Japan',
  'Israel', 'Malta', 'Spain', 'France', 'Cyprus', 'Italy', 'Estonia', 'Czech Republic'],

  humanDevelopmentIndexUnder45: ['Burkina Faso', 'Yemen', 'Burundi', 'Mali', 'Chad', 'Niger', 'Central African Republic',
  'South Sudan', 'Somalia'],
  humanDevelopmentIndexUnder40: ['Chad', 'Niger', 'Central African Republic', 'South Sudan', 'Somalia'],

  gdpPerCapitaOver90K: ['Luxembourg', 'Singapore', 'Monaco', 'Ireland', 'Qatar', 'Macau', 'Bermuda', 'Norway'],
  gdpPerCapitaOver75K: ['Luxembourg', 'Singapore', 'Monaco', 'Ireland', 'Qatar', 'Macau', 'Bermuda', 'Norway', 'Isle of Man',
  'Switzerland', 'Cayman Islands', 'Brunei', 'United Arab Emirates'],
  gdpPerCapitaOver65K: ['Luxembourg', 'Singapore', 'Monaco', 'Ireland', 'Qatar', 'Macau', 'Bermuda', 'Norway', 'Isle of Man',
  'Switzerland', 'Cayman Islands', 'Brunei', 'United Arab Emirates', 'United States of America', 'Denmark', 'Faroe Islands',
  'Falkland Islands', 'Netherlands', 'Greenland', 'Iceland', 'San Marino'],

  gdpPerCapitaUnder7K: ['Ivory Coast', 'Marshall Islands', 'Ghana', 'Tonga', 'Honduras', 'Djibouti', 'Kyrgyzstan', 'Mauritania',
  'Republic of the Congo', 'Tokelau', 'Samoa', 'Kenya', 'Nigeria', 'Pakistan', 'São Tomé and Príncipe', 'Tuvalu', 'Cambodia',
  'Cameroon', 'Nepal', 'Tajikistan', 'Timor-Leste', 'Senegal', 'Papua New Guinea', 'Guinea', 'Benin', 'Federal States of Micronesia',
  'Zambia', 'Tanzania', 'Zimbabwe', 'Comoros', 'Kiribati', 'Vanuatu', 'Rwanda', 'Haiti', 'Gambia', 'Syria', 'Ethiopia', 'Sudan',
  'Uganda', 'Togo', 'Solomon Islands', 'Lesotho', 'Yemen', 'Burkina Faso', 'Mali', 'Guinea-Bissau', 'Afghanistan', 'Chad',
  'Malawi', 'North Korea', 'Madagascar', 'Sierra Leone', 'Liberia', 'South Sudan', 'Eritrea', 'Niger', 'Mozambique',
  'Democratic Republic of the Congo', 'Somalia', 'Central African Republic', 'Burundi'],
  gdpPerCapitaUnder5K: ['Cameroon', 'Nepal', 'Tajikistan', 'Timor-Leste', 'Senegal', 'Papua New Guinea', 'Guinea', 'Benin', 'Federal States of Micronesia',
  'Zambia', 'Tanzania', 'Zimbabwe', 'Comoros', 'Kiribati', 'Vanuatu', 'Rwanda', 'Haiti', 'Gambia', 'Syria', 'Ethiopia', 'Sudan',
  'Uganda', 'Togo', 'Solomon Islands', 'Lesotho', 'Yemen', 'Burkina Faso', 'Mali', 'Guinea-Bissau', 'Afghanistan', 'Chad',
  'Malawi', 'North Korea', 'Madagascar', 'Sierra Leone', 'Liberia', 'South Sudan', 'Eritrea', 'Niger', 'Mozambique',
  'Democratic Republic of the Congo', 'Somalia', 'Central African Republic', 'Burundi'],
  gdpPerCapitaUnder3K: ['Vanuatu', 'Rwanda', 'Haiti', 'Gambia', 'Syria', 'Ethiopia', 'Sudan',
  'Uganda', 'Togo', 'Solomon Islands', 'Lesotho', 'Yemen', 'Burkina Faso', 'Mali', 'Guinea-Bissau', 'Afghanistan', 'Chad',
  'Malawi', 'North Korea', 'Madagascar', 'Sierra Leone', 'Liberia', 'South Sudan', 'Eritrea', 'Niger', 'Mozambique',
  'Democratic Republic of the Congo', 'Somalia', 'Central African Republic', 'Burundi'],

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
  top20InRenewableEnergyProduction: ['China', 'United States of America', 'Brazil', 'Canada', 'India', 'Germany', 'Russia',
  'Japan', 'Norway', 'Spain', 'France', 'United Kingdom', 'Turkey', 'Italy', 'Sweden', 'Vietnam', 'Mexico', 'Australia',
  'Colombia', 'Venezuela'],
  // -------------------------------------------------------------------------------------------------------------------
  // --------------------------------------------------Economic---------------------------------------------------------
  // -------------------------------------------------------------------------------------------------------------------

  // -------------------------------------------------------------------------------------------------------------------
  // -----------------------------------------------------Name----------------------------------------------------------
  // -------------------------------------------------------------------------------------------------------------------
  startsWithA: ['Afghanistan', 'Albania', 'Algeria', 'American Samoa', 'Andorra', 'Angola', 'Anguilla', 'Antigua and Barbuda',
  'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Åland'],
  startsWithB: ['Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan',
  'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Bouvet Island', 'Brazil', 'British Indian Ocean Territory', 'British Virgin Islands',
  'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi'],
  startsWithC: ['Cabo Verde', 'Cambodia', 'Cameroon', 'Canada', 'Cayman Islands', 'Central African Republic', 'Chad', 'Chile',
  'China', 'Christmas Island', 'Cocos Islands', 'Colombia', 'Cook Islands', 'Costa Rica', 'Comoros','Croatia', 'Cuba', 'Curacao',
  'Cyprus', 'Czech Republic', 'Caribbean Netherlands'],
  startsWithD: ['Democratic Republic of the Congo', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic'],
  startsWithE: ['Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Eswatini', 'Ethiopia'],
  startsWithF: ['Falkland Islands', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'French Polynesia', 'French Southern Territories',
  'Federated States of Micronesia', 'French Guiana'],
  startsWithG: ['Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guam',
  'Guatemala', 'Guernsey', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Guadeloupe'],
  startsWithH: ['Haiti', 'Heard Island and McDonald Islands', 'Honduras', 'Hong Kong', 'Hungary'],
  startsWithI: ['Ivory Coast', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy'],
  startsWithJ: ['Jamaica', 'Japan', 'Jersey', 'Jordan'],
  startsWithK: ['Kazakhstan', 'Kenya', 'Kiribati', 'Kosovo', 'Kuwait', 'Kyrgyzstan'],
  startsWithL: ['Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg'],
  startsWithM: ['Macau', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania',
  'Mauritius', 'Mexico', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Myanmar',
  'Martinique', 'Mayotte'],
  startsWithN: ['North Korea', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger',
  'Nigeria', 'Niue', 'Norfolk Island', 'North Macedonia', 'Northern Mariana Islands', 'Norway'],
  startsWithO: ['Oman'],
  startsWithP: ['Pakistan', 'Palau', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Pitcairn Islands',
  'Poland', 'Portugal', 'Puerto Rico'],
  startsWithQ: ['Qatar'],
  startsWithR: ['Republic of the Congo', 'Romania', 'Russia', 'Rwanda', 'Réunion'],
  startsWithS: ['Saint Barthelemy', 'Saint Helena, Ascension and Tristan da Cunha', 'Saint Kitts and Nevis', 'Saint Lucia',
  'Saint Martin', 'Saint Pierre and Miquelon', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'São Tomé and Príncipe',
  'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Sint Maarten', 'Slovakia', 'Slovenia',
  'Solomon Islands', 'Somalia', 'South Africa', 'South Georgia and the South Sandwich Islands', 'South Sudan', 'Spain',
  'Sri Lanka', 'Sudan', 'Suriname', 'Svalbard and Jan Mayen', 'Sweden', 'Switzerland', 'Syria', 'South Korea'],
  startsWithT: ['Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Timor-Leste', 'Togo', 'Tokelau', 'Tonga', 'Trinidad and Tobago',
  'Tunisia', 'Turkey', 'Turkmenistan', 'Turks and Caicos Islands', 'Tuvalu'],
  startsWithU: ['Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States of America', 'United States Virgin Islands',
  'Uruguay', 'Uzbekistan'],
  startsWithV: ['Vanuatu', 'Vatican City', 'Venezuela', 'Vietnam'],
  startsWithW: ['Wallis and Futuna', 'Western Sahara'],
  startsWithY: ['Yemen'],
  startsWithZ: ['Zambia', 'Zimbabwe'],

  endsWithA: ['Albania', 'Algeria', 'American Samoa', 'Andorra', 'Angola', 'Anguilla', 'Antigua and Barbuda', 'Argentina',
  'Armenia', 'Aruba', 'Australia', 'Austria', 'Bermuda', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Bulgaria', 'Cambodia',
  'Canada', 'China', 'Colombia', 'Costa Rica', 'Croatia', 'Cuba', 'Dominica', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia',
  'French Polynesia', 'Gambia', 'Georgia', 'Ghana', 'Grenada', 'Guatemala', 'Guinea', 'Guyana', 'India', 'Indonesia', 'Jamaica',
  'Kenya', 'Latvia', 'Liberia', 'Libya', 'Lithuania', 'Malaysia', 'Malta', 'Mauritania', 'Federated States of Micronesia', 'Moldova',
  'Mongolia', 'North Korea', 'Namibia', 'New Caledonia', 'Nicaragua', 'Nigeria', 'North Macedonia', 'Panama', 'Papua New Guinea',
  'Romania', 'Russia', 'Rwanda', 'Saint Helena, Ascension and Tristan da Cunha', 'Saint Lucia', 'Samoa', 'Saudi Arabia', 'Serbia',
  'Slovakia', 'Slovenia', 'Somalia', 'South Africa', 'Sri Lanka', 'Syria', 'South Korea', 'Tanzania', 'Tonga', 'Tunisia',
  'Uganda', 'United States of America', 'Venezuela', 'Wallis and Futuna', 'Western Sahara', 'Zambia', 'French Guiana'],
  endsWithC: ['Central African Republic', 'Czech Republic', 'Dominican Republic'],
  endsWithD: ['Bouvet Island', 'Chad', 'Christmas Island', 'Finland', 'Greenland', 'Iceland', 'Ireland', 'New Zealand',
  'Norfolk Island', 'Poland', 'Switzerland', 'Thailand', 'Åland'],
  endsWithE: ['Belize', 'Cabo Verde', 'Chile', 'France', 'Greece', 'Mozambique', 'Niue', 'Palestine', 'São Tomé and Príncipe',
  'Sierra Leone', 'Singapore', 'Suriname', 'Timor-Leste', 'Ukraine', 'Zimbabwe', 'Guadeloupe', 'Martinique', 'Mayotte'],
  endsWithG: ['Hong Kong', 'Luxembourg'],
  endsWithH: ['Bangladesh'],
  endsWithI: ['Brunei', 'Burundi', 'Djibouti', 'Eswatini', 'Fiji', 'Haiti', 'Kiribati', 'Malawi', 'Mali'],
  endsWithK: ['Denmark'],
  endsWithL: ['Brazil', 'Israel', 'Nepal', 'Portugal', 'Senegal'],
  endsWithM: ['Belgium', 'Guam', 'United Kingdom', 'Vietnam'],
  endsWithN: ['Afghanistan', 'Azerbaijan', 'Bahrain', 'Benin', 'Bhutan', 'Cameroon', 'Gabon', 'Iran', 'Isle of Man', 'Japan',
  'Jordan', 'Kazakhstan', 'Kyrgyzstan', 'Lebanon', 'Liechtenstein', 'Oman', 'Pakistan', 'Saint Martin', 'Saint Pierre and Miquelon',
  'Sint Maarten', 'South Sudan', 'Spain', 'Sudan', 'Svalbard and Jan Mayen', 'Sweden', 'Taiwan', 'Tajikistan', 'Turkmenistan',
  'Uzbekistan', 'Yemen', 'Réunion'],
  endsWithO: ['Burkina Faso', 'Democratic Republic of the Congo', 'Republic of the Congo', 'Curacao', 'Kosovo', 'Lesotho',
  'Mexico', 'Monaco', 'Montenegro', 'Morocco', 'Puerto Rico', 'San Marino', 'Togo', 'Trinidad and Tobago'],
  endsWithQ: ['Iraq'],
  endsWithR: ['Ecuador', 'El Salvador', 'Gibraltar', 'Madagascar', 'Myanmar', 'Niger', 'Qatar'],
  endsWithS: ['Bahamas', 'Barbados', 'Belarus', 'British Virgin Islands', 'Cayman Islands', 'Cocos Islands', 'Cook Islands',
  'Cyprus', 'Falkland Islands', 'Faroe Islands', 'French Southern Territories', 'Heard Island and McDonald Islands', 'Honduras',
  'Laos', 'Maldives', 'Marshall Islands', 'Mauritius', 'Netherlands', 'Northern Mariana Islands', 'Philippines', 'Pitcairn Islands',
  'Saint Kitts and Nevis', 'Saint Vincent and the Grenadines', 'Seychelles', 'Solomon Islands', 'South Georgia and the South Sandwich Islands',
  'Turks and Caicos Islands', 'United Arab Emirates', 'United States Virgin Islands', 'Comoros', 'Caribbean Netherlands'],
  endsWithT: ['Ivory Coast', 'Egypt', 'Kuwait', 'Montserrat'],
  endsWithU: ['Guinea-Bissau', 'Macau', 'Nauru', 'Palau', 'Peru', 'Tokelau', 'Tuvalu', 'Vanuatu'],
  endsWithY: ['British Indian Ocean Territory', 'Germany', 'Guernsey', 'Hungary', 'Italy', 'Jersey', 'Norway', 'Paraguay',
  'Saint Barthelemy', 'Turkey', 'Uruguay', 'Vatican City'],

  nameIs4LettersLong: ['Chad', 'Cuba', 'Fiji', 'Guam', 'Iran', 'Iraq', 'Laos', 'Mali', 'Niue', 'Oman', 'Peru', 'Togo'],
  nameIs5LettersLong: ['Aruba', 'Benin', 'Chile', 'China', 'Egypt', 'Gabon', 'Ghana', 'Haiti', 'India', 'Italy', 'Japan',
  'Kenya', 'Libya', 'Macau', 'Malta', 'Nauru', 'Nepal', 'Niger', 'Palau', 'Qatar', 'Samoa', 'Spain', 'Sudan', 'Syria',
  'Tonga', 'Yemen', 'Åland'],
  nameIs6LettersLong: ['Angola', 'Belize', 'Bhutan', 'Brazil', 'Brunei', 'Canada', 'Cyprus', 'France', 'Gambia', 'Greece',
  'Guinea', 'Guyana', 'Israel', 'Jersey', 'Jordan', 'Kosovo', 'Kuwait', 'Latvia', 'Malawi', 'Mexico', 'Monaco', 'Norway',
  'Panama', 'Poland', 'Russia', 'Rwanda', 'Serbia', 'Sweden', 'Taiwan', 'Turkey', 'Tuvalu', 'Uganda', 'Zambia'],
  nameIs7LettersLong: ['Albania', 'Algeria', 'Andorra', 'Armenia', 'Austria', 'Bahamas', 'Bahrain', 'Belarus', 'Belgium',
  'Bermuda', 'Bolivia', 'Burundi', 'Croatia', 'Curacao', 'Denmark', 'Ecuador', 'Eritrea', 'Estonia', 'Finland', 'Georgia',
  'Germany', 'Grenada', 'Hungary', 'Iceland', 'Ireland', 'Jamaica', 'Lebanon', 'Lesotho', 'Liberia', 'Moldova', 'Morocco',
  'Myanmar', 'Namibia', 'Nigeria', 'Romania', 'Senegal', 'Somalia', 'Tokelau', 'Tunisia', 'Ukraine', 'Uruguay', 'Vanuatu',
  'Vietnam', 'Comoros', 'Mayotte', 'Réunion'],
  nameIs8LettersLong: ['Anguilla', 'Barbados', 'Botswana', 'Bulgaria', 'Cambodia', 'Cameroon', 'Colombia', 'Djibouti',
  'Dominica', 'Eswatini', 'Ethiopia', 'Guernsey', 'Honduras', 'Kiribati', 'Malaysia', 'Maldives', 'Mongolia', 'Pakistan',
  'Paraguay', 'Portugal', 'Slovakia', 'Slovenia', 'Suriname', 'Tanzania', 'Thailand', 'Zimbabwe'],
  nameIs9LettersLong: ['Argentina', 'Australia', 'Gibraltar', 'Greenland', 'Guatemala', 'Hong Kong', 'Indonesia', 'Lithuania',
  'Mauritius', 'Nicaragua', 'Palestine', 'Singapore', 'Sri Lanka', 'Venezuela'],
  nameIs10LettersLong: ['Azerbaijan', 'Bangladesh', 'Cabo Verde', 'Costa Rica', 'Kazakhstan', 'Kyrgyzstan', 'Luxembourg',
  'Madagascar', 'Mauritania', 'Montenegro', 'Montserrat', 'Mozambique', 'San Marino', 'Seychelles', 'Tajikistan', 'Uzbekistan',
  'Guadeloupe', 'Martinique'],
  nameIs11LettersLong: ['Afghanistan', 'Ivory Coast', 'El Salvador', 'Isle of Man', 'North Korea', 'Netherlands', 'New Zealand',
  'Philippines', 'Puerto Rico', 'Saint Lucia', 'South Sudan', 'Switzerland', 'South Korea', 'Timor-Leste'],
  nameIs12LettersLong: ['Burkina Faso', 'Cook Islands', 'Saint Martin', 'Saudi Arabia', 'Sierra Leone', 'Sint Maarten', 'South Africa',
  'Turkmenistan', 'Vatican City'],
  nameIs13LettersLong: ['Bouvet Island', 'Cocos Islands', 'Faroe Islands', 'Guinea-Bissau', 'Liechtenstein', 'New Caledonia',
  'French Guiana'],
  nameIs14LettersLong: ['American Samoa', 'Cayman Islands', 'Czech Republic', 'Norfolk Island', 'United Kingdom', 'Western Sahara'],
  nameIs15LettersLong: ['North Macedonia', 'Solomon Islands'],
  nameIs16LettersLong: ['Christmas Island', 'Falkland Islands', 'French Polynesia', 'Marshall Islands', 'Papua New Guinea',
  'Pitcairn Islands', 'Saint Barthelemy'],
  nameIs17LettersLong: ['Equatorial Guinea', 'Wallis and Futuna'],
  nameIs18LettersLong: ['Dominican Republic'],
  nameIs19LettersLong: ['Antigua and Barbuda', 'Trinidad and Tobago'],
  nameIs20LettersLong: ['United Arab Emirates'],
  nameIs21LettersLong: ['Republic of the Congo', 'Saint Kitts and Nevis', 'São Tomé and Príncipe', 'Caribbean Netherlands'],
  nameIs22LettersLong: ['Bosnia and Herzegovina', 'British Virgin Islands', 'Svalbard and Jan Mayen'],
  nameIs24LettersLong: ['Central African Republic', 'Northern Mariana Islands', 'Turks and Caicos Islands', 'United States of America'],
  nameIs25LettersLong: ['Saint Pierre and Miquelon'],
  nameIs27LettersLong: ['French Southern Territories'],
  nameIs28LettersLong: ['United States Virgin Islands'],
  nameIs30LettersLong: ['British Indian Ocean Territory', 'Federated States of Micronesia'],
  nameIs32LettersLong: ['Democratic Republic of the Congo', 'Saint Vincent and the Grenadines'],
  nameIs33LettersLong: ['Heard Island and McDonald Islands'],
  nameIs44LettersLong: ['Saint Helena, Ascension and Tristan da Cunha', 'South Georgia and the South Sandwich Islands'],


  nameIsMultipleWords: ['American Samoa', 'Antigua and Barbuda', 'Bosnia and Herzegovina', 'Bouvet Island', 'British Indian Ocean Territory',
  'British Virgin Islands', 'Burkina Faso', 'Cabo Verde', 'Cayman Islands', 'Central African Republic', 'Christmas Island',
  'Cocos Islands', 'Democratic Republic of the Congo', 'Republic of the Congo', 'Cook Islands', 'Costa Rica', 'Ivory Coast',
  'Czech Republic', 'Dominican Republic', 'El Salvador', 'Equatorial Guinea', 'Falkland Islands', 'Faroe Islands', 'French Polynesia',
  'French Southern Territories', 'Heard Island and McDonald Islands', 'Hong Kong', 'Isle of Man', 'Marshall Islands',
  'Federated States of Micronesia', 'North Korea', 'New Caledonia', 'New Zealand', 'Norfolk Island', 'North Macedonia',
  'Northern Mariana Islands', 'Papua New Guinea', 'Pitcairn Islands', 'Puerto Rico', 'Saint Barthelemy', 'Saint Helena, Ascension and Tristan da Cunha',
  'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Martin', 'Saint Pierre and Miquelon', 'Saint Vincent and the Grenadines',
  'San Marino', 'São Tomé and Príncipe', 'Saudi Arabia', 'Sierra Leone', 'Sint Maarten', 'Solomon Islands', 'South Africa',
  'South Georgia and the South Sandwich Islands', 'South Sudan', 'Sri Lanka', 'Svalbard and Jan Mayen', 'South Korea',
  'Trinidad and Tobago', 'Turks and Caicos Islands', 'United Arab Emirates', 'United Kingdom', 'United States of America',
  'United States Virgin Islands', 'Vatican City', 'Wallis and Futuna', 'Western Sahara'],

  startsAndEndsWithSameLetter: ['Albania', 'Algeria', 'American Samoa', 'Andorra', 'Angola', 'Anguilla', 'Antigua and Barbuda',
  'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Central African Republic', 'Czech Republic', 'Saint Kitts and Nevis',
  'Saint Vincent and the Grenadines', 'Seychelles', 'Solomon Islands', 'South Georgia and the South Sandwich Islands'],
  // -------------------------------------------------------------------------------------------------------------------
  // -----------------------------------------------------Name----------------------------------------------------------
  // -------------------------------------------------------------------------------------------------------------------

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

  // -------------------------------------------------------------------------------------------------------------------
  // ---------------------------------------------------Sports----------------------------------------------------------
  // -------------------------------------------------------------------------------------------------------------------
  over500OlympicMedals: ['United States of America', 'Russia', 'United Kingdom', 'Germany', 'France', 'Italy', 'China',
  'Sweden', 'Australia', 'Japan', 'Canada', 'Norway', 'Hungary', 'Netherlands'],
  over300OlympicMedals: ['United States of America', 'Russia', 'United Kingdom', 'Germany', 'France', 'Italy', 'China',
  'Sweden', 'Australia', 'Japan', 'Canada', 'Norway', 'Hungary', 'Netherlands', 'Finland', 'South Korea', 'Switzerland',
  'Austria', 'Poland', 'Romania'],
  over100OlympicMedals: ['United States of America', 'Russia', 'United Kingdom', 'Germany', 'France', 'Italy', 'China',
  'Sweden', 'Australia', 'Japan', 'Canada', 'Norway', 'Hungary', 'Netherlands', 'Finland', 'South Korea', 'Switzerland',
  'Austria', 'Poland', 'Romania', 'Cuba', 'Bulgaria', 'Denmark', 'Spain', 'Belgium', 'Brazil', 'Czech Republic', 'New Zealand',
  'Ukraine', 'Greece', 'Kenya', 'Turkey', 'Belarus'],

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

  hasAthleteInAllTimeTop10: ['United States of America', 'Portugal', 'Argentina', 'Jamaica', 'Switzerland'],

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
  // -------------------------------------------------------------------------------------------------------------------
  // ---------------------------------------------------Sports----------------------------------------------------------
  // -------------------------------------------------------------------------------------------------------------------

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

  // Size
}
