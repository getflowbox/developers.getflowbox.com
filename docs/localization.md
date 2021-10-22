---
id: localization
title: Internationalization and localization
---

Flowbox is designed from the ground up to support full localization in many different languages, allowing you to easily support multiple languages and currencies within your application.

### Configuring the language

If you want to display your Flow in another language, pass in the `locale` property. A `locale` property logically consists of the fields described below.

#### language
ISO 639 alpha-2 or alpha-3 language code. When a language has both an alpha-2 code and an alpha-3 code, the alpha-2 code must be used. You can find a full list of valid language codes in the [IANA Language Subtag Registry](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry) ("Type: language"). The language field is case insensitive, but Locale always canonicalizes to lower case.

Example: _"en" (English), "sv" (Swedish), "da" (Danish)_

#### country (region)
ISO 3166 alpha-2 country code or UN M.49 numeric-3 area code. You can find a full list of valid country and region codes in the [IANA Language Subtag Registry](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry) ("Type: region"). The country (region) field is case insensitive, but Locale always canonicalizes to upper case.
Well-formed country/region values have the form `[a-zA-Z]{2} | [0-9]{3}`

Example: _"SE" (Sweden), "FR" (France), "DK" (Denmark)_

:::important

The language in your Flow will always default to English and if you pass in an unsupported locale, buttons and text will be displayed in English.

:::


The `locale` property needs to have both a `language` and a `region` code to work correctly: e.g. `en-EU` (language: English and region: Europe) or `da-DK` (language: Danish and region: Denmark). In order to get a correct translation, you will have to pick a locale from the list of supported locales.

#### Example initilization
See the example here for how to pass it into the `init` method of the `window.flowbox` function correctly

```html
<div id="js-flowbox-flow"></div>
<script>
  window.flowbox('init', {
    container: '#js-flowbox-flow',
    key: 'Your-Flow-Key',
    locale: 'da-DK',
  })
</script>
```

### Supported Languages and Regions

Below is a list of all the supported languages and regions in Flowbox

#### List of supported Languages
|                       |               |                     |              |
|-----------------------|---------------|---------------------|--------------|
| Arabic `ar`           | Finnish `fi`    | Korean `ko`           | Slovak `sk`    |
| Bulgarian `bg`          | French `fr`     | Latvian `lv`          | Slovenian `sl` |
| Simplified Chinese `zh` | German `de`     | Lithuanian `lt`       | Spanish `es`   |
| Croatian `hr`           | Greek `el`      | Norwegian Bokmål `nb` | Swedish `sv`   |
| Czech `cs`              | Hungarian `hu`  | Norwegian `no`        | Thai `th`      |
| Danish `da`             | Icelandic `is`  | Polish `pl`           | Turkish `tr`   |
| Dutch `nl`              | Indonesian `id` | Portuguese `pt`       | Ukrainian `uk` |
| English `en`            | Italian `it`    | Romanian `ro`         |              |
| Estonian `et`           | Japanese `ja`   | Russian `ru`          |              |

#### List of supported Regions
|                 |                |                   |                           |
|-----------------|----------------|-------------------|---------------------------|
| Australia: -`AU`  | Europe: -`EU`    | Lithuania: -`LT` `    | Singapore: -`SG`            |
| Austria: -`AT`    | Finland: -`FI`   | Luxembourg: -`LU`   | Slovakia: -`SK`             |
| Belgium: -`BE`    | France: -`FR`    | Macau: -`MO`        | South Africa: -`ZA`         |
| Brazil: -`BR`     | Germany: -`DE`   | Malta: -`MT`        | South Korea: -`KR`          |
| Bulgaria: -`BG`   | Greece: -`GR`    | Mexico: -`MX`       | Spain: -`ES`                |
| Canada: -`CA`     | Hong Kong: -`HK` | Monaco: -`MC`       | Sweden: -`SE`               |
| Chile: -`CL`      | Hungary: -`HU`   | Morocco: -`MA`      | Switzerland: -`CH`          |
| China: -`CN`      | India: -`IN`     | New Zealand: -`NZ`  | Taiwan: -`TW`               |
| Colombia: -`CO`   | Indonesia: -`ID` | Norway: -`NO`       | Thailand: -`TH`             |
| Costa Rica: -`CR` | Ireland: -`IE`   | Philippines: -`PH`  | The Netherlands: -`NL`      |
| Croatia: -`HR`    | Israel: -`IL`    | Poland: -`PL`       | Turkey: -`TR`               |
| Cyprus: -`CY`     | Italy: -`IT`     | Portugal: -`PT`     | United Arab Emirates: -`AE` |
| Czechia: -`CZ`    | Japan: -`JP`     | Qatar: -`QA`        | United Kingdom: -`GB`       |
| Denmark: -`DK`    | Latvia: -`LV`    | Romania: -`RO`      | United States: -`US`        |
| Egypt: -`EG`      | Latvia: -`LV`    | Russia: -`RU`       |                           |
| Estonia: -`EE`    | Lebanon: -`LB`   | Saudi Arabia: -`SA` |                           |

### Currency

Below is a list of all the currencies supported in Flowbox

#### List of supported currencies
|               |              |                |               |
| ------------- | ------------ | -------------- | ------------- |
| AED (100 د.إ) | DKK (100 Kr) | LBP (100 ل.ل.) | RON (100 LEI) |
| AUD ($100) | EGP (100 EGP) | KRW (₩100) | RUB (100₽) |
| BGN (100 Лв) | EUR (€100) | MAD (100 .د.م.) | SAR (100 ﷼) |
| BRL (R$100) | GBP (£100) | MOP (MOP$100) | SEK (100 Kr) |
| CAD ($100) | HKD (HK$ 100) | MXN ($100) | SGD (S$ 100) |
| CHF (CHF 100) | HRK (100kn) | MYR (RM100) | THB (฿100) |
| CLP ($100) | HUF (100 Ft) | NOK (100 Kr) | TRY (₺100) |
| CNY (¥100) | IDR (Rp100) | NZD (NZ$ 100) | TWD (NT$ 100) |
| COP ($100) | ILS (₪100) | PEN (100 soles) | UAH (₴100) |
| CRC (₡ 100) | INR (₹ 100) | PHP (₱100) | USD ($100) |
| CZK (100 Kč) | ISK (100kr) | PLN (100zł) | VND (100 ₫) |
| DHS (Dhs 100) | JPY (¥100) | QAR (100 ر.ق) | ZAR (R 100) |

