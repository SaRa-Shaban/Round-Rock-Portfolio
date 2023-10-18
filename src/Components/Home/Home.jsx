import React from "react";
import style from "./Home.module.css";
import logo from "../../assets/Home/logo.png";

export default function Home() {
  return (
    <>
      <div className={`${style.bg} py-5 `}>
        <div
          className={`${style.containerHome} d-flex flex-column justify-content-center align-items-center `}
        >

        {/* home Title */}
        <div
          className={`${style.homeTitle} d-flex justify-content-center align-items-center pb-5`}
        >
          <img src={logo} alt="logo" />
          <div className="d-flex justify-content-center align-items-start flex-column ps-3">
            <h3>
              Round Rock
              <br />
            </h3>
            <h4>Trush Hauling</h4>
          </div>
        </div>


          <button className={` border-0  ${style.btnExperts} mb-5`}>
            Experts
          </button>
          <div className={style.homeContent}>
            <h2 className="text-center">Lorem</h2>
            <h1 className="text-center pb-3 ">Lorem lorem</h1>
            <p className="text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the
            </p>
          </div>
          <button className="btn-help border-0 py-3 mb-5">Help Me</button>
        </div>
      </div>
    </>
  );
}
