import styled from "styled-components";
import { theme, palette } from "styled-tools";

export const RankingSection = styled.section``;
export const RankingTitle = styled.p`
  ${theme("fontStyle.title_bold")};
`;
export const ShowMoreButton = styled.button`
  background-color: ${palette("white")};
  margin: 8px 0;
  height: 40px;
  width: 80vw;
  ${theme("fontStyle.caption_bold")};
`;
export const RankingTable = styled.table`
  margin: 0 auto;
  border-spacing: 0;
  border-collapse: collapse;
  height: 100%;
  width: 80vw;
  word-break: keep-all;
  @media ${(props) => props.theme.laptop} {
    ${theme("fontStyle.caption")};
  }
  @media ${(props) => props.theme.mobile} {
    ${theme("fontStyle.body2")};
  }
`;
export const RankingTh = styled.th`
  border: solid ${palette("gray")};
  border-width: 0 1px 1px 0;
  position: sticky;
  top: 0px;
  @media ${(props) => props.theme.laptop} {
    min-width: 40px;
  }
  @media ${(props) => props.theme.mobile} {
    min-width: 0px;
  }
`;
export const RankingWideTh = styled.th`
  border: solid ${palette("gray")};
  border-width: 0 1px 1px 0;
  width: 10vw;
`;
export const RankingTr = styled.tr`
  height: 36px;
`;
export const RankingHeadTr = styled.tr`
  height: 36px;
  position: sticky;
  top: 0;
  background-color: ${palette("deep_gray")};
`;

export const RankingTd = styled.td`
  border: solid ${palette("gray")};
  border-width: 0 1px 1px 0;
`;
