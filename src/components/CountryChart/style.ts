import styled from "styled-components";
import { theme, palette } from "styled-tools";

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

export const ChartDateSelect = styled.select`
  width: 20vw;
  min-width: 136px;
  float: right;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: ${palette("green")};
  border-color: ${palette("green")};
  padding: 4px;
  ${theme("fontStyle.body3")};
  font-weight: bold;
  border-radius: 4px;
  margin: 0 10px 8px;
  background-color: ${palette("dark_primary")};
`;
