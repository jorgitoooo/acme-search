import React from "react";

// Utilities
import services from "../../services";

// Icons
import upArrowIcon from "../../assets/up-arrow.svg";

// CSS style
import "./button-scroll.css";

const ButtonScroll = React.forwardRef(({ active }, ref) => {
    function handleScroll() {
        if (ref) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
            services.analytics.clickEvent(`user clicked scroll to top button`);
        }
    }
    
    return (
        <button 
            className={`btn btn-info shadow scroll-button ${active ? "" : "d-none"}`}  
            onClick={handleScroll}
        >
            <img src={upArrowIcon} alt="Up arrow"/>
        </button>
    );
});

export default ButtonScroll;