import React, {Component} from 'react';
import { Grid } from '@material-ui/core';
import Panel1 from './Panel1/Panel1.js';
import Panel2 from './Panel2/Panel2.js';
import '../../Resources/style.css'


class Content extends Component { 
  render () {
    
    return (

        <Grid container
              direction="row"
              justify="space-between"
              alignItems="center">
          <Grid item lg={6} md={6} sm={12}>
            <Panel1/>
          </Grid>
          <Grid item lg={6} md={6} sm={12}>
            <Panel2/>
          </Grid>
        </Grid>
  )
}
}

export default Content;