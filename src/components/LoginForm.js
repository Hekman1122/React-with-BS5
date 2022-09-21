import React, { useState } from "react";

const LoginForm = () => {
  const [flag, setFlag] = useState("login");
  const flagLogin = () => {
    setFlag("login");
  };
  const flagRegister = () => {
    setFlag("register");
  };
  return (
    <div className="container-md d-flex justify-content-center align-items-center">
      <div className="w-100 px-3 px-md-0 w-md-50 d-flex flex-column my-3">
        <div className="row">
          <div
            onClick={flagLogin}
            className={`${
              flag === "login" ? "" : "bg-light"
            } col text-center border-bottom fs-5 fw-bold cursor-pointer text-primary h-50px d-flex justify-content-center align-items-center `}
          >
            登入
          </div>
          <div
            onClick={flagRegister}
            className={`${
              flag === "register" ? "" : "bg-light"
            } col text-center fs-5 fw-bold border-bottom cursor-pointer text-primary h-50px d-flex justify-content-center align-items-center `}
          >
            註冊
          </div>
        </div>

        {/* 表格 */}
        {flag === "login" && (
          <form>
            <div className="my-3">
              <label
                htmlFor="emailInput"
                className="form-label text-gray-800 fw-bold"
              >
                信箱
              </label>
              <input
                type="email"
                className="form-control ext-gray-800"
                id="emailInput"
                placeholder="電子信箱"
                required
                autoComplete="true"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="passwordInput"
                className="form-label text-gray-800 fw-bold"
              >
                密碼
              </label>
              <input
                type="password"
                className="form-control ext-gray-800"
                id="passwordInput"
                placeholder="密碼"
                autoComplete="true"
              />
            </div>
            <span className="text-secondary cursor-pointer">忘記密碼?</span>
            <div className="d-flex justify-content-end mt-4">
              <button type="reset" className="btn btn-outline-danger w-25 me-4">
                取消
              </button>
              <button type="button" className="btn btn-outline-primary w-25">
                登入
              </button>
            </div>
          </form>
        )}
        {flag === "register" && (
          <form>
            <div className="my-3">
              <label
                htmlFor="nameInput"
                className="form-label text-gray-800 fw-bold"
              >
                姓名
              </label>
              <input
                type="text"
                className="form-control ext-gray-800"
                id="nameInput"
                placeholder="電子信箱"
                required
                autoComplete="true"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="emailInput"
                className="form-label text-gray-800 fw-bold"
              >
                信箱
              </label>
              <input
                type="email"
                className="form-control ext-gray-800"
                id="emailInput"
                placeholder="電子信箱"
                required
                autoComplete="true"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="passwordInput"
                className="form-label text-gray-800 fw-bold"
              >
                密碼
              </label>
              <input
                type="password"
                className="form-control ext-gray-800"
                id="passwordInput"
                placeholder="密碼"
                autoComplete="true"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="passwordAgain"
                className="form-label text-gray-800 fw-bold"
              >
                再次輸入密碼
              </label>
              <input
                type="password"
                className="form-control ext-gray-800"
                id="passwordAgain"
                placeholder="密碼"
                autoComplete="true"
              />
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="checkInput"
              />
              <label className="form-check-label" htmlFor="checkInput">
                同意使用規章
              </label>
            </div>
            <div className="d-flex justify-content-end mt-4">
              <button type="reset" className="btn btn-outline-danger w-25 me-4">
                取消
              </button>
              <button type="button" className="btn btn-outline-primary w-25">
                註冊
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
