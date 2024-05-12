/** @format */

import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Maine = () => {
  const [prodacts, setprodacts] = useState([]);
  const [categories, setcategories] = useState([]);

  /* apiكود احضار جميع الداتا من ال  prodacts,*/
  const getprodact = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setprodacts(data));
  };

  // عرض عدد من العناصر المتشبه
  const getprodactCategre = (catname) => {
    fetch(`https://fakestoreapi.com/products/category/${catname}`)
      .then((res) => res.json())
      .then((data) => setprodacts(data));
    console.log(catname);
  };

  // اعمل لوب  واظهار ال Botton 
  const getCategres = () => {
    fetch(`https://fakestoreapi.com/products/categories`)
      .then((res) => res.json())
      .then((data) => setcategories(data));
  };

  useEffect(() => {
    getprodact();
    getCategres();
  }, []);

  return (
    <>

      <div className="row">
        <button
          className="btn btn-info my-2"
          onClick={() => {
            getprodact();
          }}
        >
          All
        </button>

        {/* عرض عدد من العناصر المتشبه */}
        {categories.map((cat) => {
          return (
            <button
              key={cat}
              className="btn btn-info w-25 "
              onClick={() => {
                getprodactCategre(cat);
              }}
            >
              {cat}
            </button>
          );
        })}
        {/* كود احضار  الداتا من ال api */}

        {prodacts.map((item) => {
          return (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card h-100">
        <img
          src={item.image}
          className="card-img-top"
          alt="Product"
          style={{ objectFit: "cover", height: "200px" }}
        />
        <div className="card-body">
          <h5 className="card-title">{item.title.slice(0, 44)}...</h5>
          <p className="card-text">{item.description.slice(0, 44)}...</p>
          <Link to={`/produt/${item.id}`} className="btn btn-primary">
            View Details
          </Link>
        </div>
      </div>
    </div>
          );
        })}


      </div>
    </>
  );
};

export default Maine;
