import React from 'react';
import {LabelComponent} from './LabelComponent';
import {ButtonComponent} from './ButtonComponent';

export const BookingInfoComponent = (props) => {
    return (
        <div>
            <LabelComponent text={"Gabriel Bernal"} />
            <LabelComponent text={"When"} />
            <LabelComponent text={"Time"} />
            <ButtonComponent text={"Cancel"} onClick={props.onClickButton}/>
        </div>
    )
}