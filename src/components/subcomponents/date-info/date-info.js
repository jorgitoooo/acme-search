import React from "react";
import PropTypes from "prop-types";

function DateInfo({ title, date, ...props }) {
   return (
       <div className="text-muted" {...props} >
           <h5 className="font-weight-bold mb-0">{title}</h5>
           <p className="font-weight-bold mb-0">{date}</p>
       </div>
   )
}

DateInfo.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
};

export default DateInfo;