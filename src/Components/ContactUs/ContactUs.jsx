import React from "react";
import style from "./ContactUs.module.css";

export default function ContactUs() {
  return (
    <>
      <div className={`container w-50 m-auto`}>
        <div className=" d-flex justify-content-center aligin-items-center my-5">
          <div className="position-relative sectionTitle ">
            <div className="opposite w-100"></div>
            <h2 className="p-3">Contact Us</h2>
          </div>
        </div>

        <div className="row gx-5 pt-2">
          <div className="col-lg-6 col-md-12">
            <div className="content">
              <form action="">
                <input
                  type="text"
                  placeholder="Name"
                  className={`form-control ${style.formControlCustom} rounded-5`}
                />

                <input
                  type="email"
                  placeholder="Email"
                  className={`form-control ${style.formControlCustom} rounded-5 my-2`}
                />

                <input
                  type="text"
                  placeholder="Phone"
                  className={`form-control ${style.formControlCustom} rounded-5`}
                />

                <div className="d-flex justify-content-center align-items-center">
                  <button
                    className={`btn rounded-5 px-5 text-black ${style.btnSend} my-3`}
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 py-4 ">
            <div className="d-flex justify-content-start align-items-center pb-3 pt-2">
              <i className={`fa-solid fa-envelope h-100 ${style.iconColor}`}></i>
              <a className={`ps-3 ${style.customLink} text-muted`} href="mailto:upskilling.eg1@gmail.com">
                upskilling.eg1@gmail.com
              </a>
            </div>

            <div className="d-flex justify-content-start align-items-center">
              <i className={`fa-solid fa-phone h-100 ${style.iconColor}`}></i>
              <a className={`ps-3 ${style.customLink} text-muted`} href="tel:+201154932137">
                +20 115 493 2137
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
