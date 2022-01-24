import styled from "styled-components";
import { theme, palette } from "styled-tools";

export const ChartSection = styled.section`
  padding: 32px 0 32px;
`;
export const ChartTitle = styled.p`
  ${theme("fontStyle.title")};
  font-weight: bold;
`;
export const OneCountryChartWrapper = styled.div`
  height: 400px;
  width: 80vw;
  margin: 0 auto;
`;
export const InfoText = styled.p`
  height: 80px;
  width: 80vw;
  margin: 40px auto 0;
`;
export const CaptionText = styled.p`
  text-align: right;
  margin: 0;
  ${theme("fontStyle.caption")};
`;
