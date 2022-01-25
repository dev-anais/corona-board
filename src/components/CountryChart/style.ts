import styled from "styled-components";
import { theme } from "styled-tools";

export const ChartSection = styled.section`
  padding: 32px 0 32px;
`;
export const ChartTitle = styled.p`
  ${theme("fontStyle.title_bold")};
`;
export const OneCountryChartWrapper = styled.div`
  margin: 0 auto;
  @media ${(props) => props.theme.laptop} {
    width: 80vw;
  }
  @media ${(props) => props.theme.mobile} {
    width: 90vw;
  }
`;
export const InfoText = styled.p`
  height: 80px;
  width: 80vw;
  margin: 40px auto 0;
  &:hover {
    cursor: pointer;
  }
`;
export const CaptionText = styled.p`
  text-align: right;
  margin: 0;
  ${theme("fontStyle.caption")};
`;
