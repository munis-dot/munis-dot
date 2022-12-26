import React from "react";

import "../../../styles/product-card.css";

import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";
import { useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ProductCard = (props) => {
  const { id, title, image01, price } = props.item;
  const dispatch = useDispatch();
// var [shops,setShops]=useState([
//  {
//   id:434,
//   title:"achbjh",
//   city:"bdhsjj"
//  },{
//   city:"dsfh"
//  }
// ]);
  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        image01,
       
      })
    );
  };

 
 // setShops([{city:"dshjjhk"}]);
    // const navigate=useNavigate();
    //   function Passdata(){
    //     // useEffect(()=>{
    //     //   //console.log(user)
    //     //   setTimeout(()=>{
    //     //     axios.post("http://localhost:8080/getcategory",title)
    //     //     .then(res=>{
    //     //      setShops(res.data);
    //     //      //console.log(res.data)
    //     //     })
            
    //     //     .catch(error=>console.log(error))
    //     //   },1)
        
    //     //  })
    //     navigate('/search',{state:{shops}});
    //   }

  return (
    <div className="product__item">
      <div className="product__img">
        <img src={image01} alt="product-img" className="image" />
      </div>

      <div className="product__content">
       <Link to={`/search/${title}`}><h5>
          {/* <Link to={`/search`}>{title}</Link> */}
{title}
        </h5>
        </Link> 
        <div className=" d-flex align-items-center justify-content-center ">
         
          <button className="addTOCart__btn " onClick={addToCart}>
            Add to Favourite
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
