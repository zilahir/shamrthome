export interface KRuokaMeasurements {
  contentUnit: string;
  contentSize: number;
}

export interface Prices {
  [key: string]: string;
}

export interface LocalizedName {
  finnish: string;
  swedish: string;
}

export interface KRuokaSearch {
  available: string;
  countryOfOrigin: string;
  ean: string;
  id: string;
  isUtility: boolean;
  kind: string;
  localizedName: LocalizedName;
  measurements: KRuokaMeasurements;
  picture: string;
  prices: Prices;
  section: string;
  urlSlug: string;
}
