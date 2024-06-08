import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import styles from "../styles/Home.module.css";
 
import dynamic from "next/dynamic";
const Forget = dynamic(() => import("./Auth/forget.js"), {
  loading: () => <p>Loading ...</p>,
});
const Login = dynamic(() => import("./Auth/login.js"), {
  loading: () => <p>Loading ...</p>,
});
const NewPassword = dynamic(() => import("./Auth/NewPassword.js"), {
  loading: () => <p>Loading ...</p>,
});
const Register = dynamic(() => import("./Auth/Register.js"), {
  loading: () => <p>Loading ...</p>,
});
const ResendCode = dynamic(() => import("./Auth/ResendCode.js"), {
  loading: () => <p>Loading ...</p>,
});
// RiLockPasswordFill
import Head from "next/head";

const Auth = () => {
  const { loginn, register, forget, sendcode, newpass } = useSelector(
    (state) => state.AuthSlice
  );
  return (
    <>
    <div className="login-content">
       <Container>
          <div className="login-main">
            {loginn && <Login />}
            {register && <Register />}
            {forget && <Forget />}
            {sendcode && <ResendCode />}
            {newpass && <NewPassword />}
          </div>
      </Container>
    </div>
    </>
  );
};

export default Auth;
