import React , {useContext}from 'react';
import { Link ,  useParams} from 'react-router-dom';

import { ProductContext } from '../Context/ProductContextProvider';
import styles from "./ProductDetails.module.css"

const ProductDetails = (props) => {

    const params = useParams()

    const id = params.id 
    const data = useContext(ProductContext)
    const product = data[id-1];
    const {image , title , description , price , category}=product
    return (
        <div className={styles.container} >
            <img className={styles.image} src={image} alt="product" style={{width:"400px"}} />
            <div className={styles.textContainer} >
                <h3>{title}</h3>
                <p className={styles.description} >{description}</p>
                <p className={styles.category} >
                    <span>
                        {category}
                    </span>
                </p>
                <div className={styles.buttonContainer}>
                    <span className={styles.price} >{price}$</span>
                    <br/>
                    <Link to="/products" >Back to shop</Link>
                </div>
               

            </div>
        </div>
    );
};

export default ProductDetails;