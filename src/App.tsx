import React, { useEffect, FC, useState } from "react";
import styled from "styled-components";
import axios, { AxiosResponse } from "axios";
import { SummaryCovidResponse, SpecificInfo, Country } from "./types";
import "./App.css";

const SelectWrapper = styled.div`
  min-height: 4vh;
`;

const CountriesSelect = styled.select`
  width: 20vw;
  float: right;
  white-space: nowrap;
  text-overflow: ellipsis;
  background: #000000;
  opacity: 0.9;
  color: green;
  padding: 8px;
  font-weight: bold;
  border-color: green;
`;

const TitlePanel = styled.div`
  width: 80vw;
  margin: 30px auto;
  border-radius: 4px;
  border: 1px solid black;
  padding: 1rem;
  background: #000000;
  opacity: 0.9;
`;

const Title = styled.p`
  font-size: 30px;
  font-weight: bold;
  color: white;
`;

const MainInfoWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.9);
  width: 90%;
  margin: 30px auto;
  border-radius: 4px;
  border: 1px solid black;
  display: flex;
  justify-content: space-around;
`;

const SpecificInfoWrapper = styled.div``;

const SpecificInfoTitle = styled.p`
  font-size: 16px;
  color: gray;
`;
const SpecificInfoIncreaseNum = styled.p`
  font-size: 24px;
  color: red;
`;

const SpecificInfoTotalNum = styled.p`
  font-size: 16px;
  color: white;
`;
const InfoText = styled.p`
  font-size: 14px;
  color: red;
  align-self: center;
`;

// api
function getSummaryCovidData(): Promise<AxiosResponse<SummaryCovidResponse>> {
  const url = "https://api.covid19api.com/summary";
  return axios.get(url);
}

const App: FC = () => {
  async function initData() {
    const { data } = await getSummaryCovidData();
    /** TODO:
     * 로컬 스토리지에 저장해둔 글로벌 정보가 있으면 해당 정보가 제일 먼저 보이도록,
     * 만약 없으면 Global로 가는 것
     *  */
    setGlobalInfo(data.Global);
    setCountriesInfo(data.Countries);
  }

  const [countriesInfo, setCountriesInfo] = useState<Array<Country>>();
  const [globalInfo, setGlobalInfo] = useState<SpecificInfo>({
    NewConfirmed: 0,
    NewDeaths: 0,
    NewRecovered: 0,
    TotalConfirmed: 0,
    TotalDeaths: 0,
    TotalRecovered: 0,
  });
  const [selectedInfo, setSelectedInfo] = useState<SpecificInfo>();

  useEffect(() => {
    initData();
  }, []);

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
    <div className="App">
      <TitlePanel>
        <SelectWrapper>
          <CountriesSelect onChange={changeCountry}>
            <option></option>
            {countriesInfo?.map((countryInfo, idx) => (
              <option key={idx} value={countryInfo.CountryCode}>
                {countryInfo.Country}
              </option>
            ))}
          </CountriesSelect>
        </SelectWrapper>
        <Title> 코로나바이러스감염증-19</Title>
        <MainInfoWrapper>
          <SpecificInfoWrapper>
            <SpecificInfoTitle> 전세계 확진환자 </SpecificInfoTitle>
            <SpecificInfoIncreaseNum>
              {globalInfo.NewConfirmed}
            </SpecificInfoIncreaseNum>
            <SpecificInfoTotalNum>
              {globalInfo.TotalConfirmed}
            </SpecificInfoTotalNum>
          </SpecificInfoWrapper>
          <SpecificInfoWrapper>
            <SpecificInfoTitle> 전세계 사망자 </SpecificInfoTitle>
            <SpecificInfoIncreaseNum>
              {globalInfo.NewDeaths}
            </SpecificInfoIncreaseNum>
            <SpecificInfoTotalNum>
              {globalInfo.TotalDeaths}
            </SpecificInfoTotalNum>
          </SpecificInfoWrapper>
          {selectedInfo ? (
            <>
              <SpecificInfoWrapper>
                <SpecificInfoTitle> 확진환자 </SpecificInfoTitle>
                <SpecificInfoIncreaseNum>
                  {selectedInfo.NewConfirmed}
                </SpecificInfoIncreaseNum>
                <SpecificInfoTotalNum>
                  {selectedInfo.TotalConfirmed}
                </SpecificInfoTotalNum>
              </SpecificInfoWrapper>
              <SpecificInfoWrapper>
                <SpecificInfoTitle> 사망자 </SpecificInfoTitle>
                <SpecificInfoIncreaseNum>
                  {selectedInfo.NewDeaths}
                </SpecificInfoIncreaseNum>
                <SpecificInfoTotalNum>
                  {selectedInfo.TotalDeaths}
                </SpecificInfoTotalNum>
              </SpecificInfoWrapper>
            </>
          ) : (
            <InfoText> 상단에서 나라를 선택하여 주세요.</InfoText>
          )}
        </MainInfoWrapper>
      </TitlePanel>
    </div>
  );
};

export default App;
