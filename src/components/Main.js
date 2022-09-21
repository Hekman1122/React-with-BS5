import React from "react";
import CategoryList from "./CategoryList";
import CarouselCom from "./CarouselCom";
const Main = () => {
  const category = ["人氣商品", "季節優惠", "禮盒專區"];
  return (
    <div>
      <CarouselCom />

      <div className="d-flex mt-5 justify-content-evenly align-items-center flex-wrap container-md">
        <div className="d-flex flex-column w-300px">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            fill="#27ae60"
            className="bi bi-award"
            viewBox="0 0 16 16"
          >
            <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z" />
            <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
          </svg>
          <h4 className="text-gray-800 my-2 fw-bold">法式質感，匠心獨具</h4>
          <p className="text-gray-600 fw-bold">
            源自法國傳統技法 <br />
            只為給您最驚豔的甜點感受
          </p>
        </div>
        <div className="d-flex flex-column w-300px">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            fill="#27ae60"
            className="bi bi-box2-heart"
            viewBox="0 0 16 16"
          >
            <path d="M8 7.982C9.664 6.309 13.825 9.236 8 13 2.175 9.236 6.336 6.31 8 7.982Z" />
            <path d="M3.75 0a1 1 0 0 0-.8.4L.1 4.2a.5.5 0 0 0-.1.3V15a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4.5a.5.5 0 0 0-.1-.3L13.05.4a1 1 0 0 0-.8-.4h-8.5Zm0 1H7.5v3h-6l2.25-3ZM8.5 4V1h3.75l2.25 3h-6ZM15 5v10H1V5h14Z" />
          </svg>
          <h4 className="text-gray-800 my-2 fw-bold">精選禮盒熱銷販賣</h4>
          <p className="text-gray-600 fw-bold">
            送禮自用兩相宜 <br />
            典雅包裝不失門面
          </p>
        </div>
        <div className="d-flex flex-column w-300px">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            fill="#27ae60"
            className="bi bi-car-front-fill"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679c.033.161.049.325.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.807.807 0 0 0 .381-.404l.792-1.848ZM3 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2H6ZM2.906 5.189l.956-1.913A.5.5 0 0 1 4.309 3h7.382a.5.5 0 0 1 .447.276l.956 1.913a.51.51 0 0 1-.497.731c-.91-.073-3.35-.17-4.597-.17-1.247 0-3.688.097-4.597.17a.51.51 0 0 1-.497-.731Z"
            />
          </svg>
          <h4 className="text-gray-800 my-2 fw-bold">季節特色點心</h4>
          <p className="text-gray-600 fw-bold">
            節慶特色點心線上預購 <br />
            冷凍宅配線上訂購
          </p>
        </div>
      </div>

      {category.map((item, index) => {
        return <CategoryList key={`category${index}`} category={item} />;
      })}
    </div>
  );
};

export default Main;
