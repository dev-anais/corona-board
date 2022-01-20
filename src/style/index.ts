import styled from "styled-components";

export const PageWrapper = styled.article`
  background: #000000;
  opacity: 0.9;
  color: white;
`;

export const SelectWrapper = styled.div`
  min-height: 4vh;
`;

export const CountriesSelect = styled.select`
  width: 20vw;
  float: right;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: green;
  padding: 8px;
  font-weight: bold;
  border-color: green;
  border-radius: 4px;
`;

export const TitleSection = styled.section`
  width: 80vw;
  margin: 0 auto 30px auto;
  border-radius: 8px;
  border: 1px solid #eee;
  padding: 1rem;
  background: #000000;
  opacity: 0.9;
`;

export const Title = styled.p`
  font-size: 30px;
  font-weight: bold;
`;

export const MainInfoWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.9);
  width: 90%;
  margin: 30px auto;
  display: flex;
  justify-content: space-around;
`;

export const SpecificInfoWrapper = styled.div``;

export const SpecificInfoTitle = styled.p`
  font-size: 16px;
  color: gray;
`;
export const SpecificInfoIncreaseNum = styled.p`
  font-size: 24px;
  color: red;
`;

export const SpecificInfoTotalNum = styled.p`
  font-size: 16px;
`;
export const InfoText = styled.p`
  font-size: 14px;
  color: red;
  align-self: center;
`;
export const CaptionText = styled.p`
  text-align: right;
  margin: 0;
  font-size: 14px;
`;
export const RankingSection = styled.section``;
export const FlagImg = styled.img``;
export const ShowMoreButton = styled.button`
  background-color: white;
  margin: 8px 0;
  height: 40px;
  width: 80vw;
`;
export const RankingTable = styled.table`
  margin: 0 auto;
  border-spacing: 0;
  border-collapse: collapse;
  height: 100%;
  width: 80vw;
`;
export const RankingTh = styled.th`
  border: solid #eee;
  border-width: 0 1px 1px 0;
  min-width: 40px;
  position: sticky;
  top: 0px;
`;
export const RankingWideTh = styled.th`
  width: 16%;
  border: solid #eee;
  border-width: 0 1px 1px 0;
`;
export const RankingTr = styled.tr`
  height: 36px;
`;
export const RankingHeadTr = styled.tr`
  height: 36px;
  position: sticky;
  top: 0;
  background-color: gray;
`;

export const RankingTd = styled.td`
  border: solid #eee;
  border-width: 0 1px 1px 0;
`;

export const ChartSection = styled.section``;
export const OneCountryChartWrapper = styled.div``;
