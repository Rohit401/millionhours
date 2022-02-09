import React,{useEffect,useRef,useState} from 'react';
import Counterstyle from "../css/Time.css";

const Counter = ()=> {
    const[timerDays,setTimerDays]=useState('00');
    const[timerHours,setTimerHours]=useState('00');
    const[timerMinutes,setTimerMinutes]=useState('00');
    const[timerSeconds,setTimerSeconds]=useState('00');

    let interval = useRef();

    const startTimer = () =>{
        const countdownDate = new Date('Februray 28, 2022 00:00:00').getTime();
         
        interval = setInterval(()=>{
            const now =new Date().getTime();
            const distance = countdownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours =Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes =Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds =Math.floor((distance % (1000 * 60)) / 1000);

            if (0 > distance){
                //stop our Timer
                clearInterval(interval.current);

            }else{
                //Update Timerx
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
              }

           });
    
    };


    useEffect(() => {
        startTimer();
        // return () => {
        //     clearInterval(interval.current);
        // };

    });

    




    return(
       <section className="timer-container">
           <section className="timer">
           <div className='firstdiv'>
               <section className='firstsection'>
                   <p style={{color:"white"}}>{timerDays}</p>
                   <p><small style={{color:"white",fontSize: 20,fontWeight:'bold'}}>Days</small></p>
               </section>
               <span style={{color:"white"}}>:</span>

               <section className='firstsection'>
                   <p style={{color:"white"}} >{timerHours}</p>
                   <p><small style={{color:"white",fontSize: 20,fontWeight:'bold'}} >Hours</small></p>
               </section>
               <span style={{color:"white"}}>:</span>

               <section className='firstsection'>
                   <p style={{color:"white"}}>{timerMinutes}</p>
                   <p><small style={{color:"white",fontSize: 20,fontWeight:'bold'}}>Minutes</small></p>
               </section>
               <span style={{color:"white"}}>:</span>

                <section className='firstsection'>
                   <p style={{color:"white"}}>{timerSeconds}</p>
                   <p><small style={{color:"white",fontSize: 20,fontWeight:'bold'}}>Seconds</small></p>
               </section>
             </div>

           </section>
       </section>
    )

};

export default Counter;