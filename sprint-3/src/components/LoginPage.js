import React from 'react';
import { Link, useHistory } from "react-router-dom"
import {InputComponent} from './InputComponent';
import {ButtonComponent} from './ButtonComponent';
import {LabelComponent} from './LabelComponent';
import {Icon} from './Icon';
import {useState} from 'react';


export const LoginPage = ()=>{
    const [username, setUsername] = useState("");
    const history = useHistory()
    
    const navigateToBookings = ()=>{
        history.push("/create-booking");
    }

    return <div align="center">
        <div>
            <Icon iconName={"Group"} />
            <LabelComponent text={"Mentor Booking"} />
            <br/>
        </div>
        <div>
        <InputComponent label={"Username"} />
        </div>
        <div>
        <InputComponent label={"Password"} />
        </div>
        <div style={{ paddingTop:"40px"}}>
            <ButtonComponent text={"Login"} onClick={navigateToBookings} />
        </div>
        {/* <p>
        <Link to="/bookings">Navigate using a link</Link>
        </p>
        <p>
        <button onClick={navigateToBookings}>Navigate using a button</button>
        </p> */}
    </div>
}