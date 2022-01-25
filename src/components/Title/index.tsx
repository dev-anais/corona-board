import * as S from "./style";
import React from "react";
import { SpecificInfo, Country } from "../../types";
import { useTranslation } from "react-i18next";

interface Props {
  changeCountry: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  countriesInfo: Array<Country> | undefined;
  selectedInfo: SpecificInfo | undefined;
  globalInfo: SpecificInfo | undefined;
}

export default function Title({
  changeCountry,
  countriesInfo,
  selectedInfo,
  globalInfo,
}: Props): React.ReactElement {
  const { i18n } = useTranslation();
  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <S.TitleSection>
      <S.UpperWrppaer>
        <S.Empty />
        <S.Title> 코로나바이러스감염증-19</S.Title>
        <S.SelectWrapper>
          <S.UserSelect onChange={changeLanguage}>
            <option key={"lang0"} value="en">
              Language
            </option>
            <option key={"lang1"} value="en">
              English
            </option>
            <option key={"lang2"} value="ko">
              한국어
            </option>
          </S.UserSelect>
          <S.UserSelect onChange={changeCountry}>
            <option>Country</option>
            {countriesInfo?.map((countryInfo, idx) => (
              <option key={idx} value={countryInfo.CountryCode}>
                {countryInfo.Country}
              </option>
            ))}
          </S.UserSelect>
        </S.SelectWrapper>
      </S.UpperWrppaer>
      <S.MainInfoWrapper>
        <S.RowWrapper>
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
        </S.RowWrapper>

        {selectedInfo ? (
          <>
            <S.RowWrapper>
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
            </S.RowWrapper>
          </>
        ) : (
          <S.InfoText> 상단에서 나라를 선택하여 주세요.</S.InfoText>
        )}
      </S.MainInfoWrapper>
      <S.CaptionText>
        데이터 불러온 날짜
        <br /> {globalInfo?.Date}
      </S.CaptionText>
    </S.TitleSection>
  );
}
