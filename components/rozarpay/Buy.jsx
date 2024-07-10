"use client"
import React,{useState} from "react";

const Buy = ({ makePayment }) => {

  const [isLoading, setIsLoading] = useState(false);



  return (
      <button
          onClick={() => {
                makePayment({ productId: "example_ebook" });
              }}
            disabled={isLoading}
            className={`bg-transparent hover:bg-gray-800 text-white-700 font-semibold
     hover:text-white py-2 px-4 border border-white hover:border-transparent rounded ${
              isLoading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isLoading ? 'Processing...' : 'Buy Now'}
          </button>
  );
};

export default Buy;
