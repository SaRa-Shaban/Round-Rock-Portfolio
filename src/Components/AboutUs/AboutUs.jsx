import React from "react";
import style from "./AboutUs.module.css";
import About1 from "../../assets/AboutUs/About1.png";

export default function AboutUs() {
  return (
    <>
      <div className={`${style.bg1} text-white mt-4`}>
        <div className={`${style.bg2}`}>
          <div className="container globalContainer ">
            <div className="row gx-5">
              <div className="col-lg-6 col-md-12 ">
                <div className={style.contentRight}>
                  <h2 className="py-3">About Us</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an{" "}
                  </p>
                  <img src={About1} className="w-75" alt="About1" />
                </div>
              </div>

              <div className=" col-lg-6 col-md-12 pt-5 mt-5">
                <div className={`${style.contentLeft} d-flex align-items-end justify-content-end w-100 h-100 flex-column`}>
                  <h2 className="pb-3">Where</h2>
                  <p className="text-end">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>
              </div>
              
              <div
                className={`${style.helpBtn} d-flex justify-content-center mt-5 mb-2`}
              >
                <button className="btn-help border-0 py-3 mb-5">Help Me</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
