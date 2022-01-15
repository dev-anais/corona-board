import React, { useEffect, FC, useState, ReactNode } from "react";
import { getSummaryCovidData } from "./api";
import { SpecificInfo, Country } from "./types";
import * as S from "./style";
import "./App.css";

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

  const [rankIdx, setRankIdx] = useState<number>(0);

  const [rankList, setRankList] = useState<Array<ReactNode>>();

  useEffect(() => {
    initData();
  }, []);

  useEffect(() => {
    makeRankTableRow(rankIdx);
  }, [countriesInfo, rankIdx]);

  const changeCountry = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    const selectedCountry = countriesInfo?.filter(
      (country) => country.CountryCode === value
    )[0];

    if (selectedCountry) {
      setSelectedInfo(selectedCountry);
    }
  };

  const makeRankTableRow = (rankIdx: number) => {
    if (!!!countriesInfo) return;

    const copiedRankList = Array.from(rankList || []);
    for (let idx = rankIdx * 50; idx < rankIdx * 50 + 50; idx++) {
      if (!!!countriesInfo[idx]) break;
      copiedRankList.push(
        <tr key={idx}>
          <td>{idx + 1}</td>
          <td>{countriesInfo[idx].Country}</td>
          <td>{countriesInfo[idx].TotalConfirmed}</td>
          <td>{countriesInfo[idx].TotalDeaths}</td>
          <td>{countriesInfo[idx].NewConfirmed}</td>
          <td>{countriesInfo[idx].NewDeaths}</td>
        </tr>
      );
    }
    setRankList(copiedRankList);
  };

  return (
    <div className="App">
      <S.PageWrapper>
        <S.TitleSection>
          <S.SelectWrapper>
            <S.CountriesSelect onChange={changeCountry}>
              <option></option>
              {countriesInfo?.map((countryInfo, idx) => (
                <option key={idx} value={countryInfo.CountryCode}>
                  {countryInfo.Country}
                </option>
              ))}
            </S.CountriesSelect>
          </S.SelectWrapper>
          <S.Title> 코로나바이러스감염증-19</S.Title>
          <S.MainInfoWrapper>
            <S.SpecificInfoWrapper>
              <S.SpecificInfoTitle> 전세계 확진환자 </S.SpecificInfoTitle>
              <S.SpecificInfoIncreaseNum>
                {globalInfo.NewConfirmed}
              </S.SpecificInfoIncreaseNum>
              <S.SpecificInfoTotalNum>
                {globalInfo.TotalConfirmed}
              </S.SpecificInfoTotalNum>
            </S.SpecificInfoWrapper>
            <S.SpecificInfoWrapper>
              <S.SpecificInfoTitle> 전세계 사망자 </S.SpecificInfoTitle>
              <S.SpecificInfoIncreaseNum>
                {globalInfo.NewDeaths}
              </S.SpecificInfoIncreaseNum>
              <S.SpecificInfoTotalNum>
                {globalInfo.TotalDeaths}
              </S.SpecificInfoTotalNum>
            </S.SpecificInfoWrapper>
            {selectedInfo ? (
              <>
                <S.SpecificInfoWrapper>
                  <S.SpecificInfoTitle>
                    <S.FlagImg
                      src={`https://flagcdn.com/16x12/${selectedInfo.CountryCode.toLowerCase()}.png`}
                      width="16"
                      height="12"
                      alt={selectedInfo.CountryCode}
                    />{" "}
                    확진환자
                  </S.SpecificInfoTitle>
                  <S.SpecificInfoIncreaseNum>
                    {selectedInfo.NewConfirmed}
                  </S.SpecificInfoIncreaseNum>
                  <S.SpecificInfoTotalNum>
                    {selectedInfo.TotalConfirmed}
                  </S.SpecificInfoTotalNum>
                </S.SpecificInfoWrapper>
                <S.SpecificInfoWrapper>
                  <S.SpecificInfoTitle>
                    <S.FlagImg
                      src={`https://flagcdn.com/16x12/${selectedInfo.CountryCode.toLowerCase()}.png`}
                      width="16"
                      height="12"
                      alt={selectedInfo.CountryCode}
                    />{" "}
                    사망자
                  </S.SpecificInfoTitle>
                  <S.SpecificInfoIncreaseNum>
                    {selectedInfo.NewDeaths}
                  </S.SpecificInfoIncreaseNum>
                  <S.SpecificInfoTotalNum>
                    {selectedInfo.TotalDeaths}
                  </S.SpecificInfoTotalNum>
                </S.SpecificInfoWrapper>
              </>
            ) : (
              <S.InfoText> 상단에서 나라를 선택하여 주세요.</S.InfoText>
            )}
          </S.MainInfoWrapper>
          <S.CaptionText>데이터 불러온 날짜: {globalInfo.Date}</S.CaptionText>
        </S.TitleSection>
        <S.RankingSection>
          <table>
            <thead>
              <tr>
                <th>순위</th>
                <th>국가명</th>
                <th>총 확진자</th>
                <th>총 사망자</th>
                <th>오늘 확진자</th>
                <th>오늘 사망자</th>
              </tr>
            </thead>
            <tbody>{rankList}</tbody>
          </table>
          {rankIdx <= 2 && (
            <S.ShowMoreButton onClick={() => setRankIdx(rankIdx + 1)}>
              더보기
            </S.ShowMoreButton>
          )}
        </S.RankingSection>
        <S.ChartSection>
          <S.GlobalChartWrapper></S.GlobalChartWrapper>
        </S.ChartSection>
      </S.PageWrapper>
    </div>
  );
};

export default App;
