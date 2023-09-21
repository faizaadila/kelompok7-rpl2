import React from "react";
import MainLayout from "../layouts/MainLayout";
import { Link } from "react-router-dom";
import Button from "../Buttons/Button";
import LoginInput from "../input/LoginInput";

function Alert() {
  alert('apakah anda yakin ingin Register')
}

const Login = () => {
  return (
    <>
      <MainLayout showHeader={false}>
        <section className="section-login-admin  h-200px">
          <div className="login_box flex h-[50px] w-50px    absolute top-50px left-50px transform -translate-x-1/2 -translate-y-1/2 bg-white overflow-hidden">
            <div className="right  ">
              <div
                className="bg-blur h-full "
                style={{
                  backgroundImage: "url('./float.png')",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  width: "400px",
                }}
              />
            </div>
            <div className="left w-[400px]    ">
              <div className="border-inherit border-2 py-10 px-10 mb-5">
                <form
                  action=""
                  className="contact flex flex-col justify-center h-full mt-[-0px]">
                  <h1 className="text-center mb-8 text-sky-500 ">LOGIN</h1>
                  <LoginInput type={"text"}  placeholder={"Username or email"} name={"username"} id={"username"} /> 
                  <br />
                  <LoginInput type={"text"} placeholder={"password"} name={"password"} id={"password"} />
                  <button />
                  <p className="text-center text-gray-400 mb-[-25px]">
                    Lupa password?
                  </p>
                  <Button type={"submit"} nama={"Login"}  />
                </form>
                <h3 className="text-center ">
                  Belum punya akun?{""}
                  <Link to={'/register'} onClick={Alert}>
                  <a href="" className="text-blue-600">
                    Daftar
                  </a>{""}
                  
                  </Link>
                </h3>
              </div>
             
              
            </div>
          </div>
        </section>
      </MainLayout>
    </>
  );
};

export default Login;
