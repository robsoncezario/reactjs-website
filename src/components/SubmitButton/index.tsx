import React from 'react';
import { 
  Button,
  CircularProgress,
  makeStyles
} from '@material-ui/core';
import { useRecoilValue } from 'recoil';

const useStyles = makeStyles(theme => ({
  loader: {
    width: '10px !important',
    height: '10px !important',
    marginRight: 5
  }
}));

const SubmitButton = (props: any) => {
  const styles = useStyles();
  const buttonSelector = useRecoilValue(props?.selector);

  return (
    <Button onClick={props?.onClick}   
            variant='contained'
            disabled={buttonSelector.isDisabled}>
      {buttonSelector.isAsyncRequesting && (
        <CircularProgress thickness={3}
                          className={styles.loader} />
      )}
      {props.label}
    </Button>
  );
}

export default SubmitButton;