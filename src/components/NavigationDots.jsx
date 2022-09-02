import React from "react";

const NavigationDots = ({active}) => {
    return (
        <div className="app__navigation app__left-middle" style = {{zIndex: 5, position: "fixed", right: "0"}}>
            {['home', 'about', 'work', 'skills', 'testimonials', 'contact'].map((item, index) => (
                <div 
                    key = {item + index}
                    className = "app__navigation-dot"
                    style = {active === item ? {backgroundColor: "rgba(0, 0, 0, .25"} : { }}
                />
            ))}
        </div>
    )
}

export default NavigationDots