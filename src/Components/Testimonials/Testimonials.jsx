import React from "react";
import style from "./Testimonials.module.css";
import client from "./../../assets/Testimonials/client1.png";

export default function Testimonials() {
  return (
    <>
      <div className="container globalContainer pb-5">
        <div className=" d-flex justify-content-center aligin-items-center my-5">
          <div className="position-relative sectionTitle ">
            <div className="opposite w-100"></div>
            <h2 className="p-3">Testimonials</h2>
          </div>
        </div>

        <div className="row g-4">
          <div className="col-lg-6 col-md-12">
            <div className={style.content}>
              <div className="card border-0 p-1 rounded-5">
                <div className="row g-0">
                  <div className="col-md-3 text-center py-3">
                    <img
                      src={client}
                      className="img-rounded rounded-center"
                      alt="client"
                    />
                  </div>
                  <div className="col-md-9">
                    <div className={`${style.card} card-body`}>
                      <h5 className="card-title">Courtney Henry</h5>
                      <p className="card-text">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book
                      </p>

                      <i className="fa-solid fa-star fa-sm ps-1"></i>
                      <i className="fa-solid fa-star fa-sm ps-1"></i>
                      <i className="fa-solid fa-star fa-sm ps-1"></i>
                      <i className="fa-solid fa-star fa-sm ps-1"></i>
                      <i className="fa-solid fa-star fa-sm ps-1"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center align-items-center mt-5">
                <nav aria-label="Page navigation example ">
                  <ul className="pagination">
                  <li className="page-item"><a className="page-link" href="#">
                    <i className="fa-solid fa-angles-left" />
                    </a></li>
                  <li className="page-item"><a className="page-link" href="#">
                  <i className="fa-solid fa-angles-right" />
                </a></li>
                  </ul>
                </nav>
          </div>
        </div>
      </div>
    </>
  );
}
