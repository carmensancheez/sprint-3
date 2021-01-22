import React from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


export const MenuComponent = ()=>{
    return(
        <div>
            <Paper component="form">
                <IconButton aria-label="menu">
                 <MenuIcon />
                  </IconButton>
                  <InputBase
                //   placeholder="Search Google Maps"
                //       inputProps={{ 'aria-label': 'search google maps' }}
                      />
                <Divider orientation="vertical" />
            </Paper>
        </div>
    )
}