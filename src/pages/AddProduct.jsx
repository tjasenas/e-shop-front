import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useEffect, useState } from "react";
import InputField from "../components/Ul/InputField";
import SelectBox from "../components/Ul/SelectBox";
import axios from "axios";
import toast from "react-hot-toast";

export default function AddProduct() {
  const [categories, setCategiries] = useState([]);

  useEffect(() => {
    async function getCategories() {
      try {
        const res = await axios.get("http://localhost:3000/api/categories");
        setCategiries(res.data);
        console.log(res.data);
      } catch (errors) {
        console.log("Fetching categories failed");
      }
    }
    getCategories();
  }, []); // The empty dependency array ensures the effect runs once when the component mounts.

  const formik = useFormik({
    // mapPropsToValues: () => ({ color: "" }),
    initialValues: {
      title: "primas postas",
      description: "dadadasdasd",
      price: 10,
      stock: 12,
      imgUrl: "https://picsum.photos/id/2/800/600",
      category: "1",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Laukelis yra būtinas"),
      description: Yup.string().required("Laukelis yra būtinas"),
      price: Yup.number().min(1, "kaina turi būti didesnė už 0").required("Laukelis yra būtinas"),
      stock: Yup.number().min(1, "kaina turi būti didesnė už 0").required("Laukelis yra būtinas"),
      imgUrl: Yup.string().required("Laukelis yra būtinas"),
      category: Yup.string().required("Laukelis yra būtinas"),
    }),
    onSubmit: (values) => {
      console.log("values ===", values);
      submitHandler(values);
    },
  });

  async function submitHandler(data) {
    try {
      const res = await axios.post("http://localhost:3000/api/product", data);
      toast.success(res.data.msg);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <h1 className="text-2xl my-6">Pridėti produktą</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <InputField id="title" label="Pavadinimas" formik={formik} placeholder="title" />
        </div>
        <div className="mb-4">
          <InputField textarea={true} id="description" label="Aprašymas" formik={formik} placeholder="Aprašymas" />
        </div>
        <div className="mb-4">
          <InputField id="price" label="Kaina" type="number" formik={formik} placeholder="price" />
        </div>
        <div className="mb-4">
          <InputField id="stock" label="Kiekis sandelyje" type="number" formik={formik} placeholder="Kiekis sandelyje" />
        </div>
        <div className="mb-4">
          <InputField id="imgUrl" label="Nuotraukos URL" type="text" formik={formik} placeholder="Nuotraukos URL" />
        </div>
        <div className="mb-4">
          <SelectBox id="category" options={categories} formik={formik} label="Kategoryjos" />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Pridėti produktą
        </button>
      </form>
    </>
  );
}
