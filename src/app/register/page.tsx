import LoginForm from '@/components/auth/LoginForm'
import ZodRegisterForm from '@/components/auth/ZodRegisterForm'
import Register from '@/components/register/Register'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function page() {
    return (
        <>
            <div className="flex flex-col lg:flex-row justify-between py-5 px-4 lg:px-15">

                <div className="w-full lg:w-160 h-72 sm:h-96 lg:h-180 rounded-2xl bg-[url('/authImg.png')] bg-cover bg-center bg-no-repeat mb-8 lg:mb-0">
                    <div className="flex justify-between flex-col items-center h-full py-10 lg:py-20 px-4">
                        <div className="text-center lg:text-left">
                            <h1 className="text-background text-3xl sm:text-4xl lg:text-[40px] font-bold">
                                Welcome to Phonico
                            </h1>
                            <h6 className="text-background text-lg sm:text-[20px] font-medium mt-2">
                                Your Gateway to USA Connectivity!
                            </h6>
                        </div>
                        <div className="mt-6 lg:mt-10 text-center">
                            <h1 className="text-[30px] sm:text-4xl lg:text-[40px] font-bold text-background">
                                Seamless Connectivity
                            </h1>
                            <p className="text-background text-[16px] sm:text-[20px] font-medium mt-2">
                                Enjoy the best coverage in the USA, Mexico, and Canada!
                            </p>
                            <div className="flex justify-center mt-4">
                                <Image
                                    className="mt-6"
                                    height={250}
                                    width={30}
                                    src={"/3dots.svg"}
                                    alt="img"
                                />
                            </div>
                        </div>
                    </div>
                </div>


                <div className="w-full lg:w-[50%] flex items-center flex-col p-4 sm:p-8 lg:p-14">
                    <h1 className="text-[24px] sm:text-[28px] lg:text-[30px] font-bold text-center lg:text-left">
                        Grab Your Phonico eSIM Now!
                    </h1>
                    <p className="text-ring font-medium text-[15px] sm:text-[17px] mt-2 text-center lg:text-left">
                        Stay Connected Across the USA and Beyond with attractive eSIM Plans. Let’s get started!
                    </p>

                    <div className="gap-4 sm:gap-6 flex flex-col sm:flex-row bg-muted-foreground/25 mt-5 p-1 w-full sm:w-auto justify-center">
                        <Link href={"/login"}>
                            <button className="bg-(--btn-pink) h-12 w-full sm:w-50 rounded-[10px] text-background cursor-pointer">
                                Login
                            </button>
                        </Link>
                        <button className="bg-(--btn-pink) h-12 w-full sm:w-50 rounded-[10px] text-background">
                            Register
                        </button>
                    </div>

                    {/* Register Form */}
                    <div className="w-full mt-6">
                        <Register />
                    </div>
                </div>
            </div>
        </>
    )
}

export default page