"use client"
import React, { useEffect, useState } from 'react'
import Title from './Title'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { useAppContext } from '../(context)/AppContext'

function NewArrivals() {
    const { products } = useAppContext()
    const [NewArrivals, setNewArrivals] = useState([])

    useEffect(() => {
        const data = products
    }, [products])

    return (
        <section className='max-padd-container pt-16'>
            <Title
                title1={"New"}
                title2={"Arrivals"}
                titleStyles={"pb-14"}
                paraStyles={"!bl ock"}
            />
            {/* CONTAINER */}
            <Carousel className={"w-full"}>
                <CarouselContent className={""}>
                    <CarouselItem>...</CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </section>
    )
}

export default NewArrivals