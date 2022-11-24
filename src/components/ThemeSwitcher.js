import React, { useState, useEffect } from "react";
import GuranteeCard from "./GuranteeCard";
// the code for changing the theme 


function MobThemeSwitcher() {
    const [mode, setMode] = useState(() => localStorage.getItem("mode"));

    useEffect(() => {
        window.addEventListener("storage", setPreferedTheme);
        return () => {
            window.removeEventListener("storage", setPreferedTheme);
        };
    }, []);

    const setPreferedTheme = () => {
        const _mode = localStorage.getItem("mode");
        if (_mode) {
            setMode(_mode);
        } else {
            setMode("light");
        }
    };

    useEffect(() => {
        if (mode === "light") {
            document.body.classList.add("light-mode");
            localStorage.setItem("mode", "light");
           
        } else {
            localStorage.setItem("mode", "dark");
            document.body.classList.remove("light-mode");
          
        }
    }, [mode]);

    return (


        <>
         <div className="switchMode"  onClick={() =>
                setMode(mode => (mode === "dark" ? "light" : "dark"))
            }>
                {mode==='dark'?
              
                 
               <span style={{display:'contents'}} ><i className="fa-solid fa-sun switch-icon "></i> <p  className='mode-text'>light Mode</p></span> :
               <span style={{display:'contents'}}> <i className="fa-solid fa-moon switch-icon "></i> <p  className='mode-text'>Dark Mode</p></span>
                }
            
          
            </div>
           

        </>

    );
}


function ThemeSwitcher() {
    const [mode, setMode] = useState(() => localStorage.getItem("mode"));

    useEffect(() => {
        window.addEventListener("storage", setPreferedTheme);
        return () => {
            window.removeEventListener("storage", setPreferedTheme);
        };
    }, []);

    const setPreferedTheme = () => {
        const _mode = localStorage.getItem("mode");
        if (_mode) {
            setMode(_mode);
        } else {
            setMode("light");
        }
    };

    useEffect(() => {
        if (mode === "light") {
            document.body.classList.add("light-mode");
            localStorage.setItem("mode", "light");
           
        } else {
            localStorage.setItem("mode", "dark");
            document.body.classList.remove("light-mode");
          
        }
    }, [mode]);

    return (


        <>
            <div  onClick={() =>
                setMode(mode => (mode === "dark" ? "light" : "dark"))
            } className="tool-nav">
                {mode === "dark" ? <i class="fa-solid fa-sun"></i>:<i class="fa-solid fa-moon"></i>}    
            </div>

        </>

    );
}

export  { ThemeSwitcher,MobThemeSwitcher};