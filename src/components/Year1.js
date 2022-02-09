import React ,{useState} from "react";
const Month = () => {
    const [selects,setSelects]=useState();
    return (
        <div>
           

            <select value={selects} onChange={e=>setSelects(e.target.value)}>
            
            <option>2022</option>
            <option>2023</option>
            <option>2024</option>
            <option>2025</option>
            <option>2026</option>
            <option>2027</option>
            <option>2028</option>
            <option>2029</option>
            <option>2030</option>
            <option>2031</option>
            <option>2032</option>
            <option>2033</option>
            <option>2034</option>
            <option>2035</option>

            </select>
        </div>
     
    );
    
    
};
    export default Month;
   
