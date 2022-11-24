import React from 'react';
import { AppBar, Toolbar } from '@mui/material';

const DivScroll = ()=>{
    let bgColor=getComputedStyle(document.documentElement).getPropertyValue("--components-dark-theme");
    return (
        <React.Fragment>
            <AppBar id = 'navbar' style={{zIndex:'1', top:'-70px',transition:"all 0.3s ease; "}} position = 'fixed' sx= {{background: bgColor, maxHeight:'70px'}}>
                <Toolbar>
                    
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}

export default DivScroll