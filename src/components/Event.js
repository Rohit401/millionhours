import React from 'react';
import '../css/Events.css';

export default function Event() {

    return (<div>
        <div className='row eventscomp'>
            <div className="col-md-4">
                <div className="card" >
                    <img className="card-img-top" src="/img/upfirst.jpg" alt="Card image cap" /><br></br>
                    <div className="card-body1">
                        <h5 className="card-title">Upcoming Events</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href='/UpcomingEvent' >Explore More</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card">
                <img className="card-img-top1" src="/img/curfirst.jpg" alt="Card image cap" /><br></br>
                    <div className="card-body1">
                        <h5 className="card-title">Current Events</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/CurrentEvent" >Explore More</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card">
                <img className="card-img-top2" src="/img/fufirst.jpg" alt="Card image cap" /><br></br>
                    <div className="card-body1">
                        <h5 className="card-title">Future Goal</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/FutureEvent">Explore More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
