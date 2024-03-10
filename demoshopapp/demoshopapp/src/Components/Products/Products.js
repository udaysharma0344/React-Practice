import React from 'react'
import "./Producus.css"
import Card from '../Card/Card'
import ProductItem from '../ProductItem/ProductItem'

export const Products = ({ item }) => {
    return (
        
            <Card className="products">
                <ProductItem 
                    Products={item[0]} 
                />

                <ProductItem 
                    Products={item[1]} 
                />

                <ProductItem 
                    Products={item[2]} 
                />

                <ProductItem 
                    Products={item[3]} 
                />
            </Card>

    )
}
