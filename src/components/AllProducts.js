import React from "react";
import Product from "./Product";
const AllProducts = () => {
  const products = [
    "經典起司塔",
    "精選巧克力蛋糕",
    "經典起司塔",
    "甜在心檸檬塔",
    "精選巧克力蛋糕",
    "甜在心檸檬塔",
    "精選巧克力蛋糕",
    "經典起司塔",
    "甜在心檸檬塔",
  ];
  return (
    <div className="container-md">
      <div className="row mt-3">
        <div className="col-2 d-none d-md-block w-300px">
          <div className="d-flex justify-content-start flex-column">
            <div className="d-flex justify-content-between align-items-center p-1 mt-2">
              <span className="text-gray-600 fs-myFontSize fw-bold flex-grow-1">
                法式蛋糕
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#575757"
                className="bi bi-caret-down-fill cursor-pointer"
                viewBox="0 0 16 16"
                data-bs-toggle="collapse"
                data-bs-target="#collapse-1"
                aria-expanded="false"
                aria-controls="collapse-1"
              >
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
              </svg>
            </div>
            <div className="collapse" id="collapse-1">
              <div className="d-flex flex-column p-2">
                <span className="text-gray-500 fw-bold my-1 cursor-pointer">
                  精選圓形蛋糕
                </span>
                <span className="text-gray-500 fw-bold my-1 cursor-pointer">
                  法式塔圈
                </span>
                <span className="text-gray-500 fw-bold my-1 cursor-pointer">
                  蛋糕捲
                </span>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center p-1 mt-2">
              <span className="text-gray-600 fs-myFontSize fw-bold flex-grow-1">
                日式和菓子
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#575757"
                className="bi bi-caret-down-fill cursor-pointer"
                viewBox="0 0 16 16"
                data-bs-toggle="collapse"
                data-bs-target="#collapse-2"
                aria-expanded="false"
                aria-controls="collapse-2"
              >
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
              </svg>
            </div>

            <div className="collapse" id="collapse-2">
              <div className="d-flex flex-column p-2">
                <span className="text-gray-500 fw-bold my-1 cursor-pointer">
                  典雅和菓子
                </span>
                <span className="text-gray-500 fw-bold my-1 cursor-pointer">
                  傳統銅鑼燒
                </span>
                <span className="text-gray-500 fw-bold my-1 cursor-pointer">
                  日式大福系列
                </span>
              </div>
            </div>

            <div className="d-flex justify-content-between align-items-center p-1 mt-2">
              <span className="text-gray-600 fs-myFontSize fw-bold flex-grow-1">
                常溫手作點心
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#575757"
                className="bi bi-caret-down-fill cursor-pointer"
                viewBox="0 0 16 16"
                data-bs-toggle="collapse"
                data-bs-target="#collapse-3"
                aria-expanded="false"
                aria-controls="collapse-3"
              >
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
              </svg>
            </div>

            <div className="collapse" id="collapse-3">
              <div className="d-flex flex-column p-2">
                <span className="text-gray-500 fw-bold my-1 cursor-pointer">
                  奶油餅乾
                </span>
                <span className="text-gray-500 fw-bold my-1 cursor-pointer">
                  瑪德蓮
                </span>
                <span className="text-gray-500 fw-bold my-1 cursor-pointer">
                  杏仁瓦片
                </span>
              </div>
            </div>

            <div className="d-flex justify-content-between align-items-center p-1 mt-2">
              <span className="text-gray-600 fs-myFontSize fw-bold flex-grow-1">
                光速宅配
              </span>
            </div>
          </div>
        </div>

        <div className="col  px-4">
          {/* filter bar */}
          <div className="d-flex justify-content-between align-items-center h-50px flex-wrap">
            <div className="flex-grow-1">
              <h5>全部商品</h5>
            </div>
            <div className="d-flex">
              <select
                class="form-select border-top-0 border-end-0 border-start-0 me-2 rounded-0 fw-bold shadow-0"
                aria-label="Default select example"
              >
                <option selected>商品排序</option>
                <option value="created_at desc">上架時間 : 由新到舊</option>
                <option value="created_at asc">上架時間 : 由舊到新</option>
                <option value="price desc">價格 : 由高至低</option>
                <option value="price asc">價格 : 由低至高</option>
              </select>
              <select
                class="form-select border-top-0 border-end-0 border-start-0 rounded-0 fw-bold"
                aria-label="Default select example"
              >
                <option selected>每頁顯示12個</option>
                <option value="24">每頁顯示24個</option>
                <option value="36">每頁顯示36個</option>
                <option value="48">每頁顯示48個</option>
              </select>
            </div>
          </div>

          {/* 商品列表 */}
          <div className="d-flex flex-wrap justify-content-around m-3">
            {products.map((item, index) => {
              return <Product key={`products${index}`} product={item} />;
            })}
          </div>

          {/* 分頁 */}
          <nav aria-label="Page navigation example ">
            <ul class="pagination justify-content-center">
              <li class="page-item disabled">
                <a class="page-link">Previous</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  1
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  2
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  3
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  4
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
