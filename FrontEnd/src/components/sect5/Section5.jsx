import React from "react";
import "./Section5.css";
import { Link } from "react-router-dom";
const Section5 = () => {
  return (
    <section className="instagram">
      <div className="container-fluid">
        <div className="row justify-content-center pb-5">
          <div className="col-md-7 heading-section text-center">
            <h2>
              <span>instagram</span>
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md no-padding">
            <Link to="#" className="insta-img image-popup insta-1">
              <div className="icon d-flex justify-content-center">
                <span className="icon-instagram align-self-center">
                  <i className="fa-brands fa-instagram"></i>
                </span>
              </div>
            </Link>
          </div>
          <div className="col-sm-12 col-md no-padding">
            <Link to="#" className="insta-img image-popup insta-2">
              <div className="icon d-flex justify-content-center">
                <span className="icon-instagram align-self-center">
                  <i className="fa-brands fa-instagram"></i>
                </span>
              </div>
            </Link>
          </div>
          <div className="col-sm-12 col-md no-padding">
            <Link to="#" className="insta-img image-popup insta-3">
              <div className="icon d-flex justify-content-center">
                <span className="icon-instagram align-self-center">
                  <i className="fa-brands fa-instagram"></i>
                </span>
              </div>
            </Link>
          </div>
          <div className="col-sm-12 col-md no-padding">
            <Link to="#" className="insta-img image-popup insta-4">
              <div className="icon d-flex justify-content-center">
                <span className="icon-instagram align-self-center">
                  <i className="fa-brands fa-instagram"></i>
                </span>
              </div>
            </Link>
          </div>
          <div className="col-sm-12 col-md no-padding">
            <Link to="#" className="insta-img image-popup insta-5">
              <div className="icon d-flex justify-content-center">
                <span className="icon-instagram align-self-center">
                  <i className="fa-brands fa-instagram"></i>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section5