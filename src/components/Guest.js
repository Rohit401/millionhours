import React, { useState } from "react";
import '../css/Gueststyle.css';
const Guest = () => {
    //const [selects,setSelects]=useState();
     const [select, setSelects] = useState();
    return (


        <div>


            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Guest
            </button>


            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">

                        <div className="modal-body">


                            <div className="dropdown">
                            
                                <button className="btn btn-secondary dropdown-toggle btn1" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    Adults
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a className="dropdown-item" href="#">1</a></li>
                                    <li><a className="dropdown-item" href="#">2</a></li>
                                    <li><a className="dropdown-item" href="#">3</a></li>
                                    <li><a className="dropdown-item" href="#">4</a></li>
                                    <li><a className="dropdown-item" href="#">5</a></li>
                                    <li><a className="dropdown-item" href="#">6</a></li>
                                    <li><a className="dropdown-item" href="#">7</a></li>
                                    <li><a className="dropdown-item" href="#">8</a></li>
                                    <li><a className="dropdown-item" href="#">9</a></li>
                                    <li><a className="dropdown-item" href="#">10</a></li>
                                    <li><a className="dropdown-item" href="#">11</a></li>
                                    <li><a className="dropdown-item" href="#">12</a></li>
                                    <li><a className="dropdown-item" href="#">13</a></li>
                                    <li><a className="dropdown-item" href="#">14</a></li>
                                    <li><a className="dropdown-item" href="#">15</a></li>
                                   
                                </ul>
                               
                            </div>



                            <div className="dropdown1">
                                <button className="btn btn-secondary dropdown-toggle btn1" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    Children
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a className="dropdown-item" href="#">1</a></li>
                                    <li><a className="dropdown-item" href="#">2</a></li>
                                    <li><a className="dropdown-item" href="#">3</a></li>
                                    <li><a className="dropdown-item" href="#">4</a></li>
                                    <li><a className="dropdown-item" href="#">5</a></li>
                                    <li><a className="dropdown-item" href="#">6</a></li>
                                    <li><a className="dropdown-item" href="#">7</a></li>
                                    <li><a className="dropdown-item" href="#">8</a></li>
                                    <li><a className="dropdown-item" href="#">9</a></li>
                                    <li><a className="dropdown-item" href="#">10</a></li>
                                    <li><a className="dropdown-item" href="#">11</a></li>
                                    <li><a className="dropdown-item" href="#">12</a></li>
                                    <li><a className="dropdown-item" href="#">13</a></li>
                                    <li><a className="dropdown-item" href="#">14</a></li>
                                    <li><a className="dropdown-item" href="#">15</a></li>
                                </ul>
                            </div>


                           

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary close" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary apply" >Apply</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>





    );


};
export default Guest;
