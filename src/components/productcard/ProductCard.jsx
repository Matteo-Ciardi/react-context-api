import { Link } from 'react-router-dom'

import './ProductCard.css'

const ProductCard = (props) => {

    const { product } = props;

    return (
        <>
            <div className="product-card">
                <Link to={`/prodotti/${product.id}`}><div className='image-box'>
                    <img src={product.image} alt={product.title} className="product-image" />
                </div></Link>
                <div className="product-info">
                    <p className='product-category'>
                        <Link to={"/"}>{product.category.toUpperCase()}</Link>
                    </p>
                    <p className='product-title'>
                        <Link to={`/prodotti/${product.id}`}>{product.title}</Link>
                    </p>
                    <p className='product-price'>
                        € {product.price.toFixed(2)}
                    </p>
                </div>
            </div>
        </>
    )
}

export default ProductCard