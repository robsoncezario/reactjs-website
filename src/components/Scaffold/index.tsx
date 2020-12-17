import React, { createRef } from 'react';

import Header from '../Header/index';
import PageRoutes from '../../pages/Routes';
import { 
  Fab,
  Tooltip 
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import * as fiveM from '../../fivem/utils';

const useStyles = makeStyles(theme => ({
  floatingActionButton: {
    position: 'fixed',
    padding: 0,
    bottom: '5vh',
    right: '5vw',
    backgroundColor: theme.palette.background.paper,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

  fivemLogo: {
    width: '4vh',
    height: '4vh'
  }
}));

const Scaffold = () => {
  const styles = useStyles();
  const homeEl = createRef<any>();
  const howToPlayEl = createRef<any>();
  
  return (
    <>
      <Header homeEl={homeEl}
              howToPlayEl={howToPlayEl} />
      <PageRoutes homeEl={homeEl}
                  howToPlayEl={howToPlayEl} />
      <Tooltip title="Conectar-se ao servidor">
        <Fab variant="extended"
            size="large"
            color="primary"
            aria-label="add"
            className={styles.floatingActionButton}
            href={fiveM.getLaunchUrl}>

          <img className={styles.fivemLogo}
               src={process.env.PUBLIC_URL + '/media/logo/fivem.png'} />
        </Fab>
      </Tooltip>
    </>
  );
}

export default Scaffold;
