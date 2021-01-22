import React from 'react';

import { BsFillPeopleFill } from 'react-icons/bs';
import { HiUser } from 'react-icons/hi';
import { RiLockPasswordLine } from 'react-icons/ri';

const getIcon = (icon) => {
    switch (icon) {
        case 'Username': 
            return <HiUser/>;
        case 'Password':
            return <RiLockPasswordLine />;
        case 'Group':
            return <BsFillPeopleFill size={170} />; 
        default: return ""
    }
   
}

 export const Icon = (props) => {
    return (
        <div style={props.style}>
            {getIcon(props.iconName)}
        </div>
    )
}

export default Icon;