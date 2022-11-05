import React from "react";
import PropTypes from 'prop-types'
function Cities_card(props) {
  

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4">
            <div className="card my-2">
              <img src={props.imgsrc} className="card-img-top" alt="..." />
              <div
                className="card-body text-start text-white"
                style={{ background: "#02A3C1", padding:"0.5rem 1rem" }}
              >
                <h5 className="card-title m-0">{props.title}</h5>
                <p className="card-text">
                  The Holy city of Prophet Muhammad (PBUH)
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="card my-2">
              <img src={props.imgsrc2} className="card-img-top" alt="..." />
              <div
                className="card-body text-start text-white"
                style={{ background: "#02A3C1", padding:"0.5rem 1rem" }}
              >
                <h5 className="card-title m-0">{props.title2}</h5>
                <p className="card-text">
                  The Holy city of Prophet Muhammad (PBUH)
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="card my-2">
              <img src={props.imgsrc3} className="card-img-top" alt="..." />
              <div
                className="card-body text-start text-white"
                style={{ background: "#02A3C1", padding:"0.5rem 1rem" }}
              >
                <h5 className="card-title m-0">{props.title3}</h5>
                <p className="card-text">
                  The Holy city of Prophet Muhammad (PBUH)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cities_card;
