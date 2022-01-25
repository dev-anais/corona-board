import React, { useEffect, FC, useState } from "react";
import { getSummaryCovidData, getCountryInfo } from "./api";
import { SpecificInfo, Country, OneCountryInfoResponse } from "./types";
import { Title, WorldChart, CountryChart } from "./components";
import { ThemeProvider } from "styled-components";
import defaultTheme from "./style/theme";
import GlobalStyles from "./style/globalstyle";
import * as S from "./style/app";
import "./App.css";
import "./lang/i18n";

const App: FC = () => {
  const [countriesInfo, setCountriesInfo] = useState<Array<Country>>();
  const [globalInfo, setGlobalInfo] = useState<SpecificInfo>({
    NewConfirmed: 0,
    NewDeaths: 0,
    NewRecovered: 0,
    TotalConfirmed: 0,
    TotalDeaths: 0,
    TotalRecovered: 0,
    Date: "",
    CountryCode: "",
  });
  const [selectedInfo, setSelectedInfo] = useState<SpecificInfo>();
  const [countryDailyInfo, setCountryDailyInfo] =
    useState<Array<OneCountryInfoResponse>>();

  async function initData() {
    const { data } = await getSummaryCovidData();
    /** TODO:
     * 로컬 스토리지에 저장해둔 글로벌 정보가 있으면 해당 정보가 제일 먼저 보이도록,
     * 만약 없으면 Global로 가는 것
     *  */
    setGlobalInfo(data.Global);
    setCountriesInfo(
      data.Countries.sort((a, b) => b.TotalConfirmed - a.TotalConfirmed)
    );
  }

  useEffect(() => {
    initData();
  }, []);

  async function getCountryData() {
    if (selectedInfo) {
      const { data } = await getCountryInfo(selectedInfo.CountryCode);
      setCountryDailyInfo(data);
    }
  }

  useEffect(() => {
    getCountryData();
  }, [selectedInfo]);

  const changeCountry = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    const selectedCountry = countriesInfo?.filter(
      (country) => country.CountryCode === value
    )[0];

    if (selectedCountry) {
      setSelectedInfo(selectedCountry);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <S.PageWrapper>
        <Title
          changeCountry={changeCountry}
          countriesInfo={countriesInfo}
          selectedInfo={selectedInfo}
          globalInfo={globalInfo}
        />
        <WorldChart countriesInfo={countriesInfo}></WorldChart>
        <CountryChart countryDailyInfo={countryDailyInfo} />
      </S.PageWrapper>
    </ThemeProvider>
  );
};

export default App;
