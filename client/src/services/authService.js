import { userLogin, userRegister } from "../redux/features/auth/authAction";
import store from "../redux/store";

export const HandleLogin = (e, email, password, role) => {
  e.preventDefault();
  try {
    if (!role || !email || !password) {
      return alert("Please fill all the fields");
    }
    store.dispatch(userLogin({ email, password, role }));
    console.log("login", e, email, password, role);
  } catch (error) {
    console.log(error);
  }
};

export const HandleRegister = (
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
) => {
  e.preventDefault();
  try {
    store.dispatch(
      userRegister({
        name,
        role,
        email,
        password,
        organizationName,
        hospitalName,
        website,
        address,
        phone,
      })
    );
  } catch (error) {
    console.log(error);
  }
};
