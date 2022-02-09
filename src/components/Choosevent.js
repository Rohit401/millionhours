import React from 'react';
import '../css/Chooseventstyle.css';
import Month from './Month';
import Year1 from './Year1';
import Hours from './Hours';
import Guest from './Guest'


import { IoChevronDownOutline } from "react-icons/io5";

const Events = () => {
    //const [selects,setSelects]=useState();


    
    
    return (

        <div className='container'>
            <ul class="nav">
                <li class="nav-item ">
                    <a className="nav-link active event" aria-current="page" href="#">EVENTS</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">MY EVENTS</a>
                </li>

                <li class="nav-item">
                    <a className="nav-link" href="#">CG CAMPAIGN</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">CUREENT EVENTS</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">UPCOMING EVENTS</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">MORE</a>
                </li>
                <li>
                    {/* <button type="button" className="button">Create New Events</button> */}
                    <button type="button" className="btn-sm btn-outline-primary btn11 ">Create New Events</button>
                   
                </li>

            </ul>
            <br />
            <div className='container1'>
                <ul className="nav ">

                    <li>
                        <input type="checkbox"  name="individual" id="radio1" />
                        Individual
                        
                        

                    </li>




                    <li className="nav1">
                        <input type="checkbox" name="as" id="radio2" />
                        Team Contribution


                    </li>
                    <li className='nav2 '>
                        <input type="checkbox" name="as"></input>
                        Family Contribution



                    </li>

                </ul>
                <div className='edubox'>

                    <div className='edubox1 educommon'>
                        <span className='border border-primary'>

                            <div className='edubox1item1' >

                                <h4>Year</h4>
                                <Year1 />


                                {/* <p>2022  <IoChevronDownOutline/></p> */}

                            </div>
                        </span>

                        <span className='border border-primary'>

                            <div className='edubox1item2'><h4>From</h4>


                                <Month />
                            </div>
                        </span>
                        <span className='border border-primary'>

                            <div className='edubox1item3'><h4>To</h4>


                                <Month/>




                            </div>
                        </span>
                        <span className='border border-primary'>
                            <div className='edubox1item3'><h4>Time</h4>

                                {/* <p>70:00 Hours <IoChevronDownOutline/></p> */}
                                <Hours />

                            </div>
                        </span>

                        <span className='border border-primary'>
                            <div className='guest'><Guest /></div>







                        </span>


                    </div>

                    {/* <div className="grid-container grid1">
                    <div className="item1">Year</div>
                    <div className="item2">From</div>
                    <div className="item4">To</div>
                    <div className="item4">Time</div>
                    <div className="item5">Guest</div>

                </div> */}

                </div>
            </div>

        </div>
    );
};
export default Events;
