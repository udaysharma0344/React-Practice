import React from 'react'
import './NewProduct.css'
import ProductForm from '../ProductForm/ProductForm'

const NewProduct = (props) => {
    function saveProduct(product) {
        console.log("i am inside new product");
        console.log(product)

        //calling parent function
        props.pranay(product);
    }
 
    return (
    <div className='new-product'>
        <ProductForm onSaveProduct={saveProduct}/>
    </div>
    )
}

export default NewProduct