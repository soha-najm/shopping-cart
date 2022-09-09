import React , {useContext} from 'react';
// context:
import { ProductContext } from '../Context/ProductContextProvider';
import Product from '../shared/Product';
import styles from "./Store.module.css"

const Store = () => {

    const products= useContext(ProductContext)
    return (
        <div className={styles.container} >
            {products.map(product=> <Product 
            key={product.id} 
            productData={product} />)}
        </div>
    );
};

export default Store;