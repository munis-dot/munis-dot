import React, { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Link ,useParams} from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import { useEffect } from "react";
// import products from "../assets/fake-data/products";
// import ProductCard from "../components/UI/product-card/ProductCard";
import ReactPaginate from "react-paginate";
import { useLocation } from "react-router-dom";
import "../styles/all-foods.css";
import "../styles/pagination.css";
import axios from "axios";
const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [pageNumber, setPageNumber] = useState(0);

  var [searchedProduct,setSearchedProduct]=useState([]);

  var[locat,setLocat]=useState([8.34,4.424]);
  const { key } = useParams();
//setSearchTerm(key);
//setSearchTerm(key);
  // const formdata =new FormData();
  
  // formdata.append('coordinates',locat);
  // formdata.append('searched',key);
  // useEffect(()=>{
  //     axios.post("http://localhost:8080/searh",formdata)
  //     .then((res)=>{setSearchedProduct(res.data)})
  //     .catch((err)=>{console.log(err);})
  
  // },[])

  const Searchnow=()=>{
    const ford =new FormData();
    //formdata.append('searched',searchTerm);
    ford.append('hh',"hdvcm");
    console.log(searchTerm);
      axios.post("http://localhost:8080/search",ford)
      .then((res)=>{console.log(res.data)})
      .catch((err)=>{console.log(err);})
      console.log("searchTerm");
  }
  // const searchedProduct = products.filter((item) => {
  //   if (searchTerm.value === "") {
  //     return item;
  //   }
  //   if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
  //     return item;
  //   } else {
  //     return console.log("not found");
  //   }
  // });
  // const location= useLocation();
  
  // if(location.state!= null){
  // searchedProduct=location.state.shops;
  // }



//  const [datas, setDatas] = useState([{}]);
 
//  var a=datas._id;
//   useEffect(() => {
//     axios
//       .get("http://localhost:8080/searched")
//       .then((res) => setSearchedProduct(Object.values(res.data)))
//       .catch((err) => console.log(err, "it has an error"));
//   },[]);
//   console.log(searchedProduct)
  // console.log(typeof(searchedProduct));
  // var [searchedProduct,setSearchedProduct]=useState([]);
  // setSearchedProduct([location.state.shops]);
  //const location= useLocation();
  // useEffect(()=>{
  //     console.log(location.state.shops)
  //      setSearchedProduct(location.state.shops);
     
  // },[location.state.shops])
  //setSearchedProduct(location.state.shops);

    // useEffect(()=>{
    // //console.log(user)
    // setTimeout(()=>{
    //   axios.post("http://localhost:8080/searched")
    //   .then(res=>{
    //   searchedProduct=(res.data);
    //    console.log(res.data)
    //   })
      
    //   .catch(error=>console.log(error))
    // },1)
  
    // })
  
 
//  return
  // const productPerPage = 12;
  // const visitedPage = pageNumber * productPerPage;
  // const displayPage = searchedProduct.slice(
  //   visitedPage,
  //   visitedPage + productPerPage
  // );

  // const pageCount = Math.ceil(searchedProduct.length / productPerPage);

  // const changePage = ({ selected }) => {
  //   setPageNumber(selected);
  // };


  function arrayBufferToBase64(buffer) {
    var binary = '';
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => binary += String.fromCharCode(b));
    return window.btoa(binary);
};

   var listitem;
  listitem = searchedProduct.map(
    (element) => {
      var base64String = arrayBufferToBase64(element.img.data.data);
        return (
          <div>
          
            <ul className='resultscon'>
            <li className='results d-flex'>
            <Col lg="3" md="4" sm="6" xs="6"> {
         <img src={"data:image/png;base64," + base64String} width="150" height="150" alt="bke"/>
     }</Col>
                <Col lg="3" md="4" sm="6" xs="6">  <h3>{element._id}</h3>
                <p>Business Name:{element.mobileno}</p>
                <p>city:{element.city}</p>
                <Link to="/shop" className="addTOCart__btn " >
            Contact
          </Link>
          <Link to="/foods/01" className="addTOCart__btn m-5" >
            visit
          </Link>
                </Col>
             
            </li>
            </ul>
            </div>
        )
    }
)

  return (
    <Helmet title="Search...">
      <CommonSection title="Search items" />

      <section>
        <Container>
          <Row>
            
            <Col lg="6" md="6" sm="6" xs="12">
              <div className="search__widget d-flex align-items-center justify-content-between ">
                <input
                  type="text"
                  placeholder="I'm looking for...."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <span>
                  <i class="ri-search-line" onClick={Searchnow}></i>
                </span>
              </div>
            </Col>
            <Col lg="6" md="6" sm="6" xs="12" className="mb-5">
              <div className="sorting__widget text-end">
                <select className="w-50">
                  <option>Default</option>
                  <option value="ascending">Alphabetically, A-Z</option>
                  <option value="descending">Alphabetically, Z-A</option>
                  <option value="high-price">High Price</option>
                  <option value="low-price">Low Price</option>
                </select>
              </div>
            </Col>
            <Row>
        {/* <h6>{displayPage.length} results found</h6> */}

            </Row>
            <br></br>
            {listitem}
            
       

            {/* <div>
              <ReactPaginate
                pageCount={pageCount}
                onPageChange={changePage}
                previousLabel={"Prev"}
                nextLabel={"Next"}
                containerClassName=" paginationBttns "
              />
            </div> */}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Search;


// {displayPage.map((item) => (
//   <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mb-4">
//     {/* {<ProductCard item={item} />} */}
    
//   </Col>
// ))}