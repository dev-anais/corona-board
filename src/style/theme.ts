interface thmeProps {
  [key: string]: any;
}

const size = {
  mobile: "770px",
  laptop: "1460px",
};

const theme: thmeProps = {
  palette: {},
  fontStyle: {
    title: `font-size: 2rem;`,
    subtitle: `font-size: 1.4rem;`,
    body1: `font-size: 1.2rem;`,
    body2: `font-size : 0.9rem`,
    caption: `font-size: 1rem;`,
  },
  commonPadding: `padding: 16px 20px;`,
  mobile: `(max-width: ${size.mobile})`,
  laptop: `(max-width: ${size.laptop})`,
};

Object.keys(theme.fontStyle).forEach((key) => {
  theme.fontStyle[`${key}_bold`] = `${theme.fontStyle[key]}
                                      font-weight: bold;
                                      `;
});
export default theme;
