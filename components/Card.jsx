"use client"
import Image from "next/image";
import Button from './Button';
import BuyProduct from "./rozarpay/BuyProduct";

const Card = () => {
  const handleClick = () =>{
    console.log("click");
  }
  return (
    <div className="relative max-w-sm rounded overflow-hidden shadow-lg m-5">
        <Image 
            className="w-full" 
            src="/images/blueEaring.png" 
            alt="Sunset in the mountains"
            width={400}
            height={400}
            priority={true}
        />
        <div className='mt-3 text-center'>
          {/* <Button name={"Buy Now"} handleButton={handleClick}/> */}
          <BuyProduct />
        </div>
    </div>
  )
}

export default Card