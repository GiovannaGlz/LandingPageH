import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import '../../../Resources/style.css'

const useStyles = makeStyles({
  root: {
    font: 'Hind',
  },
});

export default function Title() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1 style={{textAlign: 'center', fontWeight:'bolder'}}>
        MOMENTOS
      </h1>
      <h3 style={{fontWeight:'lighter', textAlign: 'center'}}>
        QX INFINITI
      </h3>
    </div>
  );
}