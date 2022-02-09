import React ,{useState} from "react";
const Month = () => {
    const [selects,setSelects]=useState();
    return (
        <div>
           

            <select value={selects} onChange={e=>setSelects(e.target.value)}>
            <option>JANUARY</option>
            <option>FEBRUARY</option>
            <option>MARCH</option>
            <option>APRIL</option>
            <option>MAY</option>
            <option>JUNE</option>
            <option>JULY</option>
            <option>AUGUST</option>
            <option>SEPTEMBER</option>
            <option>OCTOBER</option>
            <option>NOVEMBER</option>
            <option>DECEMBER</option>

            </select>
        </div>
     
    );
    
    
};
    export default Month;
   
