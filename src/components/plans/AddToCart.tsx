"use client";

import React, { useState } from "react";
import {
  CircleCheck,
  CircleX,
  FileText,
  MessageSquareOff,
  Trash,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import Image from "next/image";
import Button from "@/components-button/Button";
import CompatibilityModal from "./CompatibilityModal";

import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "@/store/slice/cartSlice";
import { RootState, AppDispatch } from "@/store/store";
import { toast } from "sonner";

export interface Plan {
  id: string;
  name: string;
  price: number;
  expiry_type: string;
}

type AddToCartProps = {
  planFromSlug: Plan[];
};

function AddToCart({ planFromSlug }: AddToCartProps) {
  const [boolean, setBoolean] = useState(false);

  const dispatch = useDispatch<AppDispatch>();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const plan = planFromSlug[0];

  function handleAddToCart() {
    if (!plan) return;

    if (cartItems.length > 0) {
      toast.error("You can only add one item to the cart");
      return;
    }

    dispatch(
      addToCart({
        id: plan.id,
        name: plan.name,
        price: plan.price,
        quantity: 1,
      }),
    );
  }

  function handleRemove(id: string) {
    dispatch(removeFromCart(id));
  }

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <section className="w-full py-10 px-4">
      <div className="max-w-6xl mx-auto flex md:flex-row flex-col rounded-xl overflow-hidden shadow-lg">
        <div className="bg-[#e6eef3] flex-4 p-10 flex justify-center flex-col items-center text-center ">
          <h2 className="text-[30px] font-semibold mb-6">
            {plan?.name.split(" ")[0]}
          </h2>

          <div className="flex items-center">
            <div className="bg-chart-2 w-70 h-40 text-background rounded-lg py-6 px-2 mb-8">
              <p className="text-[30px] text-foreground">${plan?.price}/mo</p>
              <p className="text-sm mt-1 text-foreground text-[20px]">
                {plan?.name}
              </p>
            </div>
          </div>

          <ul className="space-y-2 flex flex-col text-sm">
            <li className="flex items-center gap-2">
              <CircleCheck fill="#5cbfea" color="white" /> High-speed internet
            </li>
            <li className="flex items-center gap-2">
              <CircleCheck fill="#5cbfea" color="white" /> Unlimited talk & text
            </li>
            <li className="flex items-center gap-2">
              <CircleCheck fill="#5cbfea" color="white" /> High-quality video
              streaming
            </li>
            <li className="flex items-center gap-2">
              <CircleCheck fill="#5cbfea" color="white" /> No hidden fees
            </li>
            <li className="flex items-center gap-2">
              <CircleCheck fill="#5cbfea" color="white" /> No contract (cancel
              anytime)
            </li>
          </ul>
        </div>

        <div className="bg-[#efe7e2] p-5 flex-6">
          <div className="flex justify-center mb-6">
            <button
              onClick={() => setBoolean(true)}
              className="border border-(--btn-pink) text-(--btn-pink) px-10 py-3 rounded-md text-md font-bold hover:bg-(--btn-pink) hover:text-background cursor-pointer transition"
            >
              Check if your phone is eSIM compatible
            </button>

            {boolean && (
              <div className="bg-black/50 w-full h-screen p-10 flex justify-center items-center fixed top-0 left-0 z-100">
                <div className="relative">
                  <button
                    onClick={() => setBoolean(false)}
                    className="absolute top-4 right-8 z-999"
                  >
                    <CircleX />
                  </button>
                  <CompatibilityModal />
                </div>
              </div>
            )}
          </div>

          <h3 className="text-xl font-semibold mb-4">Whats included</h3>

          <div className="bg-background rounded-lg border border-ring/50 p-4 mb-4 flex justify-between">
            <span>Unlimited SMS & Minutes</span>
            <span className="text-(--btn-pink) font-medium">Included</span>
          </div>

          <div className="bg-background rounded-lg border border-ring/50 p-4 space-y-3">
            <div className="flex justify-between text-sm">
              <span>Monthly</span>
              <span>{plan?.price}</span>
            </div>

            <hr className="text-ring/80" />

            <div className="flex justify-between text-sm font-medium">
              <span>Subtotal</span>
              <span>${plan?.price} for 1 month</span>
            </div>

            <hr className="text-ring/80" />

            <div className="flex w-full justify-center">
              <Sheet>
                <SheetTrigger asChild>
                  <button
                    onClick={handleAddToCart}
                    className="cursor-pointer w-[80%] mt-4 bg-(--btn-pink) text-background py-3 rounded-lg font-medium transition"
                  >
                    Add to Cart
                  </button>
                </SheetTrigger>

            
                <SheetContent className="rounded-3xl h-120" side="right">
                  <SheetHeader className="flex items-center justify-center bg-(--btn-pink) rounded-tl-2xl rounded-tr-2xl">
                    <SheetTitle>Shopping Cart</SheetTitle>
                  </SheetHeader>

                  {cartItems.length === 0 ? (
                    <div className="items-center justify-center flex flex-col gap-3 mt-10">
                      <Image
                        height={183}
                        width={172}
                        src={"/emptyCart.svg"}
                        alt="logo"
                      />
                      <h5>Your cart is empty</h5>
                      <p className="text-ring text-[12px]">
                        Add something to make me happy :)
                      </p>
                      <Button>Go to our Shop</Button>
                    </div>
                  ) : (
                    <div className="flex flex-col justify-between h-full">

                      <div className="flex flex-col gap-4 p-3">
                        {cartItems.map((item) => (
                          <div key={item.id} className="flex">
                            <Image
                              height={81}
                              width={91}
                              src={"/siteLogo.png"}
                              alt="logo"
                              className="flex-1"
                            />
                            <div className="flex p-3 justify-between bg-ring/10 flex-3 w-full">
                              <div>
                                <h1 className="font-bold text-[20px]">
                                  {item.name.split(" ")[0]}
                                </h1>
                                <p className="text-[12px] text-ring">
                                  eSIM/Unlimited / {plan?.expiry_type}
                                </p>
                              </div>
                              <div>
                                <h1 className="font-bold text-[20px]">
                                  ${item.price}
                                </h1>
                                <Trash
                                  onClick={() => handleRemove(item.id)}
                                  color="red"
                                  className="cursor-pointer"
                                />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>


                      <div>
                        <div className="bg-ring/20 h-30 rounded-[10px] p-5 mx-3 flex flex-col">
                          <div className="flex justify-between mb-4">
                            <h1>Subtotal</h1>
                            <h1>${subtotal}.00</h1>
                          </div>

                          <div className="flex items-center justify-center">
                            <button className="bg-(--btn-pink) rounded-[10px] text-[18px] h-13 w-70 text-background">
                              Checkout
                            </button>
                          </div>
                        </div>

                        <div className="flex gap-7 mx-5 text-foreground py-3 justify-center">
                          <span className="flex text-[12px] gap-2">
                            <FileText size={15} /> No Contract Required
                          </span>
                          <span className="flex text-[12px] gap-2">
                            <MessageSquareOff size={15} /> Cancel Anytime
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AddToCart;
