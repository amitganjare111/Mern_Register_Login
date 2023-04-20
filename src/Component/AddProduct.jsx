import React from 'react';
import {useState, useEffect} from 'react';
import ProductService from '../Service/ProductService';

 const AddProduct = () => {

    const [product, setProduct] = useState({
        name:"",
        quantity:"",
        price:"" 
    });

    const [msg, setMsg] = useState("");

    const handleChange = (e) =>
    {
        const value = e.target.value;
        setProduct({...product,[e.target.name]: value })
    };

    const ProductRegister = (e) =>
    {
        e.preventDefault();

        ProductService.saveProduct(product).then((res) => 
        {  
            setMsg("Product Added Sucessfully");
            setProduct({
            name:"",
            quantity:"",
            price:"" 
        });
        })
        .catch((error) => 
        {
            alert(error);
        })
    }

    useEffect(() => {
        setTimeout(() => {
          setMsg("")
        }, 1000);
      }, [msg])

      
  return (
    <>
    <div mt-20>
     <div className="container ">
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="card jumbotron">
                    <div className="card-header fs-5 text-center bg-warning" >
                         ProductName 
                    </div>
                    <p className="fs-4 text-center text-success">{msg}</p>
                    <div className="card-body">
                        <form onSubmit={(e) => ProductRegister(e)}>
                            <div className="mb-3">
                                <label>Enter Product Name</label>
                                <input type="text" name="name" className="form-control" onChange={(e)=> handleChange(e)} value={product.name}/>
                            </div>
                            <div className="mb-3">
                                <label>Enter Product Quantity</label>
                                <input type="number" name="quantity" className="form-control" onChange={(e)=> handleChange(e)} value={product.quantity} />
                            </div>
                            <div className="mb-3">
                                <label>Enter Product Price</label>
                                <input type="number" name="price" className="form-control" onChange={(e)=> handleChange(e)} value={product.price}/>
                            </div>
                            <button className="btn btn-primary col-md-12">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </div>  
        </div>
    </>
  )
}
export default AddProduct;