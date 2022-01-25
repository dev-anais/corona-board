import styled from "styled-components";
import { theme, palette } from "styled-tools";

export const TitleSection = styled.section`
  border-radius: 8px;
  border: 1px solid ${palette("gray")};
  margin: 30px auto;

  @media ${(props) => props.theme.laptop} {
    padding: 32px;
    width: 80vw;
  }
  @media ${(props) => props.theme.mobile} {
    padding: 10px 0;
    width: 90vw;
  }
`;

export const CountriesSelect = styled.select`
  width: 20vw;
  min-width: 136px;
  float: right;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: ${palette("green")};
  border-color: ${palette("green")};
  padding: 8px;
  ${theme("fontStyle.caption_bold")};
  border-radius: 4px;
  margin-right: 10px;
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
  color: ${palette("deep_gray")};
`;
export const SpecificInfoIncreaseNum = styled.p`
  ${theme("fontStyle.subtitle_bold")}
  color: ${palette("red")};
`;

export const SpecificInfoTotalNum = styled.p`
  ${theme("fontStyle.body1")}
`;
export const InfoText = styled.p`
  ${theme("fontStyle.caption")}
  color: ${palette("red")};
  align-self: center;
`;
export const CaptionText = styled.p`
  text-align: right;
  margin: 0 10px 0 0;
  ${theme("fontStyle.caption")}
`;

export const FlagImg = styled.img``;
