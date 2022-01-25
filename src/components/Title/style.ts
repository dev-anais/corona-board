import styled from "styled-components";
import { theme, palette } from "styled-tools";

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
  min-width: 136px;
  float: right;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: green;
  padding: 8px;
  ${theme("fontStyle.caption_bold")};
  border-color: green;
  border-radius: 4px;
`;

export const SelectWrapper = styled.div`
  min-height: 4vh;
`;

export const Title = styled.p`
  ${theme("fontStyle.title_bold")}
`;

export const MainInfoWrapper = styled.div`
  margin: 30px auto;
  @media ${(props) => props.theme.laptop} {
    display: flex;
    justify-content: space-around;
  }

  @media ${(props) => props.theme.mobile} {
    display: block;
  }
`;

export const RowWrapper = styled.div`
  @media ${(props) => props.theme.laptop} {
    display: contents;
  }

  @media ${(props) => props.theme.mobile} {
    display: flex;
    justify-content: space-around;
  }
`;

export const SpecificInfoWrapper = styled.div``;

export const SpecificInfoTitle = styled.p`
  ${theme("fontStyle.body1_bold")}
  word-break: keep-all;
  color: gray;
`;
export const SpecificInfoIncreaseNum = styled.p`
  ${theme("fontStyle.subtitle_bold")}
  color: red;
`;

export const SpecificInfoTotalNum = styled.p`
  ${theme("fontStyle.body1")}
`;
export const InfoText = styled.p`
  ${theme("fontStyle.caption")}
  color: red;
  align-self: center;
`;
export const CaptionText = styled.p`
  text-align: right;
  margin: 0;
  ${theme("fontStyle.caption")}
`;

export const FlagImg = styled.img``;
