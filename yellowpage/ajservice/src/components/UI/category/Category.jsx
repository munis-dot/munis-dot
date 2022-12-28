import React from "react";
import { useState ,useEffect} from "react";
import { Container, Row, Col } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import 'D:/20US32/yellowpage/ajservice/src/styles/custom.css'
//D:\20US32\yellowpage\ajservice\src\styles\custom.css
import categoryImg01 from "../../../assets/images/category-01.png";
import categoryImg02 from "../../../assets/images/category-02.png";
import categoryImg03 from "../../../assets/images/category-03.png";
import categoryImg04 from "../../../assets/images/category-04.png";
import categoryImg05 from "../../../assets/images/category-05.png";
import categoryImg06 from "../../../assets/images/category-06.png";
import categoryImg07 from "../../../assets/images/category-07.png";
import categoryImg08 from "../../../assets/images/category-08.png";
import categoryImg09 from "../../../assets/images/category-09.png";
import categoryImg10 from "../../../assets/images/category-10.png";
import categoryImg11 from "../../../assets/images/category-11.png";
import categoryImg12 from "../../../assets/images/category-12.png";
import categoryImg13 from "../../../assets/images/category-13.png";
//import categoryImg05 from "../../../assets/images/category-05.png";

import "../../../styles/category.css";

const categoryData = [
  {
    display: "Restaurent",
    imgUrl: categoryImg01,
  },
  {
    display: "medicine",
    imgUrl: categoryImg02,
  },

  {
    display: "Transport",
    imgUrl: categoryImg03,
  },

  {
    display: "Auto Mobiles",
    imgUrl: categoryImg04,
  },
  {
    display:"Wedding",
    imgUrl: categoryImg05,
  },
  {
    display:"Fashion",
    imgUrl: categoryImg06,
  },
  {
    display:"Personal Care",
    imgUrl: categoryImg07,
  },
  {
    display:"HouseHold Services",
    imgUrl: categoryImg08,
  },
  {
    display:"Education",imgUrl: categoryImg09,
  },
  {
    display:"Entertainment",imgUrl: categoryImg10,
  },
  {
    display:"Electronics",imgUrl: categoryImg11,
  },
  {
    display:"24 X 7",imgUrl: categoryImg12,
  },
  // {
  //   display:"Loans",imgUrl: categoryImg13,
  // },
];


 


const Category = () => {
  // var [shops,setShops]=useState([
  //   {
  //    id:434,
  //    title:"achbjh",
  //    city:"srivi"
  //   }
  //  ]);
  //  var sa;
  //  useEffect(()=>{
  //   //console.log(user)
  //   setTimeout(()=>{
  //     axios.post("http://localhost:8080/getcategory",sa)
  //     .then(res=>{
  //      setShops(res.data);
  //      //console.log(res.data)
  //     })
      
  //     .catch(error=>console.log(error))
  //   },1)
  
  //  },[])

  // const navigate=useNavigate();
  // function Passdata(){
   
  //   navigate('/search',{state:{shops}});
  // }
 
  return (
    <Container>
      <Row>
        {categoryData.map((item, index) => (
          <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={index}>
            {/* <Link to="/search"> */}
            <Link to={`/search/${item.display}`} className="link">
            <div className="category__item d-flex align-items-center gap-3" >
              <div className="category__img">
                <img src={item.imgUrl} alt="category__item" />
              </div>
              <h6 >{item.display}</h6>

            </div>
            </Link>
            {/* </Link> */}
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Category;
