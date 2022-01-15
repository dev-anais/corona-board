import axios, { AxiosResponse } from "axios";
import { SummaryCovidResponse } from "../types";

// for summary info
export function getSummaryCovidData(): Promise<
  AxiosResponse<SummaryCovidResponse>
> {
  const url = "https://api.covid19api.com/summary";
  return axios.get(url);
}

// for specific country info

// function fetchCountryInfo(
//   countryName: string,
//   status: CovidStatus
// ): Promise<AxiosResponse<CountrySummaryResponse>> {
//   // status params: confirmed, recovered, deaths
//   const url = `https://api.covid19api.com/country/${countryName}/status/${status}`;
//   return axios.get(url);
// }
