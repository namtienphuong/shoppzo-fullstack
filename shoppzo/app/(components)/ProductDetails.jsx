import React, { useState } from 'react'
import { useAppContext } from '../(context)/AppContext'
import Image from 'next/image'

function ProductDetails({ product }) {
    const { currency } = useAppContext
    const [price, setPrice] = useState(product.offerPrice ? product.offerPrice : product.price)


    return (
        <div>
            <Image src={product?.images[0]} alt='itemImage' height={277} width={277} unoptimized={true} />
            {/* {INFO} */}
            <div>
                <h4>{product.name}</h4>
                <p>{product.categories[0]}</p>
                <div>
                    <div className='flex items-center gap-x-2'>
                        <h5>Color:</h5>
                        <p className="font-bold">{product.color}</p>
                    </div>
                    <div className='flex items-center gap-x-2'>
                        <h5>Price:</h5>
                        <p className="font-bold">{currency}{product.price}</p>
                    </div>
                    {product.offerPrice &&
                        <div className='flex items-center gap-x-2'>
                            <h5>Offer Price:</h5>
                            <p className="font-bold">{currency}{product.price}</p>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductDetails