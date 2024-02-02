import React from "react";

export default function InputField({ id, formik, label, type = "text", placeholder }) {
  const textInput = (
    <>
      <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
        {label}
      </label>
      <input
        type={type}
        value={formik.values[id]}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        id={id}
        name={id}
        placeholder={placeholder}
        className="w-full p-2 border border-gray-300 rounded"
      />
      {formik.touched[id] && formik.errors[id] && <p className="text-red-500 ">{formik.errors[id]}</p>}
    </>
  );

  //   const textarea = (
  //     <>
  //       <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
  //         El. paštas
  //       </label>
  //       <textarea type="text" value={formik.values.email} onBlur={formik.handleBlur} onChange={formik.handleChange} id="email" name="email" className="w-full p-2 border border-gray-300 rounded" />

  //       {formik.touched.email && formik.errors.email && <p className="text-red-500 ">{formik.errors.email}</p>}
  //     </>
  //   );

  return textInput;
}
