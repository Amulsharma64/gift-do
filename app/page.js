"use client";
import Image from "next/image";
import BuyProduct from "../components/rozarpay/BuyProduct";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <h1 className="text-4xl font-bold mb-5">I am a home page</h1>
      <h1 className="text-2xl">Razor Pay Integration with NextJs 13</h1>
      <BuyProduct/>
    </main>
  );
}
