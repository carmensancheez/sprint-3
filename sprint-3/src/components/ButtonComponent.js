import React from 'react';
import Button from '@material-ui/core/Button';

export const ButtonComponent = (props)=>{
    return(
        <div>
            <Button variant="contained" onClick={props.onClick}>{props.text}</Button>
        </div>
    )
}