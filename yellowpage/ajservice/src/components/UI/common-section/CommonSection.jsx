import React from "react";
import { Container } from "reactstrap";
import "../../../styles/common-section.css";

const CommonSection = (props) => {
  return (
    <section className="common__section">
      <Container>
        <h2 className="text-white">{props.title}</h2>
        <div className="shortcontact">
    <p className="text-white">{props.Bussinessname}</p>
    
        </div>
        <div className="shortcontact">
    <p className="text-white">{props.phonenumber}</p>
    
        </div>
      </Container>
    </section>
  );
};

export default CommonSection;
