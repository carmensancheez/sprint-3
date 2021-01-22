import React from 'react';
import { useHistory } from "react-router-dom";
import { ButtonComponent } from './ButtonComponent';
import { MenuComponent } from './MenuComponent';
import {BookingInfoComponent} from './BookingInfoComponent';

export const BookingListPage = ()=>{
    // TODO: please implement me! 🥺
    const history = useHistory()
    
    const navigateToLogin = ()=>{
        history.push("/");
    }

    return (
    <div align="center">
        <MenuComponent />
        <BookingInfoComponent onClickButton={navigateToLogin}/>
        </div>
        )
}