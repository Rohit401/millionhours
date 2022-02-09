import React from 'react'
import '../css/Awardstyle.css'
import 'react-multi-carousel/lib/styles.css';
import Person from '../img/Person.jpg'
// import { AiFillTrophy } from 'react-icons/fa'
// import { ArrowRight } from 'react-bootstrap-icons';
import { BsFillTrophyFill } from "react-icons/bs"


const Awards1 = (props) => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div>
            <h1 style={{textAlign:'center'}}>Awards & Rewards</h1>
            <div class="wrapperG">
                <div className='titleG'><h2 style={{paddingRight:90}} >Sustainablity</h2></div><br />
                <br></br>
                <br></br>
                <br></br>
                <div class="teamG">
                    <div class="team_memberG">
                        <div class="teamimgG">
                            <img src={Person} alt="img"></img>
                        </div>
                        <div className='winner'><p><BsFillTrophyFill/></p><h5>1st Winner</h5></div>
                        <h3>Ganesh</h3>
                        <div className='bbox'>
                            <h6>Campaign name :- </h6>
                            <h6>Total Hours : 00 Hrs  Role : Leader</h6>
                        </div>
                       
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pulvinar libero id aliquet congue.
                            Morbi vulputate fringilla arcu, molestie porta metus suscipit placerat. </p>
                    </div>
                    <div class="team_memberG">
                        <div class="teamimgG">
                            <img src={Person} alt="img"></img>
                        </div>
                        <div className='winner'><p><BsFillTrophyFill/></p><h5>1st Winner</h5></div>
                        <h3>Harini</h3>
                        <div className='bbox'>
                            <h6>Campaign name :- </h6>
                            <h6>Total Hours : 00 Hrs  Role : Leader</h6>
                        </div>
                       
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pulvinar libero id aliquet congue.
                            Morbi vulputate fringilla arcu, molestie porta metus suscipit placerat. </p>
                    </div>
                    <div class="team_memberG">
                        <div class="teamimgG">
                            <img src={Person} alt="img"></img>
                        </div>
                        <div className='winner'><p><BsFillTrophyFill/></p><h5>1st Winner</h5></div>
                        <h3>Group Awards</h3>
                        <div className='bbox'>
                            <h6>Campaign name :- </h6>
                            <h6>Total Hours : 00 Hrs  Role : Leader</h6>
                        </div>
                      
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pulvinar libero id aliquet congue.
                            Morbi vulputate fringilla arcu, molestie porta metus suscipit placerat. </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Awards1

