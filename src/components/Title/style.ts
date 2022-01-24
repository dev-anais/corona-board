import styled from "styled-components";

export const TitleSection = styled.section`
  width: 80vw;
  margin: 30px auto 30px auto;
  border-radius: 8px;
  border: 1px solid #eee;
  padding: 32px;
  opacity: 0.9;
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

export const SelectWrapper = styled.div`
  min-height: 4vh;
`;

export const Title = styled.p`
  font-size: 2rem;
  font-weight: bold;
`;

export const MainInfoWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.9);
  margin: 30px auto;
`;

export const RowWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const SpecificInfoWrapper = styled.div``;

export const SpecificInfoTitle = styled.p`
  font-size: 1rem;
  font-weight: bold;
  word-break: keep-all;
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

export const FlagImg = styled.img``;
