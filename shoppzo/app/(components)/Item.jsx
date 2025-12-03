import React, { useState } from 'react'
import { useAppContext } from '../(context)/AppContext'
import Image from 'next/image'

function Item({ product }) {
    const { currency } = useAppContext()
    const [hovered, setHovered] = useState(false)
    return (
        <div className='overflow-hidden relative'>
            {/* IMAGE */}
            <div
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className='flexCenter p-2 bg-[#f5f5f5] overflow-hidden relative'
            >
                <Image src={product.images.length > 1 && hovered ? product.images[1] : product.images[0]} height={555} width={555} className='transition-all duration-300' unoptimized={true} />
            </div>
            {/* INFO */}
            <div className="p-2">
                <h5 className='line-clamp-1 pt-1'>{product.name}</h5>
                <div className='flexBetween pt-1'>
                    <p className='font-bold'>{product.categories[0]}</p>
                    <h5 className='pr-2'>
                        <span className={`${product.offerPrice && "line-through"} text-gray-500 pr-1`}>
                            {currency}{product.price}
                        </span>
                        {product.offerPrice && (
                            <>{currency}{product.offerPrice}</>
                        )}
                    </h5>
                </div>
                <p className='line-clamp-2 py-1 pr-3'>{product.description}</p>
            </div>
        </div>

    )
}

export default Item
