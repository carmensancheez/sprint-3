import React from 'react';
import {useHistory } from "react-router-dom"
import {MenuComponent} from './MenuComponent';
import {LabelComponent} from './LabelComponent';
import {BookMentorCard} from './BookMentorCard'; 
import {ButtonComponent} from './ButtonComponent';

export const CreateBookingPage = ()=>{
    // TODO: please implement me! 🥺
    const history = useHistory()
    
    const navigateToBookings = ()=>{
        history.push("/bookings");
    }

    return( 
        <div align="center">
        <MenuComponent />
        <LabelComponent text={"Book Mentor"} />
        <BookMentorCard />
        <ButtonComponent text={"Request"} onClick={navigateToBookings}/>
        </div>
        )
}
