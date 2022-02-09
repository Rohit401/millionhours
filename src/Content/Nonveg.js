import React from "react";
import { NavLink } from "react-router-dom";
import "../Css/Nonveg.css";
import { useState } from "react";

const Nonveg = (props) => {
  const [data, setData] = useState(props.location.state);
  return (
    <div>
      <div className="prices">
        <div className="container">
          <div className="row" id="veg1">
            <h3>
              <center> Non Veg Appetizer</center>
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
      {/* <div className="prices">
      <div className="container">
        <div className="row" id="nonveg1">
          <h3><center>Non-Veg Appetizer</center></h3>
          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src='/img/nonveg/nveg1.png' alt="pizza" style={{width:200, height:200}} />
              </div>
              <h1 className="price__heading">Chicken Burger</h1>
              <p className="price__text">
              Bread crumbs and milk keep these chicken burgers unbelievably moist and flavourful.
              </p>
              <p className="price_rs">Rs.120.00</p>
              <button className="btn btn-primary">add+</button>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src='/img/nonveg/nveg2.png' alt="pizza" style={{width:200, height:200}} />
              </div>
              <h1 className="price__heading">Chicken Salad</h1>
              <p className="price__text">
              Diced chicken is tossed with creamy textures and dotted with crisp celery, green onion.
              </p>
              <p className="price_rs">Rs.200.00</p>
              <button className="btn btn-primary">add+</button>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src='/img/nonveg/nveg3.png' alt="pizza" style={{width:200, height:200}}/>
              </div>
              <h1 className="price__heading">Chicken Fried Steak</h1>
              <p className="price__text">
              Chicke steak is coated with batter and breadcrumbs. Fried and served with gravy.
              </p>
              <p className="price_rs">Rs.150.00</p>
              <button className="btn btn-primary">add+</button>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src='/img/nonveg/nveg4.png' alt="pizza" style={{width:200, height:200}}/>
              </div>
              <h1 className="price__heading">Mutton Rogan Josh</h1>
              <p className="price__text">
              an Indian lamb curry with a heady combination of intense spices in a creamy tomato curry sauce.
              </p>
              <p className="price_rs">Rs.350.00</p>
              <button className="btn btn-primary">add+</button>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src='/img/nonveg/nveg5.png' alt="pizza" style={{width:200, height:200}}/>
              </div>
              <h1 className="price__heading">Sausage Pizza</h1>
              <p className="price__text">
              Spicy sausage, onions, mushrooms and plenty of cheese make this pizza from our Test Kitchen a real keeper
              </p>
              <p className="price_rs">Rs.180.00</p>
              <button className="btn btn-primary">add+</button>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src='/img/nonveg/nveg6.png' alt="pizza" style={{width:200, height:200}}/>
              </div>
              <h1 className="price__heading">Prawn Spaghetti</h1>
              <p className="price__text">
              Shrimp tossed in a delectable and light dressing, served with golden pasta.
              </p>
              <p className="price_rs">Rs.250.00</p>
              <button className="btn btn-primary">add+</button>
            </div>
          </div>
        </div>
      </div>
    </div> */}
    </div>
  );
};

export default Nonveg;
