import React, { useState } from "react";
import style from "./ContactUs.module.css";
import axios from "axios";
import { useMutation } from "react-query";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function ContactUs() {

  const validationSchema = Yup.object({
    email: Yup.string()
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Invalid email address"
      )
      .required("Email is required"),
    phone: Yup.string()
      .matches(/^01[0125][0-9]{8}$/, "Invalid Phone Number")
      .required("Phone is required"),
    name: Yup.string().required("Name is required"),
  });

  const { mutate, status } = useMutation(
    (newData) =>
      axios.post("http://upskilling-egypt.com:3000/contact", newData),
    {
      onSuccess: (response) => {
        console.log("Success:", response.data);
        // clear data from iputs
        formik.resetForm();
      },
      onSettled: () => {
        if (status === "success") {
          formik.resetForm();
        }
      },
    }
  );

  const formik = useFormik({
    initialValues: {
      email: "",
      phone: "",
      name: "",
    },
    validationSchema,
    onSubmit: (values) => {
      mutate(values);
    },
  });

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
              <form onSubmit={formik.handleSubmit}>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  className={`form-control ${style.formControlCustom} rounded-5`}
                />

                {formik.errors.name && formik.touched.name && (
                  <div className="alert alert-danger mt-2 mb-3 p-2 text-center rounded-5 " role="alert">{formik.errors.name}</div>
                )}

                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  className={`form-control ${style.formControlCustom} rounded-5 my-2`}
                />

                {formik.errors.email && formik.touched.email && (
                  <div className="alert alert-danger mt-2 mb-3 p-2 text-center rounded-5" role="alert">{formik.errors.email}</div>
                )}

                <input
                  type="text"
                  placeholder="Phone"
                  name="phone"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  className={`form-control ${style.formControlCustom} rounded-5`}
                />

                {formik.errors.phone && formik.touched.phone && (
                  <div className="alert alert-danger mt-2 mb-3 p-2 text-center rounded-5" role="alert">{formik.errors.phone}</div>
                )}

                <div className="d-flex justify-content-center align-items-center">
                  <button
                    type="submit"
                    className={`btn rounded-5 px-5 text-black ${style.btnSend} my-3`}
                    disabled={status === 'loading'}
                  >
                    {status === 'loading' ? <i className="fa-solid fa-spinner fa-spin-pulse text-black fa-1x"></i>  : 'Send'}
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 py-4 ">
            <div className="d-flex justify-content-start align-items-center pb-3 pt-2">
              <i
                className={`fa-solid fa-envelope h-100 ${style.iconColor}`}
              ></i>
              <a
                className={`ps-3 ${style.customLink} text-muted`}
                href="mailto:upskilling.eg1@gmail.com"
              >
                upskilling.eg1@gmail.com
              </a>
            </div>

            <div className="d-flex justify-content-start align-items-center">
              <i className={`fa-solid fa-phone h-100 ${style.iconColor}`}></i>
              <a
                className={`ps-3 ${style.customLink} text-muted`}
                href="tel:+201154932137"
              >
                +20 115 493 2137
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
