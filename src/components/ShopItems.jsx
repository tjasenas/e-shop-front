import React from "react";
import { Link } from "react-router-dom";

export default function ShopItems({ product }) {
  const { id, title, description, price, rating, stock, cat_id, img_url } = product;

  return (
    <div className="bg-slate-400 p-4">
      <img src={img_url} alt="" />
      <h3 className="my-2 font-bold ">{title}</h3>
      <p className="mb-2">{description}</p>
      <div className="mb-2">{rating}</div>
      <div className="mb-2">{price}</div>
      <Link className="bg-blue-600 py-1 px-4 rounded text-white inline-block" to={`/product/${id}`}>
        Pirkti produkta
      </Link>
    </div>
  );
}
