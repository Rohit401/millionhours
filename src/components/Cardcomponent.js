import { makeStyles } from "@material-ui/styles";
import Card from "@material-ui/core/card";
import { CardActionArea } from "@mui/material";
import { CardActions } from "@mui/material";
import { CardContent } from "@mui/material";
import { CardMedia } from "@mui/material";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import Event from "../img/Event.png"

import { Grid } from "@material-ui/core";

const useStyles= makeStyles({
   root :{
       maxWidth: 345,
   },

   bullet:{
    display: "inline-block",
    margin: "0 2px",
    transform:"scale(0.8)"
   },

   media : {
       height: 140,
      
   }
})


export default function Comp(){
    const classes = useStyles();
    const bull=<span className={classes.bullet}>.</span>;
    return(
        <Card className={classes.root}>
            <CardActionArea>
            <CardMedia className={classes.media} image={Event} title="Future Event"/>
             <CardContent>
             <Typography gutterBottom variant="h6" component="div">
              Future Events
              <br/><span style={{fontWeight:'bold',fontFamily:'Oswald-Bold',display:'block',color:'#333333',fontSize:32}}>27</span>
              <span  style={{fontSize:12,textTransform:'uppercase',display:'flex',marginBottom:20,color:'#757575'}}>Jun 2022
              <br/> ____
            </span>
            <h4 style={{fontFamily:'Oswald-Bold',letterSpacing:'normal',color:'#333333'}}>UN Ocean Conference 2022</h4>
            <span style={{fontSize:13,marginBottom:40,color:'#596275'}}>Mon 27-Fri 01 July 2022</span>
             </Typography>
             <br/>
             <Typography variant="body2" color="textSecondary" component="p" style={{marginBottom:0,height:'unset',flexGrow:3,flexShrink:1,flexBasis:57,fontSize:14}}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
            <br/><span style={{paddingLeft:' 1.5em',fontSize:12}}>Lisbon, Portugal</span>
          </Typography>
             </CardContent>
            </CardActionArea>
            <CardActions>
            <Button size="small" color="primary" style={{paddingLeft:210}}>
            Explore More
           </Button>   
      </CardActions>
        </Card>
    )
}