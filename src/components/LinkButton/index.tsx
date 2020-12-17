import React from 'react';
import { 
  Tooltip,
  Typography,
  IconButton
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  icon: {
    fontFamily: 'Rio Icons',
    fontWeight: 400,
    fontSize: 24,
    cursor: 'pointer'
  }
});

const LinkButton = (props: any) => {
  const styles = useStyles();
  
  const handleClick = () => window.open(props.url, '_blank');

  return (
    <Tooltip title={props.title}>
      <IconButton>
        <Typography variant='body2' 
                    component='div'
                    className={styles.icon}
                    onClick={props?.onClick ?? handleClick}>
                    {props.icon}
        </Typography>    
      </IconButton>
    </Tooltip>
  );
}

export default LinkButton;