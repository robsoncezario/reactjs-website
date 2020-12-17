import { createMuiTheme } from '@material-ui/core/styles';
import Roobert from './roobert';

export default createMuiTheme({
  palette: {
    background: {
      default: '#ffffff',
      paper: '#f5f5f5'
    },

    primary: {
      light: '#8753d9',
      main: '#d953a5',
      dark: '#002884',
      contrastText: '#fff',
    },

    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },

  typography: {
    fontFamily: Roobert.fontFamily,
  },

  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [Roobert],
      },
    },

    MuiFab: {
      root: {
        boxShadow: '0 0 10px #777',
        backgroundColor: '#ffffff'
      }
    },

    MuiIconButton: {
      root: {
        width: 48,
        height: 48,
        backgroundColor: '#ffffff',
        '&:hover': {
          backgroundColor: '#f0f0f0'
        }
      }
    },

    MuiInputLabel: {
      root: {
        color: '#2d2d2d',
        fontSize: 12,
        lineHeight: '0',

        '&.Mui-disabled': {
          color: '#0f0f0f',
          fontSize: 12,
          lineHeight: '0',
          opacity: 0.7
        }
      },
    },

    MuiInputBase: {
      root: {
        '&.MuiInput-underline:before': {
          borderBottomColor: '#2d2d2d !important', // Semi-transparent underline
        },
      }
    },

    MuiInput: {
      root: {
        fontSize: 16,
        fontWeight: 500,
        color: '#2d2d2d',
      }
    },

    MuiTypography: {
      h1: {
        fontSize: 35,
        fontWeight: 500,
        color: '#0f0f0f',
        alignSelf: 'flex-start'
      },

      subtitle1: {
        fontSize: 25,
        fontWeight: 500,
        color: '#d953a5'
      },

      subtitle2: {
        fontSize: 12,
        fontWeight: 500,
        color: '#d953a5',
        opacity: 0.8
      },

      body1: {
        fontWeight: 400,
        fontSize: 13,
        color: '#0f0f0f',
      },

      body2: {
        fontSize: 13,
        fontWeight: 500,
        color: '#2d2d2d',
      }
    },

    MuiAppBar: {
      root: {
        backgroundColor: '#ffffff !important',       
      }
    },

    MuiToolbar: {
      root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#ffffff',
        /*boxShadow: '0 0 5px black',
        borderBottom: '1px solid black' */
        borderBottom: '1px solid #e7e7e7'
      }
    },

    MuiMenu: {
      paper: {
        backgroundColor: '#f5f5f5',
        boxShadow: '0 0 10px #777'
      }
    },

    MuiDialogTitle: {
      root: {
        fontSize: 35,
        fontWeight: 500,
        color: '#0f0f0f',
        alignSelf: 'flex-start'
      }
    },

    MuiDialogContentText: {
      root: {
        fontSize: 13,
        fontWeight: 500,
        color: '#2d2d2d',
      }
    },

    MuiMenuItem: {
      root: {
        fontSize: 16,
        fontWeight: 300,
        color: '#0f0f0f',
        '&:hover': {
          backgroundColor: '#f0f0f0'
        }
      }
    },

    MuiIcon: {
      colorPrimary: {
        color: '#0f0f0f'
      }
    },

    MuiContainer: {
      root: {
        backgroundColor: '#ffffff',
      },
    },

    MuiTooltip: {
      tooltip: {
        fontWeight: 400,
        fontSize: 16,
        color: '#2d2d2d',
        backgroundColor: '#ffffff',
        boxShadow: '0 0 10px #777',
      }
    },

    MuiTabs: {
      root: {
        flexShrink: 1,
        height: 30,
        minHeight: 30,
      },

      indicator: {
        height: 1
      },
    },

    MuiTab: {
      root: {
        minWidth: '0 !important',
        height: 30,
        minHeight: 30,
        textTransform: 'none',
        fontWeight: 400,
        fontSize: 15,
        color: '#0f0f0f',
        textAlign: 'start',
        '&$selected': {
          color: '#1890ff',
          fontWeight: 600,
        },
      },

      textColorPrimary: {
        color: '#0f0f0f',
      }
    },
  }
});