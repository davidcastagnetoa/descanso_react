module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'l-bg': '#e6e7ee',
        'd-bg': '#202124',
        'l-text': '#44476a',
        'd-text': '#bdc1c6',
        'l-border': '#d1d9e6',
        'd-border': '#18181f',
        '--l-gradient': 'linear-gradient(180deg, #e6e7ee, #d7d8df)',
        '--r-gradient': 'radial-gradient(#e6e7ee, #d7d8df)',
        '--d-l-gradient': 'linear-gradient(180deg, #202124, #1A1A1D)',
        '--d-r-gradient': 'radial-gradient(#202124, #1b1c1e)',
      },
      boxShadow: {
        'l-shadow': '2px 2px 4px #b8b8b8, -2px -2px 4px #f1f1f1;',
        'd-shadow': '3px 3px 7px #131416, -3px -3px 7px #2d2e32',
        'l-inset': 'inset 2px 2px 5px #b8b9be, inset -3px -3px 7px #fbfbfb',
        'd-inset': 'inset 2px 2px 4px #131416, inset -2px -2px 4px #2d2e32',
      },
      margin: {
        320: '320px',
      },
      width: {
        190: '190px',
        275: '275px',
        300: '300px',
        340: '340px',
        350: '350px',
        656: '656px',
        880: '880px',
        508: '508px',
      },
      height: {
        80: '80px',
        340: '340px',
        370: '370px',
        420: '420px',
        510: '510px',
        600: '600px',
        685: '685px',
        800: '800px',
        '90vh': '90vh',
      },
      flex: {
        0.7: '0.7 1 0%',
      },
      maxHeight: {
        370: '370px',
      },
      minWidth: {
        210: '210px',
        350: '350px',
        620: '620px',
      },
      textColor: {
        lightGray: '#F1EFEE',
        primary: '#FAFAFA',
        secColor: '#efefef',
        navColor: '#BEBEBE',
      },
      backgroundColor: {
        mainColor: '#FBF8F9',
        secondaryColor: '#F0F0F0',
        blackOverlay: 'rgba(0, 0 ,0 ,0.7)',
      },
      keyframes: {
        'slide-in': {
          '0%': {
            '-webkit-transform': 'translateX(-200px)',
            transform: 'translateX(-200px)',
          },
          '100%': {
            '-webkit-transform': 'translateX(0px)',
            transform: 'translateX(0px)',
          },
        },

        'slide-fwd': {
          '0%': {
            '-webkit-transform': 'translateZ(0px)',
            transform: 'translateZ(0px)',
          },
          '100%': {
            '-webkit-transform': 'translateZ(160px)',
            transform: 'translateZ(160px)',
          },
        },
      },
      animation: {
        'slide-in': 'slide-in 0.5s ease-out',
        'slide-fwd': ' slide-fwd 0.45s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
      },
      transitionProperty: {
        height: 'height',
      },
    },
    cursor: {
      'zoom-in': 'zoom-in',
      pointer: 'pointer',
    },
  },
  variants: {
    // backgroundColor: ['active'],
    extend: {},
  },
  plugins: [],
};