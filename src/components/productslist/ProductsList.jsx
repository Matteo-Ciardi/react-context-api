import { useState, useEffect, useContext } from 'react';
import { BudgetContext } from '../../context/BudgetContext';

import ProductCard from '../productcard/ProductCard';

import './ProductList.css'

export default function ProductsList() {
    const [products, setProducts] = useState([]);
    const { budgetMode } = useContext(BudgetContext);

    function fetchProducts() {
        axios.get("https://fakestoreapi.com/products")
            .then((result) => setProducts(result.data))
            .catch(error => console.log(error)
            )
    }

    useEffect(() => {
        fetchProducts()
    }
        , [])

    const filteredProducts = budgetMode
        ? products.filter(product => product.price <= 30)
        : products;

    return (
        <>
            <div className='products'>
                {filteredProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>
        </>
    )
}