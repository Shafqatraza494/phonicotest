"use client"

import React, { useState } from "react";
import { toast } from "sonner";
import ZodRegisterForm from "../auth/ZodRegisterForm";
import { otpService } from "@/lib/services/auth/auth.services";
import { otp } from "@/lib/types/otp.types";

function Register() {
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState(false)

    const handleSubmit = async () => {
        if (!email) {
            toast.info("Please enter email");
            return;
        }
        const send: otp = await otpService(email);
        console.log(send);

        if (send.status) {
            toast.success(send.message);
            setOtp(true);
        } else {
            toast.error(send.errors?.[0] || send.message);
            setOtp(false);
        }
    };

    return (
        <>
            {otp ? (
                <ZodRegisterForm />
            ) : (
                <div className="flex flex-col w-full  max-w-md mx-auto mt-10 sm:mt-15 gap-3 px-4 sm:px-0">
                    <label className="text-base sm:text-lg">Enter Email</label>

                    <input
                        className="bg-background p-3 h-12 mt-2 border border-ring/40 rounded-[10px] focus:outline-0 w-full"
                        type="email"
                        placeholder="name@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <button
                        onClick={handleSubmit}
                        className="bg-background border border-(--btn-pink) text-(--btn-pink) hover:text-background hover:bg-(--btn-pink) w-full rounded-[10px] h-12 mt-6 sm:mt-10 text-sm sm:text-base"
                    >
                        Submit
                    </button>
                </div>
            )}
        </>
    );
}

export default Register;