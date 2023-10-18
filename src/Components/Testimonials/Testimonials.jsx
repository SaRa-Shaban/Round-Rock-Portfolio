import React, { useState } from "react";
import style from "./Testimonials.module.css";
import client from "./../../assets/Testimonials/client1.png";
import axios from "axios";
import { useQuery } from "react-query";

export default function Testimonials() {
  const [page, setPage] = useState(1);
  const totalPages = 2;
  // console.log(page);

  const getTestimonials = async () => {
    const response = await axios.get(
      `https://reqres.in/api/users?page=${page}`
    );
    console.log(response);
    return response.data.data;
  };

  const { isLoading, isError, error, data } = useQuery(
    ["users", page],
    getTestimonials
  );

  // console.log(data);

  if (isLoading) {
    return <div className="globalContainer fs-1">Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

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
          {data?.map((user) => (
            <div className="col-lg-6 col-md-12" key={user.id}>
              <div className={style.content}>
                <div className="card border-0 p-1 rounded-5">
                  <div className="row g-0">
                    <div className="col-md-3 text-center py-3">
                      <img
                        src={user.avatar}
                        className="img-rounded rounded-center"
                        alt="client"
                      />
                    </div>
                    <div className="col-md-9">
                      <div className={`${style.card} card-body`}>
                        <h5 className="card-title">
                          {user.first_name} {user.last_name}
                        </h5>
                        <p className="card-text">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book
                        </p>

                        {/* <div className="d-flex justify-content-start align-items-center pb-3 pt-2">
                          <i
                            className={`fa-solid fa-envelope h-100 ${style.iconColor}`}
                          ></i>
                          <a
                            className={`ps-3 ${style.customLink}`}
                            href="mailto:upskilling.eg1@gmail.com"
                          >
                            upskilling.eg1@gmail.com
                          </a>
                        </div> */}

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
          ))}

          {/* pagination buttons */}
          <div className="d-flex justify-content-center align-items-center mt-5">
            <nav aria-label="Page navigation example ">
              <ul className="pagination">
                <li className="page-item">
                  <button
                    type="button"
                    className={`page-link ${style.btnPagination}`}
                    onClick={() => {
                      setPage(page - 1);
                      // console.log(page);
                    }}
                    disabled={page === 1}
                  >
                    <i className="fa-solid fa-angles-left" />
                  </button>
                </li>
                <li className="page-item">
                  <button
                    type="button"
                    className={`page-link ${style.btnPagination}`}
                    onClick={() => {
                      setPage(page + 1);
                      // console.log(page);
                    }}
                    disabled={page === totalPages}
                  >
                    <i className="fa-solid fa-angles-right" />
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
