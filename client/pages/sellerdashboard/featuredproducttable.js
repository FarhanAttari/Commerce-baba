import { useEffect ,useState} from "react";
// import { Link , useNavigate} from "react-router-dom";
import Link from "next/link"
import { useRouter } from "next/router";
import { Card, CardBody, CardTitle, CardSubtitle, Table,Button } from "reactstrap";
import axios from 'axios'
import CurrentStore from "../../layouts/CurrentStore";

const ProjectTables = () => {
   let [product,setProduct]=useState([]);
   let [reFetch,setReFetch]=useState("");
//  let navigate = useNavigate()
let navigate = useRouter()
   let currentStore=CurrentStore()
 
    useEffect( ()=>{
        async function fetchStoreProducts() { 
          if(currentStore._id!==undefined){
          let resp = await axios.get('/product/storeproducts?id='+currentStore._id);
          console.log(resp.data);
          setProduct(resp.data);
          }
        }
        fetchStoreProducts();
 
    }, [reFetch,currentStore]);
    
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Products Listing</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Overview of the Products
          </CardSubtitle>

          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Product Title</th>
                <th>Product Sizes with Stock </th>
                <th>Product Detail</th>
                <th>Prize</th>
                <th>Total Stock</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {product.map((tdata, index) => tdata.productFeatured=="true"? (
                <tr key={index} className="border-top">
                  <td>
                    <div className="d-flex align-items-center p-2">
                      <img
                        src={tdata.productImage1}
                        className="rounded-circle"
                        alt="avatar"
                        width="45"
                        height="45"
                      />
                      <div className="ms-3">
                        <h6 className="mb-0">{tdata.productTitle}</h6>
                   
                      </div>
                    </div>
                  </td>
                  <td>
                    <span> Small: { tdata.productSizeWithStock.Small},  </span>
                    <span> Medium: { tdata.productSizeWithStock.Medium} , </span>
                    <span> Large: { tdata.productSizeWithStock.Large},  </span>
                    <div> X-Large: {tdata.productSizeWithStock.xLarge}   </div>
                   </td>
                  <td>
                  <Link className=" text-secondary py-3 link"
                   to={`/SellerDashboard/ProductDetail${tdata._id}`}>
                   View Product Detail
                   &nbsp;
                  <i className="bi bi-eye "></i>
                  </Link>
                  </td>
                  <td>{tdata.productPrice}</td>
                  <td>{tdata.totalProductStock}</td>
                  <td>
                  <Button className="Approve"
                   onClick={()=>{
                    navigate.push(`/SellerDashboard/UpdateProduct${tdata._id}`)   
                   }} 
                  
                  ><i class="bi bi-pencil-square"></i></Button> 

                  {/* <Button className="Approve"
                      onClick={async()=>{
                    let resp = await axios.put("/product/productFeaturedStatus?id="+tdata._id,{
                       productFeatured:"true"  
                    })
                    setReFetch(resp.data) 
                    }}
                  ><i class="bi bi-patch-check"></i></Button> */}

                  {/* <Button className="Reject"
                     onClick={async()=>{
                    let resp = await axios.put("/product/productFeaturedStatus?id="+tdata._id,{
                       productFeatured:"false"  
                    })
                    setReFetch(resp.data) 
                    }}
                  > <i class="bi bi-x-circle"></i></Button>  */}
                  <Button className="Reject"
                    onClick={async()=>{
                    let resp = await axios.delete(`/product/${tdata._id}`)
                    setReFetch(resp.data) 
                    }}
                  ><i class="bi bi-trash3"></i></Button>
                  </td>
                </tr>
              ):null)}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProjectTables;
