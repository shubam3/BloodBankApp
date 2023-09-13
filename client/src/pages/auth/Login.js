import React from "react";
import Forms from "../../componenets/shared/forms/Forms";
import { useSelector } from "react-redux";
import Spinner from "./../../componenets/shared/Spinner";
import { toast } from "react-toastify";

const Login = () => {
  const { loading, error } = useSelector((state) => state.auth);
  return (
    <>
      {error && <span>{toast(error)}</span>}
      {loading ? (
        <Spinner />
      ) : (
        <div className="row g-0">
          <div className="col-md-8 form-banner">
            <img src="./banner1.jpg" alt="Not working" />
          </div>
          <div className="col-md-4 form-container">
            <Forms
              formTitle={"Login Page"}
              submitBtn={"Login"}
              formType={"login"}
            ></Forms>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
