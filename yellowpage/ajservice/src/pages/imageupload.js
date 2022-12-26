import React from "react"
import { Form,FormGroup,FormText,Label,Input,Container,Row,Col} from "reactstrap"
import "../styles/postad.css"
import CommonSection from "../components/UI/common-section/CommonSection"
import axios from "axios"
import { useState } from "react"
import { useLocation } from "react-router-dom"


const Postad=()=>{
const [ userData, setUserData ] = useState('');
const location= useLocation();
  var shopdetails;
 var Details=location.state.userData;
  shopdetails=location.state.userData.Businessname;
  console.log(shopdetails);
  const handleChange = (e) => {
  setUserData(e.target.files[0])
    console.log(e.target.files);
  };

   const submited=(e)=>{
    e.preventDefault();
    const formdata =new FormData();
    formdata.append('image',userData);
    formdata.append('businessname',shopdetails);
      axios.post("http://localhost:8080/uploadimage",formdata )
      .then(res=>console.log(res))
  
    }
    const handle=(e)=>{
      e.preventDefault();
    }
return(
<div><CommonSection title="Post Your Ad" />
    <Container>
      
        <Row>
            <Col>
    <Form className="m-5 bg-white p-5" id="form" onsubmit={handle}>
      <h3 id='head'>Your Details</h3>
      <h6>Businessname:{shopdetails}</h6>
      <h6>Ownername:{Details.Owner}</h6>
      <h6>phone number:{Details.number}</h6>
      <h6>Email:{Details.email}</h6>
      <br></br>
      <h3>Upload profile picture</h3>

  <FormGroup>
    <Label for="exampleFile">
      Image
    </Label>
    <Input
      id="exampleFile"
      name="image"
      type="file"
      onChange={handleChange}
    />
    <FormText>
      This is some placeholder block-level help text for the above input. It‘s a bit lighter and easily wraps to a new line.
    </FormText>
    
  </FormGroup>
  
  <div className="d-flex align-items-center justify-content-center">
  <button className="addTOCart__btn  "onClick={submited} >
            Submit
          </button>
          </div>
</Form>
</Col>
</Row>
</Container>

</div>
)
}

export default Postad;
