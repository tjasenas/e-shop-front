import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Wrapper from "../components/Ul/Wrapper";
import axios from "axios";

export default function ProductPage() {
  const [product, setProduct] = useState([]);
  const { title, description, price, rating, stock, cat_id, img_url } = product;
  const { productId } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const resp = await axios.get("http://localhost:3000/api/product/" + productId);
        setProduct(resp.data[0]);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <Wrapper>
      <div className="bg-slate-400 p-4">
        <div className="grid grid-cols-2 gap-8 mb-8">
          <img src={img_url} alt="" />
          <div>
            <h1 className="text-3xl mb-4">{title}</h1>
            <div className="mb-2">{rating}</div>
            <div className="mb-2">{price} Eur.</div>
            <Link className="bg-blue-600 py-1 px-4 rounded text-white inline-block" to="/">
              Pirkti produkta
            </Link>
          </div>
        </div>

        <h3 className="text-3xl mb-4">Aprasymas</h3>
        <p className="mb-2">{description}</p>
      </div>
    </Wrapper>
  );
}
