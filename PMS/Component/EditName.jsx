import React from 'react'
import ProductService from '../Service/ProductService';
import { useNavigate, useParams } from "react-router-dom";
import{useState, useEffect} from "react";

const EditProduct = () => {
    const [product, setProduct] = useState({
      id:"",
      name:"",
      quantity:"",
      price:"" 
    });

    const data = useParams();
    const navigate = useNavigate();

    useEffect(() => {
      ProductService.getProductById(data.id).then((res) => {
          setProduct(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } );

    const handleChange = (e) => {
      const value = e.target.value;
      setProduct({ ...product, [e.target.name]: value });
    };

    const updateProduct = (e) => 
    {
      e.preventDefault();
      ProductService.updateProduct(product.id, product).then((res) => {
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
        });
    };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card">
            <div className="card jumbotron">
              <div className="card-header text-center fs-5 bg-warning">
                Edit Product
                </div>
                <p className="text-success">{}</p>

                <div className="card-body">
                <form onSubmit={(e) => updateProduct(e)}>

                  <div className="mb-2">
                    <label>Enter Product Name</label>
                    <input type="text" className="form-control" name="ProductName" 
                    value={product.ProductName} 
                    onChange={(e) =>handleChange(e)}/>  
                  </div>

                  <div className="mb-3">
                    <label>Enter Product Quantity</label>
                    <input type="text" className="form-control" name="ProductQuantity"
                    value={product.ProductQuantity} 
                    onChange={(e) =>handleChange(e)} />
                  </div>

                  <div className="mb-3">
                    <label>Enter Product Price</label>
                    <input type="text" className="form-control" name="ProductPrice"
                    value={product.ProductPrice} 
                    onChange={(e) =>handleChange(e)} />
                  </div>

                  <div className="text-center">
                    <button className="btn btn-success">Submit</button>
                    <input type="Reset" className="btn btn-danger ms-2" value="Reset"/>
                  </div>

              </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default EditProduct;