import React from "react";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const toLogin = () => {
    navigate("/authenticate");
  };
  const toHome = () => {
    navigate("/");
  };
  const toAllProducts = () => {
    navigate("/all");
  };
  const cartList = ["精選巧克力蛋糕", "經典起司塔"];
  return (
    <div className="Nav">
      <nav className="navbar navbar-expand-md px-5 shadow-myShadow-1 d-flex justify-content-between">
        {/* LOGO */}
        <a className="navbar-brand" href="#">
          <svg
            className="logo"
            width="70"
            height="70"
            viewBox="0 0 370 313"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 30C0 13.4315 13.4315 0 30 0H340C356.569 0 370 13.4315 370 30V283C370 299.569 356.569 313 340 313H30C13.4315 313 0 299.569 0 283V30Z"
              fill="#FFCC90"
            />
            <path
              d="M121.933 62.16C126.039 63.3333 129.266 65.3067 131.613 68.08C133.959 70.8533 135.133 74.0533 135.133 77.68C135.133 81.04 133.773 84.2133 131.053 87.2C128.386 90.1333 125.026 92.48 120.973 94.24C116.973 96 113.159 96.88 109.533 96.88C106.866 96.88 104.253 96.7467 101.693 96.48C97.4258 96.2133 94.1192 96.08 91.7725 96.08H81.6125V93.6L89.1325 87.68V39.04L80.8125 36.32L82.4125 33.12H91.6925C96.5458 33.12 101.319 32.96 106.012 32.64C109.639 32.4267 112.306 32.32 114.013 32.32C117.586 32.32 120.732 33.0133 123.452 34.4C126.172 35.7867 128.253 37.68 129.693 40.08C131.186 42.4267 131.932 45.0667 131.932 48C131.932 50.6667 130.999 53.2267 129.133 55.68C127.319 58.08 124.919 60.1867 121.933 62V62.16ZM121.132 52C121.132 47.7867 120.012 44.3467 117.772 41.68C115.532 39.0133 112.199 37.68 107.772 37.68C104.572 37.68 101.693 38.5867 99.1325 40.4V61.6H110.573C113.879 61.6 116.466 60.7733 118.333 59.12C120.199 57.4133 121.132 55.0133 121.132 51.92V52ZM111.772 91.04C115.612 91.04 118.653 90.08 120.893 88.16C123.186 86.24 124.333 83.6533 124.333 80.4C124.333 76.24 123.106 72.88 120.653 70.32C118.253 67.76 114.653 66.4 109.853 66.24C109.479 66.2933 108.973 66.32 108.333 66.32H99.1325V88.96C102.706 90.4 106.919 91.12 111.772 91.12V91.04Z"
              fill="#575757"
            />
            <path
              d="M186.018 96H170.818V89.04L161.777 96.16C160.711 96.5867 159.377 96.8 157.777 96.8C153.191 96.8 149.857 95.6533 147.777 93.36C145.751 91.0667 144.738 88.32 144.738 85.12C144.738 83.2 145.431 81.3067 146.818 79.44C148.204 77.5733 150.178 75.8133 152.738 74.16H170.818V69.04C170.818 65.5733 169.884 63.12 168.018 61.68C166.204 60.24 163.697 59.52 160.497 59.52C157.191 59.52 153.137 61.52 148.337 65.52L145.938 62.48L157.458 53.36C159.591 52.9333 162.151 52.72 165.137 52.72C169.991 52.72 173.751 53.92 176.417 56.32C179.084 58.6667 180.418 62.1067 180.418 66.64V90L187.618 92.8L186.018 96ZM160.338 90C163.591 90 167.084 88.5067 170.818 85.52V77.44H156.658C155.964 78.2933 155.457 79.1467 155.137 80C154.871 80.8533 154.738 81.7867 154.738 82.8C154.738 84.7733 155.244 86.48 156.258 87.92C157.271 89.3067 158.631 90 160.338 90Z"
              fill="#575757"
            />
            <path
              d="M216.345 92.8L214.745 96H192.425V93.52L199.545 87.92V38.72L192.425 33.76V31.28L206.105 26.16H209.145V90L216.345 92.8ZM241.945 96H228.425L213.385 74.88L228.345 62.32L220.665 56.72L222.265 53.52H241.385V56L222.825 71.6L236.345 90L243.545 92.8L241.945 96Z"
              fill="#575757"
            />
            <path
              d="M276.461 96.16C274.328 96.5867 271.768 96.8 268.781 96.8C265.261 96.8 262.088 95.8933 259.261 94.08C256.488 92.2133 254.301 89.7067 252.701 86.56C251.155 83.4133 250.381 79.9467 250.381 76.16C250.381 72.0533 251.635 68.2133 254.141 64.64C256.648 61.0133 259.768 58.1333 263.501 56C267.288 53.8133 270.941 52.72 274.461 52.72C279.528 52.72 283.448 54.72 286.221 58.72C289.048 62.72 290.461 68 290.461 74.56H260.861C261.181 79.0933 262.408 82.8 264.541 85.68C266.728 88.56 269.688 90 273.421 90C276.888 90 281.821 87.3067 288.221 81.92L290.621 84.96L276.461 96.16ZM269.821 59.44C264.061 59.44 261.048 63.3867 260.781 71.28H279.501C279.021 68.4 278.515 66.2133 277.981 64.72C277.501 63.1733 276.621 61.92 275.341 60.96C274.115 59.9467 272.275 59.44 269.821 59.44Z"
              fill="#575757"
            />
            <path
              d="M140.243 266H115.923V263.52L123.443 257.6V236.48H91.8434V259.92L100.243 262.8L98.6434 266H74.3234V263.52L81.8434 257.6V209.12L73.5234 206.32L75.1234 203.12H99.4434V205.6L91.8434 211.52V232.88H123.443V209.12L115.123 206.32L116.723 203.12H141.043V205.6L133.443 211.52V259.92L141.843 262.8L140.243 266Z"
              fill="#575757"
            />
            <path
              d="M177.532 266.16C175.398 266.587 172.838 266.8 169.852 266.8C166.332 266.8 163.158 265.893 160.332 264.08C157.558 262.213 155.372 259.707 153.772 256.56C152.225 253.413 151.452 249.947 151.452 246.16C151.452 242.053 152.705 238.213 155.212 234.64C157.718 231.013 160.838 228.133 164.572 226C168.358 223.813 172.012 222.72 175.532 222.72C180.598 222.72 184.518 224.72 187.292 228.72C190.118 232.72 191.532 238 191.532 244.56H161.932C162.252 249.093 163.478 252.8 165.612 255.68C167.798 258.56 170.758 260 174.492 260C177.958 260 182.892 257.307 189.292 251.92L191.692 254.96L177.532 266.16ZM170.892 229.44C165.132 229.44 162.118 233.387 161.852 241.28H180.572C180.092 238.4 179.585 236.213 179.052 234.72C178.572 233.173 177.692 231.92 176.412 230.96C175.185 229.947 173.345 229.44 170.892 229.44Z"
              fill="#575757"
            />
            <path
              d="M225.338 222.72C227.524 222.72 230.058 223.04 232.938 223.68C235.871 224.267 237.978 224.933 239.258 225.68V238H236.218C234.138 235.333 231.738 233.253 229.018 231.76C226.351 230.213 223.578 229.44 220.698 229.44C218.244 229.44 216.378 230.533 215.098 232.72C213.871 234.907 213.258 238.107 213.258 242.32C213.258 247.333 214.351 251.547 216.538 254.96C218.724 258.32 221.844 260 225.898 260C228.938 260 233.258 257.813 238.858 253.44L241.258 256.48L228.938 266.16C226.804 266.587 224.244 266.8 221.258 266.8C217.738 266.8 214.564 265.893 211.738 264.08C208.964 262.213 206.778 259.707 205.178 256.56C203.631 253.413 202.858 249.947 202.858 246.16C202.858 242.053 204.004 238.187 206.298 234.56C208.644 230.933 211.578 228.053 215.098 225.92C218.618 223.787 222.031 222.72 225.338 222.72Z"
              fill="#575757"
            />
            <path
              d="M273.04 262.8L271.44 266H249.12V263.52L256.24 257.92V208.72L249.12 203.76V201.28L262.8 196.16H265.84V260L273.04 262.8ZM298.64 266H285.12L270.08 244.88L285.04 232.32L277.36 226.72L278.96 223.52H298.08V226L279.52 241.6L293.04 260L300.24 262.8L298.64 266Z"
              fill="#575757"
            />
            <path
              d="M214.545 174.08C217.585 174.08 221.905 171.893 227.505 167.52L229.905 170.56L217.585 180.24C215.451 180.667 212.891 180.88 209.905 180.88C206.865 180.88 204.118 180.24 201.665 178.96C199.265 177.68 197.371 175.973 195.985 173.84C194.598 171.653 193.905 169.253 193.905 166.64C193.905 164.88 194.198 163.12 194.785 161.36L171.025 180.16C168.625 180.587 165.611 180.8 161.985 180.8C158.145 180.8 154.705 179.84 151.665 177.92C148.625 175.947 146.251 173.253 144.545 169.84C142.838 166.427 141.985 162.667 141.985 158.56C141.985 154.133 143.318 150 145.985 146.16C148.651 142.32 151.985 139.253 155.985 136.96C160.038 134.667 163.931 133.52 167.665 133.52C170.225 133.52 172.518 134.453 174.545 136.32C176.571 138.187 177.905 140.213 178.545 142.4C180.838 139.787 183.425 137.653 186.305 136C189.238 134.347 192.011 133.52 194.625 133.52C196.705 133.52 198.545 133.787 200.145 134.32C201.745 134.853 203.611 135.68 205.745 136.8C208.038 137.92 209.985 138.773 211.585 139.36C213.185 139.893 215.078 140.16 217.265 140.16C218.545 140.16 219.851 139.867 221.185 139.28C222.571 138.64 223.718 137.787 224.625 136.72C225.585 135.653 226.065 134.453 226.065 133.12C226.065 131.147 225.051 129.253 223.025 127.44C220.998 125.627 218.171 124 214.545 122.56V120.08L223.825 116.64C225.478 118.293 227.185 120.613 228.945 123.6C230.758 126.587 231.665 129.147 231.665 131.28C231.665 133.893 230.598 136.613 228.465 139.44C226.331 142.213 223.798 144.56 220.865 146.48C217.985 148.347 215.611 149.28 213.745 149.28C212.198 149.28 210.758 149.2 209.425 149.04C207.611 150.32 206.278 152.053 205.425 154.24C204.625 156.373 204.225 159.2 204.225 162.72C204.225 166.027 205.105 168.747 206.865 170.88C208.625 172.96 211.158 174 214.465 174L214.545 174.08ZM166.625 174.08C168.598 174.08 170.758 173.6 173.105 172.64C175.451 171.627 178.358 169.733 181.825 166.96L205.665 148.24C203.958 147.76 201.585 146.853 198.545 145.52C196.411 144.613 194.651 143.947 193.265 143.52C191.878 143.04 190.385 142.8 188.785 142.8C187.025 142.8 185.345 143.12 183.745 143.76C182.145 144.347 180.411 145.467 178.545 147.12C178.011 149.413 176.811 151.6 174.945 153.68C173.131 155.707 170.998 157.573 168.545 159.28C166.145 160.987 162.811 163.173 158.545 165.84L156.865 162.64C161.185 159.973 164.118 157.413 165.665 154.96C167.211 152.453 167.985 149.84 167.985 147.12C167.985 145.253 167.398 143.653 166.225 142.32C165.051 140.987 163.718 140.32 162.225 140.32C159.025 140.32 156.571 141.547 154.865 144C153.211 146.453 152.385 150.053 152.385 154.8C152.385 160.293 153.611 164.88 156.065 168.56C158.518 172.24 162.038 174.08 166.625 174.08Z"
              fill="#575757"
            />
          </svg>
        </a>

        {/* offcanvas列表按鈕 收合按鈕 */}
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="36"
            fill="#575757"
            className="bi bi-card-list d-md-none cursor-pointer"
            viewBox="0 0 16 16"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
          >
            <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
            <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
          </svg>
        </span>
        <div className="flex-grow-1 ms-3 d-none d-md-flex">
          <span
            className="text-myGray fw-bold me-4 cursor-pointer"
            onClick={toHome}
          >
            首頁
          </span>
          <span
            className="text-myGray fw-bold me-4 w-50 cursor-pointer transition-color d-flex align-items-center position-relative"
            data-bs-toggle="collapse"
            data-bs-target="#collapseList"
            aria-expanded="false"
            aria-controls="collapseList"
            onClick={toAllProducts}
          >
            產品列表
          </span>
        </div>
        <div className="justify-content-evenly d-none d-md-flex align-items-center">
          <input
            type="text"
            className="form-control w-200px shadow-none"
            id="exampleFormControlInput1"
            placeholder="Search"
          />
          <div className="w-200px d-flex justify-content-evenly">
            {/* 搜尋 */}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#575757"
                className="bi bi-search cursor-pointer"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </span>
            {/* 聯絡商家  用modal*/}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#575757"
                className="bi bi-chat-right-text cursor-pointer"
                viewBox="0 0 16 16"
                data-bs-toggle="modal"
                data-bs-target="#contactModal"
              >
                <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z" />
                <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
              </svg>
            </span>
            {/* 登入 用路由*/}
            <span onClick={toLogin}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#575757"
                className="bi bi-person-circle cursor-pointer"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path
                  fillRule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                />
              </svg>
            </span>
            {/* 購物車  用offcanvas*/}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#575757"
                className="bi bi-cart cursor-pointer"
                viewBox="0 0 16 16"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasCart"
                aria-controls="offcanvasCart"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
            </span>
          </div>
        </div>
      </nav>

      {/* offcanvas 用戶選單列表 */}
      <div
        className="offcanvas offcanvas-start px-2"
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5
            className="offcanvas-title fw-bold text-gray-800"
            id="offcanvasExampleLabel"
          >
            選單列表
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body d-flex flex-column">
          <div className="d-flex justify-content-center align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              fill="currentColor"
              className="bi bi-person-square"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z" />
            </svg>
          </div>
          <ul className="list-group list-group-flush mt-4">
            <li className="list-group-item fw-bold text-gray-800 cursor-pointer">
              首頁
            </li>
            <li className="list-group-item fw-bold text-gray-800 cursor-pointer">
              產品列表
            </li>
            <li className="list-group-item fw-bold text-gray-800 cursor-pointer">
              購物車
            </li>
            <li className="list-group-item fw-bold text-gray-800 cursor-pointer">
              聯絡我們
            </li>
            <li className="list-group-item fw-bold text-gray-800 cursor-pointer">
              設定
            </li>
            <li className="list-group-item fw-bold text-gray-800 cursor-pointer">
              登入
            </li>
          </ul>
        </div>
      </div>

      {/* offcanvas 購物清單 */}
      <div
        className="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasCart"
        aria-labelledby="offcanvasCartLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasCartLabel">
            購物清單列表
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          {/* 單一購物清單格式 */}
          <ul className="list-group list-group-flush">
            {cartList.length === 0 && (
              <li className="list-group-item">目前清單尚無商品</li>
            )}
            {cartList.length > 0 &&
              cartList.map((item, index) => {
                return (
                  <li className="list-group-item" key={`${item}${index}`}>
                    <div className="d-flex w-100 justify-content-around align-items-start">
                      <div className="w-100px me-4">
                        <img
                          src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1089&q=80"
                          alt="cart-photo-1"
                          className="w-100"
                        />
                      </div>
                      <div className="d-flex flex-column flex-grow-1">
                        <h5 className="text-gray-800 fw-bold">{item}</h5>
                        <p className="text-gray-600">6吋</p>
                        <div className="d-flex justify-content-between">
                          <p className="flex-grow-1">2 X NT360元</p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            fill="#575757"
                            className="bi bi-trash3 cursor-pointer"
                            viewBox="0 0 16 16"
                          >
                            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
          </ul>
          {cartList.length > 0 && (
            <div className="d-flex justify-content-end w-100 mt-2 border-top">
              <button type="button" className="btn btn-outline-primary mt-3">
                前往結帳
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Modal 聯絡商家 */}
      <div
        className="modal fade"
        id="contactModal"
        tabidex="-1"
        aria-labelledby="contactModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header d-flex flex-column align-items-start">
              <h5
                className="modal-title text-gray-800 fw-bold"
                id="contactModalLabel"
              >
                聯絡我們
              </h5>
              <p className="text-gray-600">
                謝謝您的主動聯絡，請留下要諮詢的問題，我們將盡快進行回覆。
              </p>
            </div>
            <div className="modal-body">
              <input
                type="email"
                className="form-control"
                placeholder="您的電子信箱"
              />
              <div className="form-floating mt-2">
                <textarea
                  className="form-control"
                  style={{ height: "100px" }}
                  id="contactTextarea"
                ></textarea>
                <label htmlFor="contactTextarea">
                  歡迎使用電話跟我們做聯繫，或者留下電話方便我們撥打給您
                </label>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-outline-secondary"
                data-bs-dismiss="modal"
              >
                取消
              </button>
              <button type="button" className="btn btn-outline-primary">
                發送
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
