import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Input } from "antd";
const FromLogin = () => {
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    onSubmit: (values) => {
      //Check API
      console.log(values);
    },
    validationSchema: Yup.object({
      taiKhoan: Yup.string()
        .min(5, "Must be 5 characters or hight")
        .required("Empty"),
      matKhau: Yup.string()
        .min(5, "Must be 5 characters or hight")
        .required("Empty"),
    }),
  });
  const { handleSubmit, handleChange, handleBlur, errors, touched } = formik;
  return (
    <form onSubmit={handleSubmit} className="mt-10">
      <div className="mb-3 mt-5">
        <h2 className="text-center text-xl font-bold">Login</h2>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Tài khoản
        </label>
        <Input
          type="text"
          name="taiKhoan"
          onBlur={handleBlur}
          onChange={handleChange}
          status={touched.taiKhoan && errors.taiKhoan ? "error" : null}
          placeholder="Error"
          className="py-2"
        />
        {/* <Input
            status="error"
          type="text"
          name="taiKhoan"
          onBlur={handleBlur}
          onChange={handleChange}
          //   onChange={() => {
          //     console.log("1");
          //     handleChange();
          //   }}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Nhập tài khoản"
        /> */}

        {touched.taiKhoan && errors.taiKhoan ? (
          <p className="text-red-500">{errors.taiKhoan}</p>
        ) : null}
      </div>
      <div className="mb-6">
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Mật khẩu
        </label>
        <Input
          type="password"
          name="matKhau"
          onBlur={handleBlur}
          onChange={handleChange}
          status={touched.matKhau && errors.matKhau ? "error" : null}
          placeholder="Error"
          className="py-2"
        />
        {/* <input
          type="password"
          name="matKhau"
          onBlur={handleBlur}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        /> */}
        {touched.matKhau && errors.matKhau ? (
          <p className="text-red-500">{errors.matKhau}</p>
        ) : null}
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
      >
        Login
      </button>
    </form>
  );
};

export default FromLogin;
