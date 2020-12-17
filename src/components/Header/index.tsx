import React from 'react';
import { Link } from 'react-router-dom';
import { 
  AppBar, 
  Toolbar,
  Tabs,
  Tab,
  Menu,
  MenuItem
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { RioIcons } from '../../theme/icons';

import LinkButton from '../LinkButton';
import FormDialog from '../../pages/Auth/FormDialog';

const useStyles = makeStyles(theme => ({
  toolBar: {
    margin: 0,
    paddingLeft: '5vw',
    paddingRight: '5vw'
  },

  tabs: {
    alignSelf: 'center',
  },

  aligner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

  serverOnline: {
    marginLeft: '1vw'
  },

  socialMediaAligners: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}));

const Header = (props: any) => {
  const styles = useStyles();
  const [tabIndex, setTabIndex] = React.useState<number>(0);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const isMobile = useMediaQuery('(max-width: 767px)');

  const handleSwitchTab = (event: React.ChangeEvent<{}>, index: number) => setTabIndex(index);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const [isVisible, setVisibility] = React.useState(false);
  const toggleForm = () => setVisibility(!isVisible);

  const scrollToHome = () => {
    window?.scroll({
      top: props?.homeEl?.current?.offsetTop,
      left: 0,
      behavior: 'smooth'
    });

    if(open) {
      handleClose();
    }
  }

  const scrollToHowToPlay = () => {
    try {
      window.scroll({
        top: props.howToPlayEl.current.offsetTop,
        left: 0,
        behavior: 'smooth'
      });
    } catch {
      setTimeout(scrollToHowToPlay, 0);
    } finally {
      if(open) {
        handleClose();
      }
    }
  }

  const openSocialMedia = (url : string) => {
    handleClose();
    window.open(url, '_blank');
  };

  return (
    <>
      <AppBar elevation={0}>
        <Toolbar className={styles.toolBar}>
          <img className={'logo'}
              src={process.env.PUBLIC_URL + '/media/logo/logo.svg'} />

          {!isMobile && (
            <>
              <Tabs className={styles.tabs}
                    value={tabIndex}
                    onChange={handleSwitchTab}
                    indicatorColor='primary'
                    textColor='primary'
              >
                <Tab label='Início'
                    component={Link}
                    to='/'
                    onClick={scrollToHome} />

                <Tab label='Quero jogar'
                    component={Link}
                    to='/'
                    onClick={scrollToHowToPlay} />

                {/*<Tab label='Entrar'
                    onClick={toggleForm} />*/}
              </Tabs>

              <div className={styles.socialMediaAligners}>
                <LinkButton 
                  icon={RioIcons.discord}
                  title={'Nosso discord'}
                  url={'https://discord.com/invite/fykY92X'} />

                <LinkButton 
                  title={'Página do Facebook'}
                  icon={RioIcons.facebook}
                  url={'https://www.facebook.com/gtario.com.br'} />

                <LinkButton 
                  icon={RioIcons.twitter}
                  title={'Twitter oficial'}
                  url={'https://twitter.com/gtariorp'} />

                <LinkButton 
                  icon={RioIcons.youtube}
                  title={'Canal do Youtube'}
                  url={'https://www.youtube.com/channel/UCePbAKMspUyp8yg44xSxhDA'} />
              </div>
            </>
          )}

          {isMobile && (
            <>
              <LinkButton 
                icon={RioIcons.more}
                title={'Opções'}
                onClick={handleMenu} />

                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={handleClose}
                >
                <MenuItem onClick={scrollToHome}>Início</MenuItem>
                <MenuItem onClick={scrollToHowToPlay}>Quero jogar</MenuItem>
                {/* <MenuItem onClick={() => {
                  toggleForm()
                  handleClose()}}>Entrar/Criar uma conta</MenuItem>*/} 
                <MenuItem onClick={() => openSocialMedia('https://discord.com/invite/fykY92X')}>Discord</MenuItem>
                <MenuItem onClick={() => openSocialMedia('https://www.facebook.com/gtario.com.br')}>Facebook</MenuItem>
                <MenuItem onClick={() => openSocialMedia('https://twitter.com/gtariorp')}>Twitter</MenuItem>
                <MenuItem onClick={() => openSocialMedia('https://www.youtube.com/channel/UCePbAKMspUyp8yg44xSxhDA')}>Youtube</MenuItem>
              </Menu>
            </>
          )}
        </Toolbar>
      </AppBar>

      <FormDialog
        toggle={isVisible}
        toggleForm={toggleForm}
      />
    </>
  ); 
}

export default Header;