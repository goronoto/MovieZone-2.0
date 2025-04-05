import React from "react";
import {Toolbar,Typography} from "@mui/material"

export default function Footer() {

    return (
        <Toolbar sx={{backgroundColor: 'rgb(211, 211, 211)' , display: 'flex', justifyContent: 'center', mt:'40px', pt:'40px', pb:"40px" , borderTopLeftRadius:'10px' , borderTopRightRadius: '10px'}}>
            <Typography variant="p">all rights is mine dont dare to steal</Typography>
        </Toolbar>
    )
}