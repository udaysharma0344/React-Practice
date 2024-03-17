import React, { useState } from 'react'
import Cards from '../Cards/Cards'
import { ProductDate } from '../ProductDate/ProductDate'
import "./ProductItem.css"

const ProductItem = ({ data }) => {
    const [title, setTitle] = useState(data.title)
    function clickHandler() {
        setTitle("Done")
    }

    return (
        <Cards className="product-item">
            <ProductDate date={data.date} />
            <div className='product-item__description'>
                <h2>{title}</h2>
            </div>
            <button onClick={clickHandler}>Add to Cart</button>

        </Cards>
    )
}

export default ProductItem