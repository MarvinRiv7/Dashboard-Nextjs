


import { CartCounter } from "@/shopping-cart";
import { Metadata } from "next";



export const metadata: Metadata = {
 title: 'Counter Page',
 description: 'Contador para carrito de compras',
};

export default function CounterPage() {



  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito de compras </span>
      <CartCounter value={7}/>
    </div>
  );
}