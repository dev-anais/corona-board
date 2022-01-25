import { createGlobalStyle } from "styled-components";
import { palette } from "styled-tools";

const GlobalStyles = createGlobalStyle`
body {
    background-color:${palette("dark_primary")};
    margin: 0;
}
`;

export default GlobalStyles;
