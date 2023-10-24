import localFont from 'next/font/local';

const poppins = localFont({
  src: [
    {
      path: '../../../public/fonts/Poppins-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/Poppins-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/Poppins-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/Poppins-Regular.ttf',
      weight: '400',
      style: 'bold',
    },
    {
      path: '../../../public/fonts/Poppins-Light.ttf',
      weight: 'normal',
      style: 'normal',
    },
  ],
});

const theme = {
  shadows: [
    'none',
    '0px 0.625vw 2.6vw 0px rgba(112, 126, 164, 0.1)',
    '0px 0.1041666667vw 0.2604166667vw 0px rgba(38, 51, 77, 0.1)',
    ...Array(22).fill(
      '0px 0.1041666667vw 0.2604166667vw 0px rgba(38, 51, 77, 0.1)'
    ),
  ],
  breakpoints: {
    values: {
      min: 0,
      xs: 250,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      desktopS: 1024,
      desktopM: 1360,
      desktopL: 1920,
      desktopXL: 2560,
      desktopXXL: 3840,
    },
  },
  spacing: (factor) => `${(8 * 100 * factor) / 1920}vw`,
  radius: (factor) => `${(10 * 100 * factor) / 1920}vw`,
  typography: {
    fontFamily: [`${poppins.style.fontFamily}`, 'sans-serif'].join(','),
    display1: {
      fontWeight: 700,
      fontSize: '2.08333333333vw',
      lineHeight: 1.2,
      letterSpacing: '0.1052vw',
    },
    display2: {
      fontWeight: 700,
      fontSize: '1.66667vw',
      lineHeight: 1.2,
      letterSpacing: '0.083vw',
    },
    title1: {
      fontWeight: 400,
      fontSize: '1.302vw',
      lineHeight: 1.2,
      letterSpacing: '0.065vw',
    },
    title2: {
      fontWeight: 400,
      fontSize: '1.0417vw',
      lineHeight: 1.2,
      letterSpacing: '0.052vw',
    },
    buttonLarge: {
      fontWeight: 700,
      fontSize: '1.0417vw',
      lineHeight: 1.2,
      letterSpacing: '0.10417vw',
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      fontSize: '0.9375vw',
      lineHeight: '1',
      letterSpacing: '0.04688vw',
    },
    body1: {
      fontWeight: 700,
      fontSize: '1.25vw',
      lineHeight: 1.2,
    },
    body2: {
      fontWeight: 700,
      fontSize: '1.1458333333vw',
      lineHeight: 1.2,
    },
    body3: {
      fontWeight: 400,
      fontSize: '1.04166666667vw',
      lineHeight: 1.2,
    },
    body4: {
      fontWeight: 400,
      fontSize: '0.9375vw',
      lineHeight: 1.2,
    },
    body5: {
      fontWeight: 400,
      fontSize: '0.8333333333vw',
      lineHeight: 1.2,
    },
    body6: {
      fontWeight: 300,
      fontSize: '0.7291666667vw',
      lineHeight: 1.2,
    },
    body7: {
      fontWeight: 500,
      fontSize: '0.625vw',
      lineHeight: 1.2,
    },
  },
};

export default theme;
