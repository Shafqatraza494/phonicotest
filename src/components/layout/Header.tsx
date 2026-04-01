"use client";

import React, { useState } from "react";
import Button from "@/components-button/Button";
import {
  FileText,
  LogIn,
  Menu,
  MessageSquareOff,
  RefreshCw,
  ShoppingCart,
  Trash,
  UserPlus,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { removeFromCart } from "@/store/slice/cartSlice";

import { useSession, signOut } from "next-auth/react";
import { toast } from "sonner";

function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const dispatch = useDispatch();

  const { data: session, status } = useSession();
  const isLoggedIn = status === "authenticated";

  const handleLogout = () => {
    signOut({ callbackUrl: "/login" });
    toast.success('Logout Success')

  };

 
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const item = cartItems[0];

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  function removeItem() {
    if (item) {
      dispatch(removeFromCart(item.id));
    }
  }

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Plans", href: "/plans" },
    { name: "Blogs", href: "/blogs" },
  ];

  return (
    <>
      <header className="sticky flex justify-center top-0 z-50 w-full bg-white shadow-sm">
        <div className="container py-3 px-3 md:px-15 flex items-center justify-between">
          {/* LOGO */}
          <div className="flex items-center">
            <Link href={"/"}>
              <img
                src="https://phonico.com/_next/image/?url=%2Fimages%2FsiteLogo.png&w=96&q=75"
                alt="logo"
                className="w-20 h-auto"
              />
            </Link>
          </div>

          {/* NAV */}
          <ul className="hidden md:flex items-center gap-10 font-bold">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`pb-1 border-b-4 rounded-[3px] transition-all ${isActive
                      ? "border-(--btn-pink) text-(--btn-pink)"
                      : "border-transparent hover:border-(--btn-pink)"
                      }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* CART */}
            <Sheet>
              <SheetTrigger asChild>
                <button className="relative border border-ring/50 h-12 w-14 flex justify-center p-2 rounded-sm">
                  <ShoppingCart />
                  {cartItems.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                      {cartItems.length}
                    </span>
                  )}
                </button>
              </SheetTrigger>

              <SheetContent className="rounded-3xl h-120" side="right">
                <SheetHeader className="flex items-center justify-center bg-(--btn-pink) rounded-tl-2xl rounded-tr-2xl">
                  <SheetTitle>Shopping Cart</SheetTitle>
                </SheetHeader>

                {!item ? (
                  <div className="items-center justify-center flex flex-col gap-3 mt-10">
                    <Image
                      height={183}
                      width={172}
                      src={"/emptyCart.svg"}
                      alt="empty"
                    />
                    <h5>Your cart is empty</h5>
                    <p className="text-ring text-[12px]">
                      Add something to make me happy :)
                    </p>
                    <Button>Go to our Shop</Button>
                  </div>
                ) : (
                  <div className="flex flex-col justify-between h-full">
                    <div className="flex">
                      <Image
                        height={81}
                        width={91}
                        src={"/siteLogo.png"}
                        alt="logo"
                      />
                      <div className="flex p-3 justify-between bg-ring/10 flex-1">
                        <div>
                          <h1 className="font-bold text-[20px]">{item.name}</h1>
                          <p className="text-[12px] text-ring">
                            eSIM/Unlimited
                          </p>
                        </div>
                        <div>
                          <h1 className="font-bold text-[20px]">
                            ${item.price}
                          </h1>
                          <Trash onClick={removeItem} color="red" />
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="bg-ring/20 h-30 rounded-[10px] p-5 mx-3 flex flex-col">
                        <div className="flex justify-between mb-4">
                          <h1>Subtotal</h1>
                          <h1>${subtotal}.00</h1>
                        </div>

                        <button className="bg-(--btn-pink) rounded-[10px] text-[18px] h-13 w-full text-white">
                          Checkout
                        </button>
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

            {/* TOPUP */}
            <Link href={"/top-up-now"}>
              <Button>
                <RefreshCw className="w-4 h-4 hidden sm:inline" />
                Top-Up Now
              </Button></Link>

          
            {status === "loading" ? null : !isLoggedIn ? (
              <>
                <Link href={"/login"}>
                  <div className="hidden md:block ">
                    <Button>
                      <LogIn />
                      Login
                    </Button>
                  </div>
                </Link>

                <Link href={"/register"}>
                  <button className="hidden md:flex items-center gap-2 border border-ring/50 px-4 py-3 rounded-sm font-bold cursor-pointer">
                    <UserPlus className="w-4 h-4" />
                    Sign Up
                  </button>

                </Link>
              </>
            ) : (
              <>
                <button className="hidden md:flex items-center gap-2 border border-ring/50 px-4 py-3 rounded-sm font-bold">
                  💰 Wallet
                </button>

                <button
                  onClick={handleLogout}
                  className="hidden md:flex items-center gap-2 border border-red-400 px-4 py-3 rounded-sm font-bold text-red-500"
                >
                  Logout
                </button>
              </>
            )}

            {/* MOBILE MENU */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden border-2 p-2 rounded-md"
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;