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
  const { t, i18n } = useTranslation();
  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <S.TitleSection>
      <S.UpperWrppaer>
        <S.Empty />
        <S.Title> {t("titleName")}</S.Title>
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
            <S.SpecificInfoTitle> {t("worldConfirmed")} </S.SpecificInfoTitle>
            <S.SpecificInfoIncreaseNum>
              {globalInfo?.NewConfirmed}
            </S.SpecificInfoIncreaseNum>
            <S.SpecificInfoTotalNum>
              {globalInfo?.TotalConfirmed}
            </S.SpecificInfoTotalNum>
          </S.SpecificInfoWrapper>
          <S.SpecificInfoWrapper>
            <S.SpecificInfoTitle> {t("worldDeaths")} </S.SpecificInfoTitle>
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
                  {t("confirmed")}
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
                  {t("deaths")}
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
          <S.InfoText> {t("chooseCountry")}</S.InfoText>
        )}
      </S.MainInfoWrapper>
      <S.CaptionText>
        {t("dataTime")}
        <br /> {globalInfo?.Date}
      </S.CaptionText>
    </S.TitleSection>
  );
}
