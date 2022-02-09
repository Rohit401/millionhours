import React from "react";
import Navbar from './Navbar';

import '../css/Education2style.css';

import Edu1 from "../img/Edu1.png";
import Story from "./Story";


const Education2 = () =>{
    return(

        <div>
            <Navbar></Navbar>
            <div className='educomponent'>
                <div className='edubox'>
                    <div className='edubox1 educommon'>
                        <div className='edubox1item1' ><h4>170 Hr</h4>
                            <p>Total Hours</p>
                        </div>
                        <div className='edubox1item2'><h4>70</h4>
                            <p>Total Campaign</p>
                        </div>
                        <div className='edubox1item3'><h4>70</h4>
                            <p>Total Member</p>
                        </div>
                    </div>
                    <div className='edubox2 educommon'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pulvinar libero id aliquet congue.
                        Morbi vulputate fringilla arcu, molestie porta metus suscipit placerat. </p>

                        {/* <a className="readlink" href='Read More'>Read More</a><br></br><br></br> */}
                        <div className='buttons'> <button className="btn btn-outline-light" type="button">Create New Event</button>

                        </div>
                    </div>
                </div>
            </div> 
            <br/><br/>

            <Story/>
            <br/><br/>
 </div> 



       
    );
}

export default Education2;