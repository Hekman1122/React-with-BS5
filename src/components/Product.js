import React from "react";

const Product = ({ product }) => {
  return (
    <div>
      <div className="card m-3" style={{ width: " 15rem" }}>
        <img
          src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1089&q=80"
          className="card-img-top"
          alt="photo"
        />
        <div className="card-body">
          <h5 className="card-title text-gray-800 fw-bold">{product}</h5>
          <p className="card-text text-gray-600 fw-bold">
            <span>平價實惠，用料實在的好蛋糕</span>
            <div className="d-flex align-items-center justify-content-between">
              <span>NT 320 元</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="#575757"
                className="bi bi-cart-plus-fill cursor-pointer"
                viewBox="0 0 16 16"
              >
                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
              </svg>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
