import axios, { AxiosResponse } from "axios";
import { SummaryCovidResponse, OneCountryInfoResponse } from "../types";

// for summary info
export function getSummaryCovidData(): Promise<
  AxiosResponse<SummaryCovidResponse>
> {
  const url = "https://api.covid19api.com/summary";
  return axios.get(url);
}

// for specific country info

export function getCountryInfo(
  country: string
): Promise<AxiosResponse<Array<OneCountryInfoResponse>>> {
  const url = `https://api.covid19api.com/total/country/${country}`;
  return axios.get(url);
}
