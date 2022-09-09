import axios from "axios"


const BASE_URL = "https://fakestoreapi.com"; 


// baraye gereftane products
const getProducts=async()=>{
// bayad ta vaghti k req anjam nashode sabr kone va nare khate baed 
// chon oonjuri response i vojud nadare k return kone
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data;

}

export {getProducts};