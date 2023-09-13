import { React, useState } from "react";
import InputType from "./inputType";
import { Link } from "react-router-dom";
import { HandleLogin, HandleRegister } from "../../../services/authService";

const Forms = ({ formType, submitBtn, formTitle }) => {
  const [role, setRole] = useState("donar");
  const [name, setName] = useState("");
  const [organizationName, setOrganizationName] = useState("");
  const [hospitalName, setHospitalName] = useState("");
  const [website, setWebsite] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <form
        onSubmit={(e) => {
          if (formType === "login")
            return HandleLogin(e, email, password, role);
          else if (formType === "register")
            return HandleRegister(
              e,
              name,
              role,
              email,
              password,
              organizationName,
              hospitalName,
              website,
              address,
              phone
            );
        }}
      >
        <h1 className="text-center">{formTitle}</h1>
        <hr />

        <div className="d-flex mb-3">
          <div className="form-check ">
            <input
              type="radio"
              className="form-check-input"
              name="role"
              id="donarRadio"
              value={"donar"}
              onChange={(e) => setRole(e.target.value)}
              defaultChecked
            />
            <label htmlFor="donarRadio" className="form-check-label">
              Donar
            </label>
          </div>
          <div className="form-check ms-2">
            <input
              type="radio"
              className="form-check-input"
              name="role"
              id="adminRadio"
              value={"admin"}
              onChange={(e) => setRole(e.target.value)}
            />
            <label htmlFor="adminRadio" className="form-check-label">
              Admin
            </label>
          </div>
          <div className="form-check ms-2">
            <input
              type="radio"
              className="form-check-input"
              name="role"
              id="hospitalRadio"
              value={"hospital"}
              onChange={(e) => setRole(e.target.value)}
            />
            <label htmlFor="hospitalRadio" className="form-check-label">
              Hospital
            </label>
          </div>
          <div className="form-check ms-2">
            <input
              type="radio"
              className="form-check-input"
              name="role"
              id="organizationRadio"
              value={"organization"}
              onChange={(e) => setRole(e.target.value)}
            />
            <label htmlFor="organizationRadio" className="form-check-label">
              Organization
            </label>
          </div>
        </div>
        {(() => {
          //eslint-disable-next-line
          switch (true) {
            case formType === "login": {
              return (
                <>
                  <InputType
                    Labeltext={"Email"}
                    labelFor={"foremail"}
                    InputTYPE={"email"}
                    name={"email"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <InputType
                    Labeltext={"Password"}
                    labelFor={"forPassword"}
                    InputTYPE={"password"}
                    name={"password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </>
              );
            }
            case formType === "register": {
              return (
                <>
                  <InputType
                    Labeltext={"Email"}
                    labelFor={"foremail"}
                    InputTYPE={"email"}
                    name={"email"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <InputType
                    Labeltext={"Password"}
                    labelFor={"forPassword"}
                    InputTYPE={"password"}
                    name={"password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {(role === "admin" || role === "donar") && (
                    <InputType
                      Labeltext={"Name"}
                      labelFor={"forName"}
                      InputTYPE={"text"}
                      name={"name"}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  )}
                  {role === "hospital" && (
                    <InputType
                      Labeltext={"Hospital Name"}
                      labelFor={"forHospitalName"}
                      InputTYPE={"text"}
                      name={"hospitalName"}
                      value={hospitalName}
                      onChange={(e) => setHospitalName(e.target.value)}
                    />
                  )}
                  {role === "organization" && (
                    <InputType
                      Labeltext={"Organization Name"}
                      labelFor={"fororganizationName"}
                      InputTYPE={"text"}
                      name={"organizationName"}
                      value={organizationName}
                      onChange={(e) => setOrganizationName(e.target.value)}
                    />
                  )}

                  <InputType
                    Labeltext={"website"}
                    labelFor={"forWebsite"}
                    InputTYPE={"text"}
                    name={"website"}
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                  <InputType
                    Labeltext={"Address"}
                    labelFor={"forAddress"}
                    InputTYPE={"text"}
                    name={"address"}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  <InputType
                    Labeltext={"Phone"}
                    labelFor={"forPhone"}
                    InputTYPE={"text"}
                    name={"phone"}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </>
              );
            }
          }
        })()}

        <div className="d-flex flex-row justify-content-between">
          {formType === "login" ? (
            <p>
              Not register yet ? Register
              <Link to="/register"> Here !</Link>
            </p>
          ) : (
            <p>
              Already User Please
              <Link to="/login"> Login !</Link>
            </p>
          )}
          <button className="btn btn-primary" type="submit">
            {submitBtn}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Forms;
