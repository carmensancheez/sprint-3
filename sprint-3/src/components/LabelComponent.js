import React from 'react';
import Typography from '@material-ui/core/Typography';

export const LabelComponent = (props) => {
    return(
        <div>
            <Typography component="h1" variant="h5">
                {props.text}
            </Typography>
        </div>
    )

}