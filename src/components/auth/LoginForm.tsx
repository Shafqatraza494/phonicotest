'use client';
import { useForm } from "react-hook-form";

interface LoginFormData {
    email: string;
    password: string;
}

function LoginForm() {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<LoginFormData>();

    function submitForm(data: LoginFormData) {
        console.log(data);
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
                        {...register("email", {
                            required: "Email cannot be empty"
                        })}
                    />

                    {errors.email && (
                        <span className="text-destructive">{errors.email.message}</span>
                    )}
                </div>

                <div className="flex flex-col w-full">
                    <label>Password</label>

                    <input
                        className="bg-background p-3 h-12 mt-2 border border-ring/40 rounded-[10px] focus:outline-0"
                        type="password"
                        placeholder="Enter Password"
                        {...register("password", {
                            required: "Password cannot be empty"
                        })}
                    />

                    {errors.password && (
                        <span className="text-destructive">{errors.password.message}</span>
                    )}
                </div>

            </div>

            <div className="w-full mt-4">
                <h1 className="underline text-chart-2 font-bold">
                    Forgot Password?
                </h1>

                <button className="bg-background border border-(--btn-pink) text-(--btn-pink) hover:text-background hover:bg-(--btn-pink) w-full rounded-[10px] h-12 mt-10">
                    Login
                </button>
            </div>

        </form>
    );
}

export default LoginForm;