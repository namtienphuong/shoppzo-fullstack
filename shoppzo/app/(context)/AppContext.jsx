import { dummyProducts } from '@/public/data'
import { useRouter } from 'next/navigation'
import React, { createContext, useContext, useEffect, useState } from 'react'

const AppContext = createContext()

const AppContextProvider = ({ children }) => {
    const currency = "$"
    const [products, setProducts] = useState([])
    const [subTotal, setSubTotal] = useState(0)
    const [totalAmount, setTotalAmount] = useState(0)
    const router = useRouter()

    useEffect(() => {
        try {
            setProducts(dummyProducts)
        } catch (error) {
            console.log(error)
        }
    }, [])

    const value = {
        currency,
        products,
        subTotal,
        setSubTotal,
        totalAmount,
        setTotalAmount,
        router
    }
    return (
        <AppContext.Provider value={value}>{children}</AppContext.Provider>
    )
}

export default AppContextProvider

export const useAppContext = () => useContext(AppContext)

