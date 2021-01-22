import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {DatePickerComponent} from './DatePickerComponent';
import {LabelComponent} from './LabelComponent';

export const BookMentorCard = ()=>{

    const mentors = [
        { name: 'Gabriel Bernal', role: "Mentor & CTO" },
        { name: 'Santiago Carrillo', role: "Mentor & CEO"},
        { name: 'Ignacio Delgado', role: "Mentor & CFO"},
        { name: 'Alejandra Cardozo', role: "Social Media Strategist"},
        { name: 'Carolina Botero', role: "Agile Coach"},
        { name: 'Sergio Marentes', role: "FullStack Mentor"},
        { name: 'Camila Krioka', role: "FullStack Mentor"},
        { name: 'Henry Black', role: "FullStack Mentor"},
      ];

    return(
        <div>
            <div >
                <LabelComponent text={"Which Mentor?"} />

                <Autocomplete
                id="combo-box-demo"
                options={mentors}
                getOptionLabel={(option) => option.name}
                style={{ width: 300 }}
                size="small"
                renderInput={(params) => <TextField {...params} label="Mentors" variant="outlined" />}
                />
            </div>
            <LabelComponent text={"When?"} />
            <DatePickerComponent />
            <LabelComponent text={"At time"} />
            <DatePickerComponent />
        </div>
    )
}