import { Button } from "@/components/ui/button"
import React from "react";
import Hero from "./(components)/Hero";
import { TrustedBrands } from "./(components)/TrustedBrands";
import NewArrivals from "./(components)/NewArrivals";

function page() {
  return (
    <>
      <Hero />
      <TrustedBrands />
      <NewArrivals />
    </>
  )
}

export default page