import { createMuiTheme } from '@material-ui/core/styles';
import Roobert from './roobert';

export default createMuiTheme({
  palette: {
    background: {
      default: 'rgb(34, 34, 37)',
      paper: 'rgb(24, 24, 27)'
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
        boxShadow: '0 0 10px #333',
        backgroundColor: 'rgb(34, 34, 37)'
      }
    },

    MuiIconButton: {
      root: {
        width: 48,
        height: 48,
        backgroundColor: 'rgb(34, 34, 37)',
        '&:hover': {
          backgroundColor: 'rgb(54, 54, 57)'
        }
      }
    },

    MuiInputLabel: {
      root: {
        color: '#bfbfb1',
        fontSize: 12,
        lineHeight: '0',

        '&.Mui-disabled': {
          color: '#dfdfe1',
          fontSize: 12,
          lineHeight: '0',
          opacity: 0.7
        }
      },
      
    },

    MuiFormHelperText: {
      root: {
        fontSize: 13,
        fontWeight: 500,
        color: '#bfbfb1',
      }
    },

    MuiInputBase: {
      root: {
        '&.MuiInput-underline:before': {
          borderBottomColor: '#bfbfb1 !important', 
        },
      }
    },

    MuiInput: {
      root: {
        fontSize: 16,
        fontWeight: 500,
        color: '#bfbfb1',
      },
      input: {
        '&:-webkit-autofill': {
          WebkitBoxShadow: '0 0 0 1000px rgb(34, 34, 37) inset',
          WebkitTextFillColor: '#bfbfb1',
        }
      }
    },

    MuiTypography: {
      h1: {
        fontSize: 35,
        fontWeight: 500,
        color: '#dfdfe1',
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
        color: '#dfdfe1',
      },

      body2: {
        fontSize: 13,
        fontWeight: 500,
        color: '#bfbfb1',
      }
    },

    MuiAppBar: {
      root: {
        backgroundColor: 'rgb(34, 34, 37) !important',       
      }
    },

    MuiToolbar: {
      root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'rgb(34, 34, 37)',
        /*boxShadow: '0 0 5px black',
        borderBottom: '1px solid black' */
        borderBottom: '1px solid rgb(44, 44, 47)'
      }
    },

    MuiCircularProgress: {
      colorPrimary: {
        color: '#bfbfb1 !important'
      }
    },

    MuiMenu: {
      paper: {
        backgroundColor: 'rgb(24, 24, 27)',
        boxShadow: '0 0 10px #333',
      }
    },

    MuiDialog: {
      paper: {
        padding: '3vmin'
      }
    },

    MuiDialogTitle: {
      root: {
        fontSize: 35,
        fontWeight: 500,
        color: '#dfdfe1',
        alignSelf: 'flex-start',
        padding: 0
      }
    },

    MuiDialogContent: {
      root: {
        padding: '0'
      }
    },

    MuiDialogContentText: {
      root: {
        fontSize: 13,
        fontWeight: 500,
        color: '#bfbfb1',
      }
    },

    MuiMenuItem: {
      root: {
        fontSize: 16,
        fontWeight: 300,
        color: '#dfdfe1',
        '&:hover': {
          backgroundColor: 'rgb(54, 54, 57)'
        }
      }
    },

    MuiIcon: {
      colorPrimary: {
        color: '#dfdfe1'
      }
    },
    

    MuiContainer: {
      root: {
        backgroundColor: 'rgb(34, 34, 37)',
      },
    },

    MuiTooltip: {
      tooltip: {
        fontWeight: 400,
        fontSize: 16,
        color: '#bfbfb1',
        backgroundColor: 'rgb(34, 34, 37)',
        boxShadow: '0 0 10px #333',
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
        color: '#dfdfe1',
        textAlign: 'start',
        '&$selected': {
          color: '#1890ff',
          fontWeight: 600,
        },
      },

      textColorPrimary: {
        color: '#dfdfe1',
      }
    },
    
    MuiDialogActions: {
      root: {
        ['@media (max-width: 767px)']: { 
          alignItems: 'center',
          justifyContent: 'center'
        }
      }
    },

    MuiButton: {
      text: {
        textTransform: 'none',
        fontSize: 14,
        fontWeight: 600,
        alignSelf: 'center',

        ['@media (max-width: 767px)']: { 
          alignSelf: 'center !important',
        
        }
      },

      outlined: {
        textTransform: 'none',
        fontSize: 16,
        paddingTop: '3px',
        paddingBottom: '3px',
        paddingLeft: '6px',
        paddingRight: '6px',

        ['@media (max-width: 767px)']: { 
          fontSize: 14
        }
      },

      contained: {
        borderRadius: 4,
        backgroundColor: '#d953a5',
        border: '2px solid #d953a5',
        fontWeight: 500,
        fontSize: 16,
        textTransform: 'none',
        color: '#dfdfe1',
        boxShadow: 'none !important',
        padding: '2px',
        transition: 'all .3s',
        margin: 0,

        '&:hover' : {
          backgroundColor: '#d953a5',
          boxShadow: '0 0 5px #d953a5, 0 0 5px #d953a5 !important'
        },

        '&.Mui-disabled': {
          backgroundColor: 'rgb(34, 34, 37) !important',
          border: '2px solid rgb(34, 34, 37)',
          color: '#666'
        },

        ['@media (max-width: 767px)']: {
          fontSize: 14
        }
      }
    },
  }
});