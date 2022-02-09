import React from 'react'
import { NavLink } from "react-router-dom";
import "../Css/Nonveg.css";
import { useState } from "react";

const Breakfast = (props) => {
    const [data, setData] = useState(props.location.state);
    return (
        <div>
             <div className="prices">
        <div className="container">
          <div className="row" id="veg1">
            <h3>
              <center> Breakfast Appetizer</center>
            </h3>
            <div className="commonCard">
              <div className=" row price">
                {data.map((e) => (
                  <>
                    <div className="col-md-4">
                      <div className=" price__img">
                        <img src={e.url} alt="" />
                      </div>
                      <h1 className="price__heading">{e.name}</h1>
                      <p className="price__text">
                        Paneer simmered in a smooth spicy and delicious spinach
                        gravy or sauce.
                      </p>
                      <p className="price_rs">{e.price}</p>
                      <button
                        className="btn btn-primary"
                        style={{ marginBottom: 20 }}
                      >
                        add+
                      </button>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="about__btn"
        style={{ textAlign: "center", marginBottom: 50 }}
      >
        <NavLink className=" btn btn-smart" aria-current="page" to="/Cart">
          Add Cart
        </NavLink>
      </div>
        </div>
    )
}

export default Breakfast
