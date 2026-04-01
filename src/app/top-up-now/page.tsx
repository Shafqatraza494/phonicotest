'use client';

import Image from 'next/image';
import React, { useRef } from 'react';
import ReCAPTCHA from "react-google-recaptcha";


function Page() {

    const captchaRef = useRef<ReCAPTCHA | null>(null);

    const handleSubmit = async () => {
        const token = captchaRef.current?.getValue();

        if (!token) {
            alert("Please verify captcha");
            return;
        }


        const res = await fetch('/api/verify-captcha', {
            method: "POST",
            body: JSON.stringify({ token }),
        });

        const data = await res.json();

        if (data.success) {
            alert("Captcha Verified ");
        } else {
            alert("Captcha Failed ");
        }
    };

    return (
        <div className="relative w-full min-h-screen px-6 md:px-12 py-12 bg-white">

            <Image 
                src="/wavyBlob.svg"
                alt="bg"
                fill
                className="object-cover"
                priority
            />


            <div className="relative z-10 h-full flex flex-col">

                <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                    <span className="text-(--btn-pink)">EasyPay</span> eSIM Services: Manage Your Line with Ease
                </h1>

                <div className="mt-8 md:mt-10 flex flex-col-reverse md:flex-row md:justify-between md:items-start gap-10">

                    <div className="flex flex-col gap-4 w-full ">

                        <label>Line Number</label>
                        <input
                            className="w-full h-12 bg-white rounded-[5px] border border-ring px-3 outline-0"
                            type="text"
                            placeholder="Enter your line number"
                        />

                        <label>Confirm Line Number</label>
                        <input
                            className="w-full h-12 bg-white  rounded-[5px] px-3 border border-ring outline-0"
                            type="text"
                            placeholder="Confirm your line number"
                        />

                        <div className="mt-2">
                            <ReCAPTCHA
                                ref={captchaRef}
                                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                            />
                        </div>

                        <button
                            onClick={handleSubmit}
                            className="mt-4 w-full h-12 rounded-xl bg-(--btn-pink) text-white"
                        >
                            Renew Number
                        </button>
                    </div>

                    <div className="w-full flex justify-center md:justify-start">
                        <Image
                            src="/easypay.webp"
                            alt="payment"
                            width={522}
                            height={400}
                            className="rounded-2xl max-w-full h-auto"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;