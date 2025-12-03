import React, { useState } from 'react'
import { useAppContext } from '../(context)/AppContext'
import Image from 'next/image'

function Item() {
    const { currency } = useAppContext()
    const [hovered, setHovered] = useState(false)
    return (
        <div>
            {/* IMAGE */}
            <div
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <Image src={product.images.length > 1 && hovered ? product.images[1] : product.images[0]} />
            </div>
        </div>

    )
}

export default Item
