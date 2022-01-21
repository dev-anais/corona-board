export interface SummaryCovidResponse {
  Countries: Country[];
  Date: string;
  Global: SpecificInfo;
  Message: string;
}

export interface Country {
  Country: string;
  CountryCode: string;
  Date: string;
  ID: string;
  NewConfirmed: number;
  NewDeaths: number;
  NewRecovered: number;
  Premium: any;
  Slug: string;
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecovered: number;
}

export interface SpecificInfo {
  NewConfirmed: number;
  NewDeaths: number;
  NewRecovered: number;
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecovered: number;
  Date: string;
  CountryCode: string;
}

export interface OneCountryInfoResponse {
  Confirmed: number;
  Deaths: number;
  Recovered: number;
  Date: string;
}

export interface OneMonthChartInfo {
  label: Array<string>;
  Confirmed: Array<number>;
  Deaths: Array<number>;
}
