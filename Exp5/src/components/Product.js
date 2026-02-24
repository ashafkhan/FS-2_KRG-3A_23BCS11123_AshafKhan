import React, { useEffect, useState } from "react";
import { fetchProduct } from "../api/productApi";

const Product = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProduct().then((data) => {
      setProduct(data);
    });
  }, []);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <h2>{product.price}</h2>
    </div>
  );
};

export default Product;
