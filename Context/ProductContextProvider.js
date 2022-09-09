import React , {useState , useEffect , createContext} from 'react';

// API:
import { getProducts } from '../services/Api';


export const ProductContext = createContext();



const ProductContextProvider = ({children}) => {

    // etelaate fetchAPI ro mirizim dakhele ye state
     // va ye array ro b onvane vurudi midim 
    // chon etelaati k gharare begirim yek array of object e:
        const [products , setProducts]= useState([]);


        useEffect(()=>{
        // vaghti functioni darim k mikhaym dakhele useEffect 
        // estefade konim behtare khode function ro dakhele 
        // useEffect tarif konim jaye inke az birun biarimesh too 
           
        const fetchAPI = async()=>{

             setProducts(await getProducts());
        // chon darim az yek function async estefade mikone
        // baraye estefade bayad oono dakhele function async benevisimesh.
   
            }
            fetchAPI();
        }, [])


        


    return (
        // component hayi k mikhaym behesun context 
        // pass bedim ro be shekle props az app.js miarim 
        // inja va oona ro dakhele provider wrap mikonim 
        <ProductContext.Provider value={products} >
            {children}
        </ProductContext.Provider>
    );
};

export default ProductContextProvider;