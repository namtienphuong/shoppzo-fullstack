"use client";
import React, { useEffect, useState } from "react";
import Title from "./Title";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { useAppContext } from "../(context)/AppContext";
import Item from "./Item";

function NewArrivals() {
    const { products } = useAppContext()
    const [newArrivals, setNewArrivals] = useState([])

    useEffect(() => {
        const data = products.slice(0, 7)
        setNewArrivals(data)
    }, [products])

    return (
        <section className="max-padd-container pt-16">
            <Title
                title1={"New"}
                title2={"Arrivals"}
                titleStyles={"pb-14"}
                paraStyles={"!block"}
            />
            {/* Container */}
            <Carousel className={"w-full"}>
                <CarouselContent className={""}>
                    {newArrivals.map((product) => (
                        <CarouselItem key={product.id}>
                            <Item product={product} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </section>
    );
}

export default NewArrivals;
