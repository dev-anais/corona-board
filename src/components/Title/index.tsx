import * as S from "./style";
import React from "react";
import { SpecificInfo, Country } from "../../types";

interface Props {
  changeCountry: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  countriesInfo: Array<Country> | undefined;
  selectedInfo: SpecificInfo | undefined;
  globalInfo: SpecificInfo | undefined;
}

export default function TitleSection({
  changeCountry,
  countriesInfo,
  selectedInfo,
  globalInfo,
}: Props): React.ReactElement {
  return (
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
            {globalInfo?.NewConfirmed}
          </S.SpecificInfoIncreaseNum>
          <S.SpecificInfoTotalNum>
            {globalInfo?.TotalConfirmed}
          </S.SpecificInfoTotalNum>
        </S.SpecificInfoWrapper>
        <S.SpecificInfoWrapper>
          <S.SpecificInfoTitle> 전세계 사망자 </S.SpecificInfoTitle>
          <S.SpecificInfoIncreaseNum>
            {globalInfo?.NewDeaths}
          </S.SpecificInfoIncreaseNum>
          <S.SpecificInfoTotalNum>
            {globalInfo?.TotalDeaths}
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
      <S.CaptionText>데이터 불러온 날짜: {globalInfo?.Date}</S.CaptionText>
    </S.TitleSection>
  );
}
