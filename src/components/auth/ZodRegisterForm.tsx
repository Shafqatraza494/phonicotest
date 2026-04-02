'use client';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { registerServices } from "@/lib/services/auth/auth.services";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import { signIn } from "next-auth/react";

const formSchema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters"),

    email: z.string()
        .min(1, "Email is required")
        .email("Email is invalid"),

    password: z.string()
        .min(5, "Minimum length should be 5")
        .max(12, "Maximum length should be 12"),

    confirmPassword: z.string(),

    otp: z.string().min(4, "OTP must be 4 digits")
})
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"]
    });

type RegisterFormData = z.infer<typeof formSchema>;

function ZodRegisterForm() {
    const route = useRouter();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting }
    } = useForm<RegisterFormData>({
        resolver: zodResolver(formSchema)
    });

    async function submitForm(data: RegisterFormData) {
        try {
            const { confirmPassword, ...userData } = data;

            const resp = await registerServices(
                userData.email,
                userData.password,
                userData.otp,
                userData.name
            );

            if (resp.status === true) {
                toast.success(resp.message);

                const loginResp = await signIn("credentials", {
                    email: userData.email,
                    password: userData.password,
                    redirect: false, 
                });

                if (loginResp?.ok) {
                    reset();
                    route.push("/"); 
                } else {
                    toast.error("Login failed after register");
                }

            } else {
                toast.error(resp.message);
            }

        } catch (error: any) {
            console.log("ERROR:", error.message);
            toast.error("Something went wrong");
        }
    }

    return (
        <form className="w-full" onSubmit={handleSubmit(submitForm)}>

            <div className="flex flex-col w-full mt-4 gap-7">

                <div className="flex flex-col w-full">
                    <label>Name</label>
                    <input
                        className="bg-background p-3 h-12 mt-2 border border-ring/40 rounded-[10px]"
                        type="text"
                        placeholder="Enter Name"
                        {...register("name")}
                    />
                    {errors.name && (
                        <span className="text-destructive">{errors.name.message}</span>
                    )}
                </div>

                <div className="flex flex-col w-full">
                    <label>Email</label>
                    <input
                        className="bg-background p-3 h-12 mt-2 border border-ring/40 rounded-[10px]"
                        type="email"
                        placeholder="Enter Email"
                        {...register("email")}
                    />
                    {errors.email && (
                        <span className="text-destructive">{errors.email.message}</span>
                    )}
                </div>

                <div className="flex flex-col w-full">
                    <label>Password</label>
                    <input
                        className="bg-background p-3 h-12 mt-2 border border-ring/40 rounded-[10px]"
                        type="password"
                        placeholder="Enter Password"
                        {...register("password")}
                    />
                    {errors.password && (
                        <span className="text-destructive">
                            {errors.password.message}
                        </span>
                    )}
                </div>

                <div className="flex flex-col w-full">
                    <label>Confirm Password</label>
                    <input
                        className="bg-background p-3 h-12 mt-2 border border-ring/40 rounded-[10px]"
                        type="password"
                        placeholder="Confirm Password"
                        {...register("confirmPassword")}
                    />
                    {errors.confirmPassword && (
                        <span className="text-destructive">
                            {errors.confirmPassword.message}
                        </span>
                    )}
                </div>

                <div className="flex flex-col w-full">
                    <label>OTP</label>
                    <input
                        className="bg-background p-3 h-12 mt-2 border border-ring/40 rounded-[10px]"
                        type="text"
                        placeholder="Enter OTP"
                        {...register("otp")}
                    />
                    {errors.otp && (
                        <span className="text-destructive">{errors.otp.message}</span>
                    )}
                </div>

            </div>

            <div className="w-full mt-6">
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-background border border-(--btn-pink) text-(--btn-pink) hover:text-background hover:bg-(--btn-pink) w-full rounded-[10px] h-12 disabled:opacity-50"
                >
                    {isSubmitting ? "Registering..." : "Register"}
                </button>
            </div>

        </form>
    );
}

export default ZodRegisterForm;