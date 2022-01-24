import * as S from "./style";
import React, { ReactNode, useEffect, useState } from "react";
import { Country } from "../../types";
import { thousandSeperator } from "../../helper";
interface Props {
  countriesInfo: Array<Country> | undefined;
}
export default function WorldChart({
  countriesInfo,
}: Props): React.ReactElement {
  const [rankIdx, setRankIdx] = useState<number>(0);

  const [rankList, setRankList] = useState<Array<ReactNode>>();

  useEffect(() => {
    makeRankTableRow(rankIdx);
  }, [countriesInfo, rankIdx]);

  const makeRankTableRow = (rankIdx: number) => {
    if (!!!countriesInfo) return;

    const copiedRankList = Array.from(rankList || []);
    for (let idx = rankIdx * 50; idx < rankIdx * 50 + 50; idx++) {
      if (!!!countriesInfo[idx]) break;
      copiedRankList.push(
        <S.RankingTr key={idx}>
          <S.RankingTd>{idx + 1}</S.RankingTd>
          <S.RankingTd>{countriesInfo[idx].Country}</S.RankingTd>
          <S.RankingTd>
            {thousandSeperator(countriesInfo[idx].TotalConfirmed)}
          </S.RankingTd>
          <S.RankingTd>
            {thousandSeperator(countriesInfo[idx].TotalDeaths)}
          </S.RankingTd>
          <S.RankingTd>
            {thousandSeperator(countriesInfo[idx].NewConfirmed)}
          </S.RankingTd>
          <S.RankingTd>
            {thousandSeperator(countriesInfo[idx].NewDeaths)}
          </S.RankingTd>
        </S.RankingTr>
      );
    }
    setRankList(copiedRankList);
  };

  return (
    <S.RankingSection>
      <S.RankingTitle> 국가별 코로나 현황표 </S.RankingTitle>
      <S.RankingTable>
        <thead>
          <S.RankingHeadTr>
            <S.RankingTh>순위</S.RankingTh>
            <S.RankingTh>국가명</S.RankingTh>
            <S.RankingWideTh>총 확진자</S.RankingWideTh>
            <S.RankingWideTh>총 사망자</S.RankingWideTh>
            <S.RankingTh>오늘 확진자</S.RankingTh>
            <S.RankingTh>오늘 사망자</S.RankingTh>
          </S.RankingHeadTr>
        </thead>
        <tbody>{rankList}</tbody>
      </S.RankingTable>
      {rankIdx <= 2 && (
        <S.ShowMoreButton onClick={() => setRankIdx(rankIdx + 1)}>
          더보기
        </S.ShowMoreButton>
      )}
    </S.RankingSection>
  );
}
