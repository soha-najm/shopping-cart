import './App.css';
import {  Navigate,Route , Routes } from 'react-router-dom';
//context:
import CartContextProvider from './Context/CartContextProvider';
import ProductContextProvider from './Context/ProductContextProvider';

// components :
import Store from './component/Store';
import ProductDetails from './component/ProductDetails';
import Navbar from './shared/Navbar';
import ShopCart from './component/ShopCart';

function App() {
  return (
    <ProductContextProvider>
    <CartContextProvider>
      <Navbar/>
        <Routes>
        <Route path="/cart" element={<ShopCart/>} />  
        <Route path= "/products/:id" element={<ProductDetails/>}/>
        <Route path="/products" element={<Store/>} />
        <Route path="/*"  element={<Navigate to="/products" />}  />
      </Routes>
      </CartContextProvider>
      
    </ProductContextProvider>
  );
}

export default App;
