import axios from "axios";

const API_URL = "http://localhost:8080";

class ProductService{
 
    saveProduct(product)
    {
        return axios.post(API_URL+"/addProduct",product)
    }
   
    getAllProduct()
    {
        return axios.get(API_URL+"/products");
    }

    getProductById(id)
    {
        return axios.get(API_URL + "/productById/" + id);
    }

    getProductByName(name)
    {
        return axios.get(API_URL + "/product/" + name);
    }

    deleteProduct(id)
    {
        return axios.delete(API_URL + "/delete/" + id);
    }

    updateProduct(id)
    {
        return axios.put(API_URL + "/update/{id}" + id);
    }
}

export default new ProductService;