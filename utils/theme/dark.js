
import GeneralTheme from './generalTheme';

export const darkTheme = {
  ...GeneralTheme,
  palette: {
    mode: 'dark',
    primary: {
      main: '#0061A7',
      dark: '#06377B',
    },
    secondary: {
      light: '#D0D0D0',
      main: '#A8A8A8',
      dark: '#808080',
    },
    warning: {
      main: '#FF6F6F',
      light: '#FFE4E4',
    },
    success: {
      main: '#75D37F',
      light: '#E7FFDC',
    },
    info: {
      main: '#66A3FF',
      soft: '#EAF2FF',
    },
    custom: {
      grey: '#BCC8E7',
    },
  },
};
