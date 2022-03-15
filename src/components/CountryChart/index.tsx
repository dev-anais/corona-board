import * as S from "./style";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  OneMonthChartInfo,
  OneCountryInfoResponse,
  ShowingDate,
} from "../../types";
import { Chart as ChartJS, registerables } from "chart.js";
import { Chart } from "react-chartjs-2";

ChartJS.register(...registerables);

interface Props {
  countryDailyInfo: Array<OneCountryInfoResponse> | undefined;
}

export default function CountryChart({
  countryDailyInfo,
}: Props): React.ReactElement {
  const { t } = useTranslation();
  useEffect(() => {
    makeDateList();
    makeChartData("initData");
  }, [countryDailyInfo]);

  const [monthChartInfo, setMonthChartInfo] = useState<OneMonthChartInfo>();

  const [dateList, setDateList] = useState<Array<ShowingDate>>([]);

  const [selectedDate, setSelectedDate] = useState<ShowingDate>();

  useEffect(() => {
    selectedDate && makeChartData(selectedDate);
  }, [selectedDate]);

  const makeChartData = (dateInfo: ShowingDate | "initData") => {
    let oneMonthData;
    if (dateInfo === "initData") {
      const monthDate = new Date();
      monthDate.setMonth(monthDate.getMonth() - 1);
      oneMonthData = countryDailyInfo?.filter(
        (item) => new Date(item.Date) > monthDate
      );
    } else {
      oneMonthData = countryDailyInfo?.filter(
        (item) =>
          new Date(item.Date) >= new Date(dateInfo.startDate) &&
          new Date(item.Date) <= new Date(dateInfo.endDate)
      );
    }
    if (oneMonthData) {
      setMonthChartInfo({
        label: oneMonthData?.map((item) =>
          item.Date.substring(5, item.Date.indexOf("T"))
        ),
        Confirmed: oneMonthData?.map((item) => item.Confirmed),
        Deaths: oneMonthData?.map((item) => item.Deaths),
      });
    }
  };

  const makeDateList = () => {
    const monthDate = new Date();
    const copiedDailyInfo = Array.from(countryDailyInfo || []);
    const resultArray: Array<ShowingDate> = [];
    if (copiedDailyInfo.length === 0) return;
    while (copiedDailyInfo.length > 1) {
      monthDate.setMonth(monthDate.getMonth() - 1);
      const dateIdx = copiedDailyInfo.findIndex(
        (item) => new Date(item.Date) >= monthDate
      );
      const startDate = copiedDailyInfo[dateIdx].Date;
      const endDate = copiedDailyInfo[copiedDailyInfo.length - 1].Date;
      resultArray.push({
        startDate: startDate.substring(0, startDate.indexOf("T")),
        endDate: endDate.substring(0, endDate.indexOf("T")),
      });
      copiedDailyInfo.splice(dateIdx, copiedDailyInfo.length - 1);
    }
    setDateList([...resultArray]);
  };

  const changeDate = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const startDate = e.target.value;
    const selectedValue = dateList.filter(
      (item) => item.startDate === startDate
    )[0];
    selectedValue && setSelectedDate({ ...selectedValue });
  };

  const chartData = {
    labels: monthChartInfo?.label,
    datasets: [
      {
        type: "line" as const,
        label: "Confirmed",
        backgroundColor: "#ED1313",
        borderColor: "#ED1313",
        data: monthChartInfo?.Confirmed,
      },
      {
        type: "line" as const,
        label: "Deaths",
        backgroundColor: "#909090",
        borderColor: "#909090",
        data: monthChartInfo?.Deaths,
      },
    ],
  };
  return (
    <S.ChartSection>
      {monthChartInfo ? (
        <>
          <S.ChartTitle>{t("selectedCountryChart")}</S.ChartTitle>
          <S.OneCountryChartWrapper>
            <S.ChartDateSelect onChange={changeDate}>
              {dateList?.map((dateList, idx) => (
                <option key={idx} value={dateList.startDate}>
                  {dateList.startDate} ~ {dateList.endDate}
                </option>
              ))}
            </S.ChartDateSelect>
            <Chart type="bar" data={chartData} />
          </S.OneCountryChartWrapper>
        </>
      ) : (
        <S.InfoText onClick={() => window.scrollTo(0, 0)}>
          {t("pleaseSelectContry")}
        </S.InfoText>
      )}
    </S.ChartSection>
  );
}
