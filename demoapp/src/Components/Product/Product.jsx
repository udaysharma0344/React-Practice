import React from 'react'
import Cards from '../Cards/Cards'
import ProductItem from '../ProductItem/ProductItem'
import './Product.css'

const Product = ({ item }) => {
    console.log(item[0])

    return (
        <Cards className="products">

            <ProductItem data={item[0]} />

            <ProductItem data={item[1]} />

            <ProductItem data={item[2]} />

            <ProductItem data={item[3]} />

        </Cards>
    )
}

export default Product