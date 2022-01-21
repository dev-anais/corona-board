import React, { useEffect, FC, useState } from "react";
import { getSummaryCovidData, getCountryInfo } from "./api";
import {
  SpecificInfo,
  Country,
  OneCountryInfoResponse,
  OneMonthChartInfo,
} from "./types";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import { Title, WorldChart } from "./components";
import * as S from "./style";
import "./App.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
  Legend
);
const App: FC = () => {
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

  async function getCountryData() {
    if (selectedInfo) {
      const { data } = await getCountryInfo(selectedInfo.CountryCode);
      setCountryDailyInfo(data);
    }
  }

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

  const [monthChartInfo, setMonthChartInfo] = useState<OneMonthChartInfo>();

  useEffect(() => {
    initData();
  }, []);

  useEffect(() => {
    const monthDate = new Date();
    monthDate.setMonth(monthDate.getMonth() - 1);
    const oneMonthData = countryDailyInfo?.filter(
      (item) => new Date(item.Date) > monthDate
    );

    oneMonthData &&
      setMonthChartInfo({
        label: oneMonthData?.map((item) =>
          item.Date.substring(0, item.Date.indexOf("T"))
        ),
        Confirmed: oneMonthData?.map((item) => item.Confirmed),
        Deaths: oneMonthData?.map((item) => item.Deaths),
      });
  }, [countryDailyInfo]);

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

  const data = {
    labels: monthChartInfo?.label,
    datasets: [
      {
        type: "line" as const,
        label: "Confirmed",
        backgroundColor: "red",
        borderColor: "red",
        data: monthChartInfo?.Confirmed,
      },
      {
        type: "line" as const,
        label: "Deaths",
        backgroundColor: "gray",
        borderColor: "gray",
        data: monthChartInfo?.Deaths,
      },
    ],
  };

  const config = {
    data: data,
  };

  return (
    <div className="App">
      <S.PageWrapper>
        <Title
          changeCountry={changeCountry}
          countriesInfo={countriesInfo}
          selectedInfo={selectedInfo}
          globalInfo={globalInfo}
        />
        <WorldChart countriesInfo={countriesInfo}></WorldChart>
        <S.ChartSection>
          {monthChartInfo && (
            <S.OneCountryChartWrapper>
              <Chart type="bar" data={config.data} />
            </S.OneCountryChartWrapper>
          )}
        </S.ChartSection>
      </S.PageWrapper>
    </div>
  );
};

export default App;
