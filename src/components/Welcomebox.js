import React, { useState } from 'react';
import { useHistory, Link, NavLink } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import '../css/Welcomeboxstyle.css'
import edulogo from '../img/edulogo.jpg';
import education from '../img/education.jpg';
import healthlogo from '../img/healthlogo.jpg';
import health1 from '../img/health1.jpg';
import farmlogo from '../img/farmlogo.jpg';
import farm from '../img/farm.jpg';
import sustainlogo from '../img/sustainlogo.jpg';
import Sus from '../img/Sus.jpg';


const Welcomebox = () => {

  const [isShown, setIsShown] = useState(false);
  const [isShown1, setIsShown1] = useState(false);
  const [isShown2, setIsShown2] = useState(false);
  const [isShown3, setIsShown3] = useState(false);



  const history = useHistory()
  return (
    <div class="wrapper">

      <div className='title'>  <h2 style={{ marginRight: 100 }}>Welcome !</h2></div>
      <br></br>

      <div className='title'>
        <h4 style={{ textAlign: 'center' }}>Akshay Salunke<div>

        </div></h4>
        <br></br>

      </div>

      <br></br>
      <br></br>
      <br></br>

      <div class="team">
        <div className="team_member" >
          <img src={edulogo} alt="img" className='teamimg'></img>
          <div className='titlea'>
            <span style={{ fontWeight: 550, fontSize: 25, color: 'blue' }}>Education </span>
          </div>

          <img src={education} alt="img" className='fimage' id='firstimg' onMouseEnter={() => setIsShown(true)} onMouseOut={() => setIsShown(false)}></img>
          <p style={{ display: "none" }} id='hide' className='firsta' >
          Student-to-student comparisons on your domain-owned repository of past submissions when you sign up for the Teaching and Learning Upgrade or Google Workspace for Education Plus Make student-to-student comparisons on your domain-owned repository of past for Education Plus<br></br>
          </p>

          {/* <a href='/Education2' className='btnfirst'>More Info</a> */}

          <NavLink className="nav-link active" aria-current="page" exact to="/Education2">More Info</NavLink>


          {isShown && (
            document.getElementById('firstimg').style.display = 'none',
            document.getElementById('hide').style.display = 'block'
          )
          }
        </div>
        <div className="team_member">
          <img src={healthlogo} alt="img" className='teamimg'></img>
          <div></div>
          <div className='titlea'>
            <span style={{ fontWeight: 550, fontSize: 25, color: 'blue' }}>Health</span>
          </div>
          <img src={health1} alt="img" className='fimage' id='secondimg' onMouseEnter={() => setIsShown1(true)} onMouseLeave={() => setIsShown1(false)}></img>
          <h5 style={{ display: "none" }} id='hide1' className='firstb'>Sustainable Development Goal 3 of the 2030 Agenda
            for Sustainable Development is to “ensure healthy lives and promoting well-being for all at all ages”.
            The associated targets aim to reduce the global maternal mortality ratio. end preventable deaths of newborns and children.
            end the epidemics of AIDS.<br></br>
          </h5>
          <a href='/Health' className='btnfirst'>More Info</a>

          {isShown1 && (
            document.getElementById('secondimg').style.display = 'none',
            document.getElementById('hide1').style.display = 'block'
          )
          }
        </div>
        <div class="team_member">
          <img src={farmlogo} alt="img" className='teamimg'></img>
          <div className='titlea'>
            <span style={{ fontWeight: 550, fontSize: 25, color: 'blue' }}>Agriculture</span>
          </div>
          <img src={farm} alt="img" className='fimage' id='thirdimg' onMouseEnter={() => setIsShown2(true)} onMouseLeave={() => setIsShown2(false)}></img>
          <h5 style={{ display: "none" }} id='hide2' className='firstc'>The practice of agriculture is also known as "farming",
           while scientists, inventors and others devoted to improving farming methods and implements are also said to be engaged in agriculture.
            Subsistence farming, who farms a small area with limited resource inputs.<br></br>
          </h5>
          <a href='/Farm' className='btnfirst'>More Info</a>


          {isShown2 && (
            document.getElementById('thirdimg').style.display = 'none',
            document.getElementById('hide2').style.display = 'block'
          )
          }
        </div>
        <div class="team_member">
          <img src={sustainlogo} alt="img" className='teamimg'></img>
          <div className='titlea'>
            <span style={{ fontWeight: 550, fontSize: 25, color: 'blue' }}>Sustainability</span>
          </div>
          <img src={Sus} alt="img" className='fimage' id='fourthdimg' onMouseEnter={() => setIsShown3(true)} onMouseLeave={() => setIsShown3(false)}></img>
          <h5 style={{ display: "none" }} id='hide3' className='firstd'>In business and policy contexts, limits to sustainability are determined by physical and natural resources,
           environmental degradation, and social resources. Accordingly, sustainable policies place some emphasis on the future effect of any given policy.
          <br></br>
          </h5>
          <a href='/Sustain' className='btnfirst'>More Info</a>

          {isShown3 && (
            document.getElementById('fourthdimg').style.display = 'none',
            document.getElementById('hide3').style.display = 'block'
          )
          }
        </div>
        <div class="team_member">
          <h3 style={{ fontWeight: 550, fontSize: 25, color: 'blue' }}>Other</h3>
          <img src="/img/other.jpg" alt="" className='other' />
          <p style={{ textAlign: "center", fontSize: 20, fontWeight: 'bold', color: 'blue' }}></p>
        </div>



      </div>



    </div>

  );
};
export default Welcomebox;
