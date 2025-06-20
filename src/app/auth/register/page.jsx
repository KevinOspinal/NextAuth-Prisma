"use client";

import React from "react";
import { useForm } from "react-hook-form";

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  console.log(errors);

  return (
    <div className="h-[calc(100vh-7rem)] flex justify-center items-center bg-black">
      <form className="w-full max-w-md" onSubmit={onSubmit}>
        <h1 className="text-slate-200 text-4xl font-bold mb-4 text-center">
          Register
        </h1>
        <label htmlFor="username" className="text-slate-500 mb-2 block text-sm">
          Username:
        </label>

        <input
          className="w-full p-3 rounded-lg block mb-2 bg-slate-900 text-slate-300"
          type="text"
          placeholder="Username"
          {...register("username", {
            required: {
              value: true,
              message: "Username is required",
            },
          })}
        />
        {errors.username && (
          <span className="text-red-500 text-sm">
            {errors.username.message}
          </span>
        )}
        <label htmlFor="email" className="text-slate-500 mb-2 block text-sm">
          Email:
        </label>

        <input
          className="w-full p-3 rounded-lg block mb-2 bg-slate-900 text-slate-300"
          type="email"
          placeholder="Email"
          {...register("email", { required: {
            value: true,
            message: "Email is required",
          } })}
        />
        {errors.email && (
          <span className="text-red-500 text-sm">
            {errors.username.message}
          </span>
        )}
        <label htmlFor="password" className="text-slate-500 mb-2 block text-sm">
          Password:
        </label>

        <input
          className="w-full p-3 rounded-lg block mb-2 bg-slate-900 text-slate-300"
          type="password"
          placeholder="Password"
          {...register("password", { required: {
            value: true,
            message: "Password is required",
          } })}
        />
        {errors.password && (
          <span className="text-red-500 text-sm">
            {errors.username.message}
          </span>
        )}
        <label
          htmlFor="confirmpassword"
          className="text-slate-500 mb-2 block text-sm"
        >
          Confirm Password:
        </label>
        <input
          className="w-full p-3 rounded-lg block mb-4 bg-slate-900 text-slate-300"
          type="password"
          placeholder="Confirm Password"
          {...register("confirmPassword", { required: {
            value: true,
            message: "Confirm Password is required",
          } })}
        />
        {errors.confirmPassword && (
          <span className="text-red-500 text-sm">
            {errors.username.message}
          </span>
        )}
        <button
          className="w-full bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg transition-colors"
          type="submit"
        >
          Register
        </button>
      </form>
    </div>
  );
}
