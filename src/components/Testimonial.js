
import React from 'react'
import '../css/Testimonial.css'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';


const Testimonial = () => {
    return (

        <div class="wrapper">
          
            <div className='title'><h2 style={{paddingRight:100}}>Reviews & Ratings</h2></div>
            <br></br>

            <div className='title1'>
                <h4>MillionHour Rating 4.7<div className='titleRating'>
                    <Stack spacing={2}>
                        <Rating name="size-medium" defaultValue={2} />
                    </Stack>
                </div></h4>
                <br></br>

            </div>

            <br></br>
            <br></br>
            <br></br>

            <div class="team">
                <div class="team_member">
                    <div class="teamimg">
                        <img src="/img/Avatar.jpg" alt="img"></img>
                    </div>
                    <h3 style={{marginTop:-5}}>Akshay</h3>
                    <div className='Ratinghead' >
                        <Stack spacing={2}>
                            <Rating name="size-medium" defaultValue={2} />
                        </Stack>
                    </div>
                    <p class="role">Delhi</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pulvinar libero id aliquet congue.
                        Morbi vulputate fringilla arcu, molestie porta metus suscipit placerat. </p>
                </div>
                <div class="team_member">
                    <div class="teamimg">
                        <img src="/img/second.jpg" alt="img"></img>
                    </div>
                    <h3 style={{marginTop:-5}}>Harini</h3>
                    <div className='Ratinghead' >
                        <Stack spacing={2}>
                            <Rating name="size-medium" defaultValue={2} />
                        </Stack>
                    </div>
                    <p class="role">Chennai</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pulvinar libero id aliquet congue.
                        Morbi vulputate fringilla arcu, molestie porta metus suscipit placerat. </p>
                </div>
                <div class="team_member">
                    <div class="teamimg">
                        <img src="/img/Avatar.jpg" alt="img"></img>
                    </div>
                    <h3 style={{marginTop:-5}}>Ganesh</h3>
                    <div className='Ratinghead' >
                        <Stack spacing={2}>
                            <Rating name="size-medium" defaultValue={2} />
                        </Stack>
                    </div>
                    <p class="role">Bangalore</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pulvinar libero id aliquet congue.
                        Morbi vulputate fringilla arcu, molestie porta metus suscipit placerat. </p>
                </div>
                <div class="team_member">
                    <div class="teamimg">
                        <img src="/img/second.jpg" alt="img"></img>
                    </div>
                    <h3 style={{marginTop:-5}}>Samruddhi</h3>
                    <div className='Ratinghead' >
                        <Stack spacing={2}>
                            <Rating name="size-medium" defaultValue={2} />
                        </Stack>
                    </div>
                    <p class="role">Delhi</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pulvinar libero id aliquet congue.
                        Morbi vulputate fringilla arcu, molestie porta metus suscipit placerat. </p>
                </div>
                <div class="team_member">
                    <div class="teamimg">
                        <img src="/img/second.jpg" alt="img"></img>
                    </div>
                    <h3 style={{marginTop:-5}}>Jayashri</h3>
                    <div className='Ratinghead' >
                        <Stack spacing={2}>
                            <Rating name="size-medium" defaultValue={2} />
                        </Stack>
                    </div>
                    <p class="role">Delhi</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pulvinar libero id aliquet congue.
                        Morbi vulputate fringilla arcu, molestie porta metus suscipit placerat. </p>
                </div>
                <div class="team_member">
                    <div class="teamimg">
                        <img src="/img/Avatar.jpg" alt="img"></img>
                    </div>
                    <h3 style={{marginTop:-5}}>Akshay</h3>
                    <div className='Ratinghead' >
                        <Stack spacing={2}>
                            <Rating name="size-medium" defaultValue={2} />
                        </Stack>
                    </div>
                    <p class="role">Delhi</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pulvinar libero id aliquet congue.
                        Morbi vulputate fringilla arcu, molestie porta metus suscipit placerat. </p>
                </div>



            </div>

        </div>



    );
};
export default Testimonial
