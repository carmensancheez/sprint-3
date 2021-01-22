import React from 'react';
import TextField from '@material-ui/core/TextField';

export const DatePickerComponent = () => {
    return (
        <div>
            <form noValidate>
            <TextField
                id="date"
                type="date"
                defaultValue="2020-11-08"
                InputLabelProps={{
                shrink: true,
                }}
            />
            </form>
        </div>
    )
}