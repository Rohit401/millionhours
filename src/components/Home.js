import React from 'react';
import Carousel from './Carousel';
import Time from './Time';
import Event from './Event';
import Welcomebox from './Welcomebox';
import Testimonial from './Testimonial';
import Awards1 from  './Awards1';
import Navbar from './Navbar';
import { Grid } from '@material-ui/core';
import { makeStyles } from "@material-ui/styles";
import { hover } from '@testing-library/user-event/dist/hover';
import { Scale } from '@mui/icons-material';
import Com from './Com';
import Cardcom from './Cardcom';
import Cardcomponent from './Cardcomponent'

const useStyles= makeStyles({
    gridContainer:{
      paddingLeft:"105px",
     },
  
    
  effect :{
  
  color: '#FFF',
  '&:hover': {
    
    // transform:' translate(0, 1.5) scale(5.75)'
    
    transform: 'scale(1.1)'
  
  }
  }
  })
  const Home = () => {
  const classes= useStyles();
  return (
    <div>
      <Navbar/>
      <Carousel/>
      <Time/>
    <br/><br/>
      <Grid container spacing={4} className={classes.gridContainer}>
 <Grid item className={classes.effect}>
  <Com/>
  </Grid>
 <Grid item className={classes.effect} >
   <Cardcom/>
 </Grid>
 <Grid item className={classes.effect}>
   <Cardcomponent/>
</Grid>
 </Grid>
<br/>
      <Welcomebox/>
      <Awards1/>
      <Testimonial/>
    </div>
  );
};

export default Home;


// ---------------------------------------------
// import React from 'react';
// import Appbar from './Appbar';
// import Comp from './Comp';
// import Corousel from './Corousel';
// import { Grid } from '@material-ui/core';
// import Welcomestyle from "../Components/Welcomestyle.css"
// import { makeStyles } from "@material-ui/styles";
// import Cardcomp from './Cardcomp';
// import Cardcomponent from './Cardcomponent';
// import { hover } from '@testing-library/user-event/dist/hover';
// import { Scale } from '@mui/icons-material';
// const useStyles= makeStyles({
//   gridContainer:{
//     paddingLeft:"105px",
//    },

  
// effect :{

// color: '#FFF',
// '&:hover': {
  
//   // transform:' translate(0, 1.5) scale(5.75)'
  
//   transform: 'scale(1.1)'

// }
// }
// })


 


// const Home = () => {
//   const classes= useStyles();
//   return <div>
//      <Appbar/>
//     <Corousel/> 
//    <br/>
// <Grid container spacing={4} className={classes.gridContainer}>
// <Grid item className={classes.effect}>
//   <Comp/>
//   </Grid>
// <Grid item className={classes.effect} >
//   <Cardcomp/>
// </Grid>
// <Grid item className={classes.effect}>
//   <Cardcomponent/>
// </Grid>
// </Grid>


//   </div>;
// };


// export default Home;