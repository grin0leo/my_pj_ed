"use client";

import { useForm, SubmitHandler } from "react-hook-form"

export function LoginForm() {

    type FormData = {
        email: string;
        password: string;
    }

    const { register,
        handleSubmit,
        formState: { isSubmitting, errors }
    } = useForm<FormData>()


    // сюда можно добавить любой реквест на бэк 
    const onSubmit = (data: FormData) => {
        alert(`Ваш email ${data.email}, Ваш пароль ${data.password}`)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center w-1/3 gap-4">

            <h1 className="text-3xl text-auth-text">Войдите</h1>

            {/* Email */}
            <div className="w-full flex flex-col gap-3">
                <p className="text-base text-auth-text">Введите адрес электронной почты</p>
                <input
                    type="email"
                    placeholder="Введите почту"
                    {...register("email", { required: "Введите почту" })}
                    className="text-auth-text w-full border border-auth-border rounded-2xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {/* Password */}
            <div className="w-full flex flex-col gap-3">
                <p className="text-base text-auth-text">Введите адрес электронной почты</p>
                <input
                    type="password"
                    placeholder="Введите пароль"
                    {...register("password", { required: "Введите пароль" })}
                    className="text-auth-text w-full border border-auth-border rounded-2xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div >

            {/* Submit */}
            <button
                type="submit"
                className='bg-custom-gradient wfull text-2xl text-white font-semibold rounded-full  w-full px-4 py-2'
                disabled={isSubmitting} >
                {isSubmitting ? "Загрузка..." : "Войти"}
            </button>

        </form>
    )
}