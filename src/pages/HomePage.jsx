import React, { useEffect, useState } from "react";
import axios from "axios";
import ShopItems from "../components/ShopItems";

export default function HomePage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const resp = await axios.get("http://localhost:3000/api/products");
        setItems(resp.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <h1 className="text-2xl my-6">Parduotuvė</h1>
      <div className="grid grid-cols-3 gap-4">{items.length && items.map((product) => <ShopItems key={product.id} product={product} />)}</div>
    </>
  );
}
