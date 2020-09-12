import React from "react";

function DateInfo({ title, date, ...props }) {
   return (
       <div className="text-muted" {...props} >
           {title && <h5 className="font-weight-bold mb-0">{title}</h5>}
           {date && <p className="font-weight-bold mb-0">{date}</p>}
       </div>
   )
}

export default DateInfo;