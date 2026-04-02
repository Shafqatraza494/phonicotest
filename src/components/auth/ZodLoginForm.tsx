'use client';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useLogin } from "@/lib/api/api";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const formSchema = z.object({
    email: z.string().min(1, "Email is required").email("Email is invalid"),
    password: z.string().min(5, "Minimum length should be 5").max(8, "Maximum length should be 8"),
});

type LoginFormData = z.infer<typeof formSchema>;

function ZodLoginForm() {
    const router = useRouter();
    const { mutate, isPending, isError, data, error } = useLogin();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormData>({
        resolver: zodResolver(formSchema),
    });

    function submitForm(formData: LoginFormData) {
        mutate(
            { email: formData.email, password: formData.password },
            {
                onSuccess: () => {
                    toast.success('Login Successfully');
                    router.push('/')
                },
                onError: (err) => {
                    console.error("Login error:", err);
                },
            }
        );
    }

    return (
        <form className="w-full" onSubmit={handleSubmit(submitForm)}>
            <div className="flex flex-col w-full mt-15 gap-7">
                <div className="flex flex-col w-full">
                    <label>Email</label>
                    <input
                        className="bg-background p-3 h-12 mt-2 border border-ring/40 rounded-[10px] focus:outline-0"
                        type="email"
                        placeholder="Enter email"
                        {...register("email")}
                    />
                    {errors.email && <span className="text-destructive">{errors.email.message}</span>}
                </div>

                <div className="flex flex-col w-full">
                    <label>Password</label>
                    <input
                        className="bg-background p-3 h-12 mt-2 border border-ring/40 rounded-[10px] focus:outline-0"
                        type="password"
                        placeholder="Enter Password"
                        {...register("password")}
                    />
                    {errors.password && <span className="text-destructive">{errors.password.message}</span>}
                </div>
            </div>

            <div className="w-full mt-4">
                <h1 className="underline text-chart-2 font-bold">Forgot Password?</h1>

              
                <button
                    type="submit"
                    className="bg-background border border-(--btn-pink) text-(--btn-pink) hover:text-background hover:bg-(--btn-pink) w-full rounded-[10px] h-12 mt-10"
                    disabled={isPending}
                >
                    {isPending ? "Logging in..." : "Login"}
                </button>

                {isError && <p className="text-destructive mt-2">{(error as Error).message}</p>}

            </div>
        </form>
    );
}

export default ZodLoginForm;