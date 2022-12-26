import React, { useRef } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";

import  { useState } from 'react';
import { firebase, auth } from '../components/firebase';
//import { useContext } from 'react';
//import { usercontext } from './usercontext';
import { Link } from 'react-router-dom';
const Login = () => {
	// Inputs
	const [mynumber, setnumber] = useState("");
	const [otp, setotp] = useState('');
	const [show, setshow] = useState(false);
	const [final, setfinal] = useState('');
 // const {value,setvalue}=useContext(usercontext)
	// Sent OTP
	const signin = () => {

		if (mynumber === "" || mynumber.length < 10) return;

		let verify = new firebase.auth.RecaptchaVerifier('recaptcha-container');
		auth.signInWithPhoneNumber(mynumber, verify).then((result) => {
			setfinal(result);
			alert("code sent")
			setshow(true);
		})
			.catch((err) => {
				alert(err);
				window.location.reload()
			});
	}

	// Validate OTP
	const ValidateOtp = () => {
		if (otp === null || final === null)
			return;
		final.confirm(otp).then((result) => {
		console.log(result.user.phoneNumber);
      // success
    // setvalue(result.user.phoneNumber);
		}).catch((err) => {
			alert("Wrong code");
		})
	}

// 	return (
// 		<div style={{ "marginTop": "200px" }}>
//       <Link to='/register'>1</Link>
//        <Link to='/login'>2</Link>
//        <Link to='/show'>3</Link>
// 			<center>
// 				<div style={{ display: !show ? "block" : "none" }}>
// 					<input value={mynumber} onChange={(e) => {
// 					setnumber(e.target.value) }}
// 						placeholder="phone number" />
// 					<br /><br />
// 					<div id="recaptcha-container"></div>
// 					<button onClick={signin}>Send OTP</button>
// 				</div>
// 				<div style={{ display: show ? "block" : "none" }}>
// 					<input type="text" placeholder={"Enter your OTP"}
// 						onChange={(e) => { setotp(e.target.value) }}></input>
// 					<br /><br />
// 					<button onClick={ValidateOtp}>Verify</button>
//           <h1>{value}</h1>
// 				</div>
// 			</center>
// 		</div>
// 	);
// }



  // const loginNameRef = useRef();
  // const loginPasswordRef = useRef();

  // const submitHandler = (e) => {
  //   e.preventDefault();
  // };

  return (
    <Helmet title="Login">
      <CommonSection title="Login" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              {/* <form className="form mb-5" > */}
                <div className="form__group">
                  {/* <input
                    type="number"
                    placeholder="Enter Mobile Number"
                    required
                    ref={loginNameRef}
                  /> */}
                  <input value={mynumber} onChange={(e) => {
					setnumber(e.target.value) }}
						placeholder="phone number" />
            <div id="recaptcha-container"></div>
					<button onClick={signin} className="addTOCart__btn">Send OTP</button>
                </div>
                <div className="form__group">
                  {/* <input
                    type="Number"
                    placeholder="XXX XXX -OTP"
                    required
                    ref={loginPasswordRef}
                  /> */}
                  <input type="text" placeholder={"Enter your OTP"}
						onChange={(e) => { setotp(e.target.value) }}></input>
					<br /><br />
					<button onClick={ValidateOtp} className="addTOCart__btn">Verify</button>
                </div>
                {/* <button type="submit" className="addTOCart__btn">
                  Login
                </button> */}
              {/* </form> */}
             
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;
