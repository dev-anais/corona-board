import styled from "styled-components";
import { theme } from "styled-tools";

export const DataReference = styled.section`
  width: 80vw;
  margin: 32px auto;
`;

export const ReferenceTitle = styled.p`
  ${theme("fontStyle.title_bold")};
`;

export const ReferenceUl = styled.ul`
  text-align: start;
`;
export const ReferenceLi = styled.li`
  ${theme("fontStyle.caption")};
`;
