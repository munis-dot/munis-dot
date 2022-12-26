import React from "react"
import { Form,FormGroup,FormText,Label,Input,Container,Row,Col} from "reactstrap"
import "../styles/postad.css"
import '../styles/custom.css'
import CommonSection from "../components/UI/common-section/CommonSection"
import axios from "axios"
import { useState } from "react"
//import { link } from "fs"
//import { useNavigate } from "react-router-dom"
import TagsInput from "../components/TagsInput"


const Postad=()=>{
const [ userData, setUserData ] = useState({});
const [ima,setIma]=useState('');
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    console.log(userData);
  };
  var keyword=[];
  const selectedTags = tags => {
    keyword=tags;
    console.log(tags);
};
  const handleChange2 = (e) => {
    setIma(e.target.files[0])
      console.log(e.target.files);
    };
  
   const submited=(e)=>{
    e.preventDefault();
    const formdata =new FormData();
    formdata.append('image',ima);
    formdata.append('tags',keyword);
    formdata.append('Businessname',userData.Businessname);
    formdata.append('Owner',userData.Owner);
    formdata.append('address',userData.address);
    formdata.append('number',userData.number);
    formdata.append('landline',userData.landline);
    formdata.append('email',userData.email);
    formdata.append('url',userData.url);
    formdata.append('hours',userData.hours);
    formdata.append('hours2',userData.hours2);
    formdata.append('workdays',userData.workdays);
    formdata.append('about',userData.about);
    formdata.append('category',userData.category);
    formdata.append('sub_category',userData.sub_category);
   
      axios.post("http://localhost:8080/upload",formdata )
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
      <h3>Business Information</h3>
    <FormGroup>
    <Label for="Businessname">
     Business name
    </Label>
    <Input
      id="Businessname"
      name="Businessname"
      placeholder="Enter your Business name"
      type="text"
      onChange={handleChange}
    />
  </FormGroup>
  <FormGroup>
    <Label for="Owner">
      Owner Name
    </Label>
    <Input
      id="Owner"
      name="Owner"
      placeholder="Enter Owner name"
      type="text"
      onChange={handleChange}
    />
  </FormGroup>
  <FormGroup>
    <Label for="address">
      Address
    </Label>
    <Input
      id="address"
      name="address"
      placeholder="(ex: Door.no/Street/area/city/pincode)"
      type="textarea"
      onChange={handleChange}
      style={{ height: 220 }}
    />
  </FormGroup>
  <br />
  <h3>Contact Information</h3>
  <FormGroup>
    <Label for="Number">
      Contact Number
    </Label>
    <Input
      id="Number"
      name="number"
      placeholder="Enter your mobile number"
      type="number"
      onChange={handleChange}
    />
  </FormGroup>
  <FormGroup>
    <Label for="landline">
      LandLine number
    </Label>
    <Input
      id="landline"
      name="landline"
      placeholder="Enter your Landline number"
      type="number"
      onChange={handleChange}
    />
  </FormGroup>
  <FormGroup>
    <Label for="email">
      Email id
    </Label>
    <Input
      id="email"
      name="email"
      placeholder="Enter your Email id"
      type="email"
      onChange={handleChange}
    />
  </FormGroup>
  <FormGroup>
    <Label for="url">
     Url
    </Label>
    <Input
      id="url"
      name="url"
      placeholder="Enter your site links"
      type="url"
      onChange={handleChange}
    />
  </FormGroup>
  <h3>Other Information</h3>
  <FormGroup>
    <Label for="workinghours">
      Workiing Hours
    </Label>
    <Input
      id="hours"
      name="hours"
      placeholder="Opening time"
      type="time"
      onChange={handleChange}
    />
      <Input
      id="hours2"
      name="hours2"
      placeholder="Closing time"
      type="time"
      onChange={handleChange}
    />
  </FormGroup>
  <FormGroup>
    <Label for="workdays">
     Working Days
    </Label>
    <Input
      id="workdays"
      name="workdays"
      placeholder="Working days"
      type="select"
      onChange={handleChange}
    >
       <option>
        MON-FRI
      </option>
      <option>
        MON-SAT
      </option>
      <option>
        ALL DAYS
      </option>
     
    </Input>
    <Label for="about">
      Description
    </Label>
    <Input name="about" id="about" type="textarea" style={{ height: 220 }} cols="30" rows="10" placeholder="About your Business" onChange={handleChange}/>
   
  </FormGroup>
  <FormGroup>
    <Label for="exampleSelect">
      Category
    </Label>
    <Input
      id="exampleSelect"
      name="category"
      type="select"
      onChange={handleChange}
    >
      <option>
        Restaurent
      </option>
      <option>
        2
      </option>
      <option>
        3
      </option>
      <option>
        4
      </option>
      <option>
        5
      </option>
    </Input>
  </FormGroup>
  <FormGroup>
    <Label for="exampleSelectMulti">
      Sub-category
    </Label>
    <Input
      id="exampleSelectMulti"
      onChange={handleChange}
      name="sub_category"
      type="select"
    >
      <option>
        1
      </option>
      <option>
        2
      </option>
      <option>
        3
      </option>
      <option>
        4
      </option>
      <option>
        5
      </option>
    </Input>
  </FormGroup>
  <FormGroup>
    <Label for="exampleText">
      Keyword
    </Label>
    {/* <Input
      id="exampleText"
      name="tags"
      type="textarea"
      onChange={handleChange}
    /> */}
    <TagsInput selectedTags={selectedTags}  tags={['Nodejs', 'MongoDB']}/>
  </FormGroup>
  <FormGroup>
    <Label for="exampleFile">
      Image
    </Label>
    <Input
      id="exampleFile"
      name="image"
      type="file"
      onChange={handleChange2}
    />
    <FormText>
      This is some placeholder block-level help text for the above input. It‘s a bit lighter and easily wraps to a new line.
    </FormText>
    
  </FormGroup>
  {/* <FormGroup>
    <Label for="exampleRange">
      Range
    </Label>
    <Input
      id="exampleRange"
      name="range"
      type="range"
    />
  </FormGroup>
  <FormGroup check>
    <Input type="radio" />
    {' '}Option one is this and that—be sure to
    <Label check>
      include why it‘s great
    </Label>
  </FormGroup>
  <FormGroup check>
    <Input type="checkbox" />
    <Label check>
      Check me out
    </Label>
    
  </FormGroup> */}
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
