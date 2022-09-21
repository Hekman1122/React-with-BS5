import React from "react";
import Product from "./Product";

const categoryList = ({ category }) => {
  const products = [
    "精選巧克力蛋糕",
    "經典起司塔",
    "甜在心檸檬塔",
    "特選蒙布朗蛋糕",
  ];
  return (
    <div className="my-5 container-md">
      <h3 className="text-gray-800 my-3 text-center fw-bold">{category}</h3>
      <div className="d-flex flex-wrap justify-content-around">
        {products.map((item, index) => {
          return <Product key={`products${index}`} product={item} />;
        })}
      </div>
    </div>
  );
};

export default categoryList;
