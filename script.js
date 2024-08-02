// Data for countries and their currencies
const currencyData = {
    "Afghanistan": { currency: "Afghan Afghani", coin: "Pul", code: "AFN", symbol: "؋" },
    "Albania": { currency: "Albanian Lek", coin: "Qindarkë", code: "ALL", symbol: "L" },
    "Algeria": { currency: "Algerian Dinar", coin: "Santeem", code: "DZD", symbol: "د.ج" },
    "American Samoa": { currency: "United States Dollar", coin: "Cent", code: "USD", symbol: "$" },
    "Andorra": { currency: "European Euro", coin: "Cent", code: "EUR", symbol: "€" },
    "Angola": { currency: "Angolan Kwanza", coin: "Cêntimo", code: "AOA", symbol: "Kz" },
    "Anguilla": { currency: "East Caribbean Dollar", coin: "Cent", code: "XCD", symbol: "$" },
    "Antarctica": { currency: "No official currency", coin: "-", code: "-", symbol: "-" },
    "Antigua and Barbuda": { currency: "East Caribbean Dollar", coin: "Cent", code: "XCD", symbol: "$" },
    "Argentina": { currency: "Argentine Peso", coin: "Centavo", code: "ARS", symbol: "$" },
    "Armenia": { currency: "Armenian Dram", coin: "Luma", code: "AMD", symbol: "֏" },
    "Aruba (Netherlands)": { currency: "Aruban Florin", coin: "Cent", code: "AWG", symbol: "ƒ" },
    "Australia": { currency: "Australian Dollar", coin: "Cent", code: "AUD", symbol: "$" },
    "Austria": { currency: "European Euro", coin: "Cent", code: "EUR", symbol: "€" },
    "Azerbaijan": { currency: "Azerbaijani Manat", coin: "Qəpik", code: "AZN", symbol: "₼" },
    "Bahamas": { currency: "Bahamian Dollar", coin: "Cent", code: "BSD", symbol: "$" },
    "Bahrain": { currency: "Bahraini Dinar", coin: "Fils", code: "BHD", symbol: ".د.ب" },
    "Bangladesh": { currency: "Bangladeshi Taka", coin: "Poisha", code: "BDT", symbol: "৳" },
    "Barbados": { currency: "Barbadian Dollar", coin: "Cent", code: "BBD", symbol: "$" },
    "Belarus": { currency: "Belarusian Ruble", coin: "Kapyeyka", code: "BYN", symbol: "Br" },
    "Belgium": { currency: "European Euro", coin: "Cent", code: "EUR", symbol: "€" },
    "Belize": { currency: "Belize Dollar", coin: "Cent", code: "BZD", symbol: "$" },
    "Benin": { currency: "West African CFA Franc", coin: "Centime", code: "XOF", symbol: "Fr" },
    "Bermuda": { currency: "Bermudian Dollar", coin: "Cent", code: "BMD", symbol: "$" },
    "Bhutan": { currency: "Bhutanese Ngultrum", coin: "Chetrum", code: "BTN", symbol: "Nu." },
    "Bolivia": { currency: "Bolivian Boliviano", coin: "Centavo", code: "BOB", symbol: "Bs." },
    "Bosnia and Herzegovina": { currency: "Bosnia-Herzegovina Convertible Mark", coin: "Fening", code: "BAM", symbol: "KM" },
    "Botswana": { currency: "Botswanan Pula", coin: "Thebe", code: "BWP", symbol: "P" },
    "Brazil": { currency: "Brazilian Real", coin: "Centavo", code: "BRL", symbol: "R$" },
    "Brunei": { currency: "Brunei Dollar", coin: "Sen", code: "BND", symbol: "$" },
    "Bulgaria": { currency: "Bulgarian Lev", coin: "Stotinka", code: "BGN", symbol: "лв" },
    "Burkina Faso": { currency: "West African CFA Franc", coin: "Centime", code: "XOF", symbol: "Fr" },
    "Burundi": { currency: "Burundian Franc", coin: "Centime", code: "BIF", symbol: "Fr" },
    "Cabo Verde": { currency: "Cape Verdean Escudo", coin: "Centavo", code: "CVE", symbol: "$" },
    "Cambodia": { currency: "Cambodian Riel", coin: "Sen", code: "KHR", symbol: "៛" },
    "Cameroon": { currency: "Central African CFA Franc", coin: "Centime", code: "XAF", symbol: "Fr" },
    "Canada": { currency: "Canadian Dollar", coin: "Cent", code: "CAD", symbol: "$" },
    "Cayman Islands": { currency: "Cayman Islands Dollar", coin: "Cent", code: "KYD", symbol: "$" },
    "Central African Republic": { currency: "Central African CFA Franc", coin: "Centime", code: "XAF", symbol: "Fr" },
    "Chad": { currency: "Central African CFA Franc", coin: "Centime", code: "XAF", symbol: "Fr" },
    "Chile": { currency: "Chilean Peso", coin: "Centavo (only used for accounting purposes, not minted)", code: "CLP", symbol: "$" },
    "China": { currency: "Chinese Yuan", coin: "Fen (rarely used due to low value)", code: "CNY", symbol: "¥" },
    "Colombia": { currency: "Colombian Peso", coin: "Centavo (only used for accounting purposes, not minted)", code: "COP", symbol: "$" },
    "Comoros": { currency: "Comorian Franc", coin: "Centime", code: "KMF", symbol: "Fr" },
    "Congo, Democratic Rep.": { currency: "Congolese Franc", coin: "Centime", code: "CDF", symbol: "Fr" },
    "Congo, Republic of": { currency: "Central African CFA Franc", coin: "Centime", code: "XAF", symbol: "Fr" },
    "Cook Islands": { currency: "New Zealand Dollar", coin: "Cent", code: "NZD", symbol: "$" },
    "Costa Rica": { currency: "Costa Rican Colón", coin: "Céntimo", code: "CRC", symbol: "₡" },
    "Croatia": { currency: "Croatian Kuna", coin: "Lipa", code: "HRK", symbol: "kn" },
    "Cuba": { currency: "Cuban Peso", coin: "Centavo", code: "CUP", symbol: "$" },
    "Cyprus": { currency: "European Euro", coin: "Cent", code: "EUR", symbol: "€" },
    "Czech Republic": { currency: "Czech Koruna", coin: "Haléř (withdrawn from circulation, only used for accounting)", code: "CZK", symbol: "Kč" },
    "Denmark": { currency: "Danish Krone", coin: "Øre (only used for pricing, not minted)", code: "DKK", symbol: "kr" },
    "Djibouti": { currency: "Djiboutian Franc", coin: "Centime", code: "DJF", symbol: "Fr" },
    "Dominica": { currency: "East Caribbean Dollar", coin: "Cent", code: "XCD", symbol: "$" },
    "Dominican Republic": { currency: "Dominican Peso", coin: "Centavo", code: "DOP", symbol: "$" },
    "East Timor": { currency: "United States Dollar", coin: "Cent", code: "USD", symbol: "$" },
    "Ecuador": { currency: "United States Dollar", coin: "Cent", code: "USD", symbol: "$" },
    "Egypt": { currency: "Egyptian Pound", coin: "Piastre", code: "EGP", symbol: "£" },
    "El Salvador": { currency: "United States Dollar", coin: "Cent", code: "USD", symbol: "$" },
    "Equatorial Guinea": { currency: "Central African CFA Franc", coin: "Centime", code: "XAF", symbol: "Fr" },
    "Eritrea": { currency: "Eritrean Nakfa", coin: "Cent", code: "ERN", symbol: "Nfk" },
    "Estonia": { currency: "European Euro", coin: "Cent", code: "EUR", symbol: "€" },
    "Eswatini": { currency: "Swazi Lilangeni", coin: "Cent", code: "SZL", symbol: "L" },
    "Ethiopia": { currency: "Ethiopian Birr", coin: "Santim", code: "ETB", symbol: "Br" },
    "Falkland Islands": { currency: "Falkland Islands Pound", coin: "Penny", code: "FKP", symbol: "£" },
    "Faroe Islands": { currency: "Danish Krone", coin: "Øre (only used for pricing, not minted)", code: "DKK", symbol: "kr" },
    "Fiji": { currency: "Fijian Dollar", coin: "Cent", code: "FJD", symbol: "$" },
    "Finland": { currency: "European Euro", coin: "Cent", code: "EUR", symbol: "€" },
    "France": { currency: "European Euro", coin: "Cent", code: "EUR", symbol: "€" },
    "French Guiana": { currency: "European Euro", coin: "Cent", code: "EUR", symbol: "€" },
    "French Polynesia": { currency: "CFP Franc", coin: "Centime", code: "XPF", symbol: "₣" },
    "French Southern and Antarctic Lands": { currency: "European Euro", coin: "Cent", code: "EUR", symbol: "€" },
    "Gabon": { currency: "Central African CFA Franc", coin: "Centime", code: "XAF", symbol: "Fr" },
    "Gambia": { currency: "Gambian Dalasi", coin: "Butut", code: "GMD", symbol: "D" },
    "Georgia": { currency: "Georgian Lari", coin: "Tetri", code: "GEL", symbol: "₾" },
    "Germany": { currency: "European Euro", coin: "Cent", code: "EUR", symbol: "€" },
    "Ghana": { currency: "Ghanaian Cedi", coin: "Pesewa", code: "GHS", symbol: "₵" },
    "Gibraltar": { currency: "Gibraltar Pound", coin: "Penny", code: "GIP", symbol: "£" },
    "Greece": { currency: "European Euro", coin: "Cent", code: "EUR", symbol: "€" },
    "Greenland": { currency: "Danish Krone", coin: "Øre (only used for pricing, not minted)", code: "DKK", symbol: "kr" },
    "Grenada": { currency: "East Caribbean Dollar", coin: "Cent", code: "XCD", symbol: "$" },
    "Guatemala": { currency: "Guatemalan Quetzal", coin: "Centavo", code: "GTQ", symbol: "Q" },
    "Guinea": { currency: "Guinean Franc", coin: "Centime", code: "GNF", symbol: "Fr" },
    "Guinea-Bissau": { currency: "West African CFA Franc", coin: "Centime", code: "XOF", symbol: "Fr" },
    "Guyana": { currency: "Guyanese Dollar", coin: "Cent", code: "GYD", symbol: "$" },
    "Haiti": { currency: "Haitian Gourde", coin: "Centime", code: "HTG", symbol: "G" },
    "Honduras": { currency: "Honduran Lempira", coin: "Centavo", code: "HNL", symbol: "L" },
    "Hong Kong": { currency: "Hong Kong Dollar", coin: "Cent", code: "HKD", symbol: "$" },
    "Hungary": { currency: "Hungarian Forint", coin: "Fillér (withdrawn from circulation)", code: "HUF", symbol: "Ft" },
    "Iceland": { currency: "Icelandic Króna", coin: "Eyrir (withdrawn from circulation, only used for accounting)", code: "ISK", symbol: "kr" },
    "India": { currency: "Indian Rupee", coin: "Paisa (rarely used due to low value)", code: "INR", symbol: "₹" },
    "Indonesia": { currency: "Indonesian Rupiah", coin: "Sen (only used for calculations, not minted)", code: "IDR", symbol: "Rp" },
    "Iran": { currency: "Iranian Rial", coin: "Dinar", code: "IRR", symbol: "﷼" },
    "Iraq": { currency: "Iraqi Dinar", coin: "Fils (rarely used due to low value)", code: "IQD", symbol: "ع.د" },
    "Ireland": { currency: "European Euro", coin: "Cent", code: "EUR", symbol: "€" },
    "Israel": { currency: "Israeli New Shekel", coin: "Agora", code: "ILS", symbol: "₪" },
    "West Bank": { currency: "Israeli New Shekel", coin: "Agora", code: "ILS", symbol: "₪" },
    "Italy": { currency: "European Euro", coin: "Cent", code: "EUR", symbol: "€" },
    "Jamaica": { currency: "Jamaican Dollar", coin: "Cent", code: "JMD", symbol: "$" },
    "Japan": { currency: "Japanese Yen", coin: "Sen (only used for calculations, not minted)", code: "JPY", symbol: "¥" },
    "Jordan": { currency: "Jordanian Dinar", coin: "Piastre", code: "JOD", symbol: "د.ا" },
    "Kazakhstan": { currency: "Kazakhstani Tenge", coin: "Tiyin (withdrawn from circulation)", code: "KZT", symbol: "₸" },
    "Kenya": { currency: "Kenyan Shilling", coin: "Cent", code: "KES", symbol: "Sh" },
    "Kiribati": { currency: "Australian Dollar", coin: "Cent", code: "AUD", symbol: "$" },
    "Korea, North": { currency: "North Korean Won", coin: "Chon", code: "KPW", symbol: "₩" },
    "Korea, South": { currency: "South Korean Won", coin: "Jeon (only used for calculations, not minted)", code: "KRW", symbol: "₩" },
    "Kosovo": { currency: "European Euro", coin: "Cent", code: "EUR", symbol: "€" },
    "Kuwait": { currency: "Kuwaiti Dinar", coin: "Fils", code: "KWD", symbol: "د.ك" },
    "Kyrgyzstan": { currency: "Kyrgyzstani Som", coin: "Tyiyn", code: "KGS", symbol: "с" },
    "Laos": { currency: "Lao Kip", coin: "Att", code: "LAK", symbol: "₭" },
    "Latvia": { currency: "European Euro", coin: "Cent", code: "EUR", symbol: "€" },
    "Lebanon": { currency: "Lebanese Pound", coin: "Piastre", code: "LBP", symbol: "ل.ل" },
    "Lesotho": { currency: "Lesotho Loti", coin: "Sente", code: "LSL", symbol: "L" },
    "Liberia": { currency: "Liberian Dollar", coin: "Cent", code: "LRD", symbol: "$" },
    "Libya": { currency: "Libyan Dinar", coin: "Dirham", code: "LYD", symbol: "ل.د" },
    "Liechtenstein": { currency: "Swiss Franc", coin: "Rappen", code: "CHF", symbol: "Fr" },
    "Lithuania": { currency: "European Euro", coin: "Cent", code: "EUR", symbol: "€" },
    "Luxembourg": { currency: "European Euro", coin: "Cent", code: "EUR", symbol: "€" },
    "Macau": { currency: "Macanese Pataca", coin: "Avos", code: "MOP", symbol: "P" },
    "Madagascar": { currency: "Malagasy Ariary", coin: "Iraimbilanja", code: "MGA", symbol: "Ar" },
    "Malawi": { currency: "Malawian Kwacha", coin: "Tambala", code: "MWK", symbol: "MK" },
    "Malaysia": { currency: "Malaysian Ringgit", coin: "Sen", code: "MYR", symbol: "RM" },
    "Maldives": { currency: "Maldivian Rufiyaa", coin: "Laari", code: "MVR", symbol: "Rf" },
    "Mali": { currency: "West African CFA Franc", coin: "Centime", code: "XOF", symbol: "Fr" },
    "Malta": { currency: "European Euro", coin: "Cent", code: "EUR", symbol: "€" },
    "Marshall Islands": { currency: "United States Dollar", coin: "Cent", code: "USD", symbol: "$" },
    "Mauritania": { currency: "Mauritanian Ouguiya", coin: "Khoums", code: "MRU", symbol: "UM" },
    "Mauritius": { currency: "Mauritian Rupee", coin: "Cent", code: "MUR", symbol: "₨" },
    "Mexico": { currency: "Mexican Peso", coin: "Centavo", code: "MXN", symbol: "$" },
    "Micronesia": { currency: "United States Dollar", coin: "Cent", code: "USD", symbol: "$" },
    "Moldova": { currency: "Moldovan Leu", coin: "Ban", code: "MDL", symbol: "L" },
    "Monaco": { currency: "European Euro", coin: "Cent", code: "EUR", symbol: "€" },
    "Mongolia": { currency: "Mongolian Tögrög", coin: "Möngö (rarely used due to low value)", code: "MNT", symbol: "₮" },
    "Montenegro": { currency: "European Euro", coin: "Cent", code: "EUR", symbol: "€" },
    "Montserrat": { currency: "East Caribbean Dollar", coin: "Cent", code: "XCD", symbol: "$" },
    "Morocco": { currency: "Moroccan Dirham", coin: "Santim", code: "MAD", symbol: "د.م." },
    "Mozambique": { currency: "Mozambican Metical", coin: "Centavo", code: "MZN", symbol: "MT" },
    "Myanmar": { currency: "Myanmar Kyat", coin: "Pya (only used for accounting purposes, not minted)", code: "MMK", symbol: "K" },
    "Namibia": { currency: "Namibian Dollar", coin: "Cent", code: "NAD", symbol: "$" },
    "Nauru": { currency: "Australian Dollar", coin: "Cent", code: "AUD", symbol: "$" },
    "Nepal": { currency: "Nepalese Rupee", coin: "Paisa", code: "NPR", symbol: "₨" },
    "Netherlands": { currency: "European Euro", coin: "Cent", code: "EUR", symbol: "€" },
    "New Caledonia": { currency: "CFP Franc", coin: "Centime", code: "XPF", symbol: "₣" },
    "New Zealand": { currency: "New Zealand Dollar", coin: "Cent", code: "NZD", symbol: "$" },
    "Nicaragua": { currency: "Nicaraguan Córdoba", coin: "Centavo", code: "NIO", symbol: "C$" },
    "Niger": { currency: "West African CFA Franc", coin: "Centime", code: "XOF", symbol: "Fr" },
    "Nigeria": { currency: "Nigerian Naira", coin: "Kobo", code: "NGN", symbol: "₦" },
    "Niue": { currency: "New Zealand Dollar", coin: "Cent", code: "NZD", symbol: "$" },
    "Norfolk Island": { currency: "Australian Dollar", coin: "Cent", code: "AUD", symbol: "$" },
    "North Macedonia": { currency: "Macedonian Denar", coin: "Deni", code: "MKD", symbol: "ден" },
    "Norway": { currency: "Norwegian Krone", coin: "Øre (only used for pricing, not minted)", code: "NOK", symbol: "kr" },
    "Oman": { currency: "Omani Rial", coin: "Baisa", code: "OMR", symbol: "ر.ع." },
    "Democratic Republic of the Congo": { currency: "Congolese Franc", coin: "Centime", code: "CDF", symbol: "FC" },
    "Republic of the Congo": { currency: "CFA Franc BEAC", coin: "Centime", code: "XAF", symbol: "FCFA" },
    "Ivory Coast": { currency: "CFA Franc BCEAO", coin: "Centime", code: "XOF", symbol: "CFA" },
    "United Republic of Tanzania": { currency: "Tanzanian Shilling", coin: "Cent", code: "TZS", symbol: "TSh" },
    "Pakistan": { currency: "Pakistani Rupee", coin: "Paisa", code: "PKR", symbol: "₨" },
    "Palau": { currency: "United States Dollar", coin: "Cent", code: "USD", symbol: "$" },
    "Panama": { currency: "Panamanian Balboa", coin: "Centésimo", code: "PAB", symbol: "B/." },
    "Papua New Guinea": { currency: "Papua New Guinean Kina", coin: "Toea", code: "PGK", symbol: "K" },
    "Paraguay": { currency: "Paraguayan Guaraní", coin: "Céntimo (only used for accounting purposes, not minted)", code: "PYG", symbol: "₲" },
    "Peru": { currency: "Peruvian Sol", coin: "Céntimo", code: "PEN", symbol: "S/." },
    "Philippines": { currency: "Philippine Peso", coin: "Sentimo", code: "PHP", symbol: "₱" },
    "Pitcairn Islands": { currency: "New Zealand Dollar", coin: "Cent", code: "NZD", symbol: "$" },
    "Poland": { currency: "Polish Złoty", coin: "Grosz", code: "PLN", symbol: "zł" },
    "Portugal": { currency: "European Euro", coin: "Cent", code: "EUR", symbol: "€" },
    "Qatar": { currency: "Qatari Riyal", coin: "Dirham", code: "QAR", symbol: "ر.ق" },
    "Romania": { currency: "Romanian Leu", coin: "Ban", code: "RON", symbol: "lei" },
    "Russia": { currency: "Russian Ruble", coin: "Kopek", code: "RUB", symbol: "₽" },
    "Rwanda": { currency: "Rwandan Franc", coin: "Centime", code: "RWF", symbol: "Fr" },
    "Saint Helena, Ascension and Tristan da Cunha": { currency: "Saint Helena Pound", coin: "Penny", code: "SHP", symbol: "£" },
    "Saint Kitts and Nevis": { currency: "East Caribbean Dollar", coin: "Cent", code: "XCD", symbol: "$" },
    "Saint Lucia": { currency: "East Caribbean Dollar", coin: "Cent", code: "XCD", symbol: "$" },
    "Saint Pierre and Miquelon": { currency: "European Euro", coin: "Cent", code: "EUR", symbol: "€" },
    "Saint Vincent and the Grenadines": { currency: "East Caribbean Dollar", coin: "Cent", code: "XCD", symbol: "$" },
    "Samoa": { currency: "Samoan Tala", coin: "Sene", code: "WST", symbol: "T" },
    "San Marino": { currency: "European Euro", coin: "Cent", code: "EUR", symbol: "€" },
    "São Tomé and Príncipe": { currency: "São Tomé and Príncipe Dobra", coin: "Cêntimo", code: "STN", symbol: "Db" },
    "Saudi Arabia": { currency: "Saudi Riyal", coin: "Halala", code: "SAR", symbol: "ر.س" },
    "Senegal": { currency: "West African CFA Franc", coin: "Centime", code: "XOF", symbol: "Fr" },
    "Serbia": { currency: "Serbian Dinar", coin: "Para", code: "RSD", symbol: "дин." },
    "Seychelles": { currency: "Seychellois Rupee", coin: "Cent", code: "SCR", symbol: "₨" },
    "Sierra Leone": { currency: "Sierra Leonean Leone", coin: "Cent", code: "SLL", symbol: "Le" },
    "Singapore": { currency: "Singapore Dollar", coin: "Cent", code: "SGD", symbol: "$" },
    "Slovakia": { currency: "European Euro", coin: "Cent", code: "EUR", symbol: "€" },
    "Slovenia": { currency: "European Euro", coin: "Cent", code: "EUR", symbol: "€" },
    "Solomon Islands": { currency: "Solomon Islands Dollar", coin: "Cent", code: "SBD", symbol: "$" },
    "Somalia": { currency: "Somali Shilling", coin: "Cent", code: "SOS", symbol: "Sh" },
    "South Africa": { currency: "South African Rand", coin: "Cent", code: "ZAR", symbol: "R" },
    "South Georgia and the South Sandwich Islands": { currency: "British Pound Sterling", coin: "Penny", code: "GBP", symbol: "£" },
    "South Korea": { currency: "South Korean Won", coin: "Jeon (only used for calculations, not minted)", code: "KRW", symbol: "₩" },
    "South Sudan": { currency: "South Sudanese Pound", coin: "Piastre", code: "SSP", symbol: "£" },
    "Spain": { currency: "European Euro", coin: "Cent", code: "EUR", symbol: "€" },
    "Sri Lanka": { currency: "Sri Lankan Rupee", coin: "Cent", code: "LKR", symbol: "Rs" },
    "Sudan": { currency: "Sudanese Pound", coin: "Piastre", code: "SDG", symbol: "ج.س." },
    "Suriname": { currency: "Surinamese Dollar", coin: "Cent", code: "SRD", symbol: "$" },
    "Sweden": { currency: "Swedish Krona", coin: "Öre (only used for pricing, not minted)", code: "SEK", symbol: "kr" },
    "Switzerland": { currency: "Swiss Franc", coin: "Rappen", code: "CHF", symbol: "Fr" },
    "Syria": { currency: "Syrian Pound", coin: "Piastre", code: "SYP", symbol: "ل.س" },
    "Taiwan": { currency: "New Taiwan Dollar", coin: "Cent", code: "TWD", symbol: "NT$" },
    "Tajikistan": { currency: "Tajikistani Somoni", coin: "Diram", code: "TJS", symbol: "SM" },
    "Tanzania": { currency: "Tanzanian Shilling", coin: "Cent", code: "TZS", symbol: "TSh" },
    "Thailand": { currency: "Thai Baht", coin: "Satang", code: "THB", symbol: "฿" },
    "Timor-Leste": { currency: "United States Dollar", coin: "Cent", code: "USD", symbol: "$" },
    "Togo": { currency: "West African CFA Franc", coin: "Centime", code: "XOF", symbol: "Fr" },
    "Tonga": { currency: "Tongan Paʻanga", coin: "Seniti", code: "TOP", symbol: "T$" },
    "Trinidad and Tobago": { currency: "Trinidad and Tobago Dollar", coin: "Cent", code: "TTD", symbol: "$" },
    "Tunisia": { currency: "Tunisian Dinar", coin: "Millime", code: "TND", symbol: "د.ت" },
    "Turkey": { currency: "Turkish Lira", coin: "Kuruş", code: "TRY", symbol: "₺" },
    "Turkmenistan": { currency: "Turkmenistani Manat", coin: "Teni", code: "TMT", symbol: "m" },
    "Tuvalu": { currency: "Australian Dollar", coin: "Cent", code: "AUD", symbol: "$" },
    "Uganda": { currency: "Ugandan Shilling", coin: "Cent", code: "UGX", symbol: "USh" },
    "Ukraine": { currency: "Ukrainian Hryvnia", coin: "Kopiyka", code: "UAH", symbol: "₴" },
    "United Arab Emirates": { currency: "United Arab Emirates Dirham", coin: "Fils", code: "AED", symbol: "د.إ" },
    "United Kingdom": { currency: "Pound Sterling", coin: "Penny", code: "GBP", symbol: "£" },
    "United States": { currency: "United States Dollar", coin: "Cent", code: "USD", symbol: "$" },
    "Uruguay": { currency: "Uruguayan Peso", coin: "Centésimo", code: "UYU", symbol: "$" },
    "Uzbekistan": { currency: "Uzbekistani Som", coin: "Tiyin", code: "UZS", symbol: "soʻm" },
    "Vanuatu": { currency: "Vanuatu Vatu", coin: "Centime", code: "VUV", symbol: "Vt" },
    "Vatican City": { currency: "Euro", coin: "Cent", code: "EUR", symbol: "€" },
    "Venezuela": { currency: "Venezuelan Bolívar", coin: "Céntimo", code: "VES", symbol: "Bs." },
    "Vietnam": { currency: "Vietnamese Đồng", coin: "Hào (rarely used due to low value)", code: "VND", symbol: "₫" },
    "Western Sahara": { currency: "Moroccan Dirham", coin: "Santim", code: "MAD", symbol: "د.م." },
    "Yemen": { currency: "Yemeni Rial", coin: "Fils", code: "YER", symbol: "ر.ي" },
    "Zambia": { currency: "Zambian Kwacha", coin: "Ngwee", code: "ZMW", symbol: "ZK" },
    "Zimbabwe": { currency: "Zimbabwean Dollar", coin: "Cent", code: "ZWL", symbol: "$" }
};

// SVG dimensions
const width = 960;
const height = 600;

// Create an SVG element
const svg = d3.select("#map")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

// Define the map projection
const projection = d3.geoMercator()
    .scale(130)
    .translate([width / 2, height / 1.5]);

// Define the path generator
const path = d3.geoPath()
    .projection(projection);

// Create a tooltip
const tooltip = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

// Load and display the world map
d3.json("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson").then(function (worldData) {
    // Fix the name for the United Kingdom
    worldData.features.forEach(function (feature) {
        if (feature.properties.name === "England") {
            feature.properties.name = "United Kingdom";
        }
        if (feature.properties.name === "USA") {
            feature.properties.name = "United States";
        }
        
    });

    svg.selectAll("path")
        .data(worldData.features)
        .enter().append("path")
        .attr("d", path)
        .attr("fill", "#ccc")
        .attr("stroke", "#333")
        .on("mouseover", function (event, d) {
            d3.select(this).attr("fill", "#ffa500"); // Highlight the country
            const countryData = currencyData[d.properties.name] || { currency: "Unknown", coin: "", code: "", symbol: "" };
            tooltip.transition()
                .duration(200)
                .style("opacity", .9);
            tooltip.html(`<strong>${d.properties.name}</strong><br>Currency: ${countryData.currency}<br>Coin: ${countryData.coin}<br>Symbol: ${countryData.symbol}`)
                .style("left", (event.pageX + 5) + "px")
                .style("top", (event.pageY - 28) + "px");
        })
        .on("mouseout", function (d) {
            d3.select(this).attr("fill", "#ccc"); // Reset the country color
            tooltip.transition()
                .duration(500)
                .style("opacity", 0);
        });
});
