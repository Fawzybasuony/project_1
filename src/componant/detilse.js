/** @format */

import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Detilse = () => {    
  const { productId } = useParams();
  const [product, setproduct] = useState();
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((product) => {
        setproduct(product);
      });
  }, [productId]);

  return (
    <>
      <h1>Detilse</h1>
      {product && (
      <div className=" text-center ms-auto me-auto" style={{ width: "18rem" }}>
        <img src={product.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description.slice(0, 44)}</p>
          <h1>detilse {product.price}</h1>
        </div>
      </div>
      )}
    </>
  ); 
};

export default Detilse;
