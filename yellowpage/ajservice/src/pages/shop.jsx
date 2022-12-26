import React, { useRef,useState,useEffect } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import "../styles/shop.css";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import About from "../components/shop_details/About";
import Location from "../components/shop_details/Location";
import Contact from "../components/shop_details/Contact";

const Register = (props) => 
{
  
   const [category, setCategory] = useState("ABOUT");
  var[isabout,setIsabout]=useState(true);
  var[iscontact,setIscontact]=useState(false);
  var[islocation,setIslocation]=useState(false);

  useEffect(() => {
    if (category === "ABOUT") {
       setIsabout(true);
      setIscontact(false);
      setIslocation(false);
    }

    if (category === "CONTACT") {
      setIsabout(false);
      setIscontact(true);
      setIslocation(false);
    }

    if (category === "LOCATION") {
      setIsabout(false);
      setIscontact(false);
      setIslocation(true);
    }

  });

  return (
    <Helmet title="shop">
      <CommonSection title="Shop" />
      <section>
        <Container>
          <Row>
            <Col lg="4" md="4" sm="12" className="m-auto text-center" id="left_shop">
             <img src="D:\Certificates\PROJ\React-food-delivery-app-main\project\src\assets\images\ava-3.jpg"></img>
<h1>{props.shopname}kk store</h1>

            </Col>
            <Col lg="4" md="4" sm="12" className="m-auto text-center">
              <Row>  <Col lg="12">
              <div className="food__category1 d-flex align-items-center justify-content-center gap-4">
                <button
                  className={`all__btn  ${
                    category === "ABOUT" ? "foodBtnActive" : ""
                  } `}
                  
                   onClick={() => setCategory("ABOUT")}
                >
                  <Link to="/register"></Link>
                  ABOUT
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "CONTACT" ? "foodBtnActive" : ""
                  } `}
                   onClick={() => setCategory("CONTACT")}
                >
                  <Link to="/register/Contact"></Link>
                  <img src="" alt="" />
                  CONTACT
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "LOCATION" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("LOCATION")}> 
                  <img src={""} alt="" />
                 LOCATION
                </button>

               
              </div>
            </Col>
</Row>
              <Row>
                <div className={isabout ? 'about1' : 'about2'} ><About/></div>
           <div className={iscontact ? 'about1' : 'about2'}><h1>fgd</h1><Contact/></div>
           <div className={islocation ? 'about1' : 'about2'}><h1>fgd</h1><Location/></div>
                   </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Register;
