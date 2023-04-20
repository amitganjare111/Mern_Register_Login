import React from 'react'
import {useState} from 'react';
import {Link} from 'react-router-dom';
import { useEffect } from 'react';
import ProductService from '../Service/ProductService';

const Home = () => {

    const [productList, setProductList] = useState([])
    const [msg, setMsg] = useState("")
    
    
    ProductService.getAllProduct().then((res) => 
    {
      setProductList(res.data);
    })
    .catch((error) => 
    {
      console.log(error);
    });    
  
    const deleteProduct = (id) => {
      ProductService.deleteProduct(id).then((res) =>
       {
          setMsg("Delete Sucessfully");
          console.log(id);
       })
        .catch((error) => 
        {
          console.log(error);
        });
    };

    useEffect(() => {
      setTimeout(() => {
        setMsg("")
      }, 1000);
    }, [msg])
  return (
    <>
    <div className="container mt-2">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header fs-3 text-center">
              All Product List
            <p className="fs-4 text-center text-success" id="msg">{msg}</p>
            </div>
            <div className="card-body">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Sr.No</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Price</th>
                  </tr>
                </thead>
                <tbody>
                {productList.map((e, id) => (
                    <tr>
                      <th scope="row">{id+1}</th>
                      <td>{e.name}</td>
                      <td>{e.quantity}</td>
                      <td>{e.price}</td>
                      <td> <Link to={'EditName/'+ e.id} className="btn btn-sm btn-primary">Edit</Link>
                      <button onClick={() => deleteProduct(e.id)} className="btn btn-sm btn-danger ms-2" > Delete </button>
                      </td>
                    </tr>
                ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Home;