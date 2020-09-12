import React from "react";
import PropTypes from "prop-types";

function DateInfo({ title, date, ...props }) {
   return (
       <div className="text-muted" {...props} >
           {title && <h5 className="font-weight-bold mb-0">{title}</h5>}
           {date && <p className="font-weight-bold mb-0">{date}</p>}
       </div>
   )
}

DateInfo.propTypes = {
    title: PropTypes.string,
    date: PropTypes.string.isRequired,
};

export default DateInfo;