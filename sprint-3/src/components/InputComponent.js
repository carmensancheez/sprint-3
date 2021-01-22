import React from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import {Icon} from './Icon';


export const InputComponent = (props) =>{
    return (
        <div>
        <FormControl>
            <InputLabel htmlFor="input-with-icon-adornment"></InputLabel>
            <Input
            id="input-with-icon-adornment" placeholder={props.label}
            startAdornment={
            <InputAdornment position="start">
              <Icon iconName={props.label} />
            </InputAdornment>
          }
        />
      </FormControl>
        </div>
    )
}