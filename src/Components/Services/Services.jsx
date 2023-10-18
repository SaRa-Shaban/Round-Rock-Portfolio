import React from "react";
import style from "./Services.module.css";
import Service1 from "../../assets/Services/Service1.png";
import Service2 from "../../assets/Services/Service2.png";
import Service3 from "../../assets/Services/Service3.png";

export default function Services() {
  return (
    <>
      <div className="container globalContainer">
        <div className=" d-flex justify-content-center aligin-items-center my-5">
          <div className="position-relative sectionTitle ">
            <div className="opposite w-100"></div>
            <h2 className="p-3">Services</h2>
          </div>
        </div>

        <div className="row g-3">
          <div className="col-lg-4 col-md-12">
            <div className="content">
              <div className={`card shadow border-0 ${style.card} `}>
                <img src={Service1} className="card-img-top" alt="Service 1" />
                <div className="card-body">
                  <h5 className={`card-title ${style.cardTitle}`}>
                    Lorem Ipsum
                  </h5>
                  <p className={`card-text  ${style.cardText}`}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-12">
            <div className="content">
              <div className={`card shadow border-0 ${style.card} `}>
                <img src={Service2} className="card-img-top" alt="Service 1" />
                <div className="card-body">
                  <h5 className={`card-title ${style.cardTitle}`}>
                    Lorem Ipsum
                  </h5>
                  <p className={`card-text  ${style.cardText}`}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-12">
            <div className="content">
              <div className={`card shadow border-0 ${style.card} `}>
                <img src={Service3} className="card-img-top" alt="Service 1" />
                <div className="card-body">
                  <h5 className={`card-title ${style.cardTitle}`}>
                    Lorem Ipsum
                  </h5>
                  <p className={`card-text  ${style.cardText}`}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" d-flex justify-content-center my-5">
        <button className="btn-help border-0 py-3 mb-5">Help Me</button>
        </div>

      </div>
    </>
  );
}
