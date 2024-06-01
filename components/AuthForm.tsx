"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Link from "next/link";
import { CiBank } from "react-icons/ci";

import { authFormSchema } from "@/lib/utils";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import CustomInput from "./CustomInput";

const AuthForm = ({ type }: AuthFormProps) => {
  const formSchema = authFormSchema(type);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <section className="flex min-h-screen max-w-[460px] flex-col justify-center gap-5 p-10 md:gap-8">
      <header className="flex flex-col gap-5 md:gap-8">
        <Link href="/" className="cursor-pointer flex items-center gap-1">
          <CiBank className=" w-8 h-8 fill-slate-400" />
          <h1 className=" text-2xl font-ibm-plex-serif font-bold text-black-1">
            Vitta-Setu
          </h1>
        </Link>

        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-xl lg:text-3xl font-semibold text-gray-900">
            {type === "register" ? "Register" : "Login"}
            <p className="text-base font-normal text-gray-600">
              Please enter your details
            </p>
          </h1>
        </div>
      </header>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {type === "register" && (
            <>
              <div className="flex gap-4">
                <CustomInput
                  control={form.control}
                  name="firstName"
                  label="First Name"
                  placeholder="Example: John"
                />
                <CustomInput
                  control={form.control}
                  name="lastName"
                  label="Last Name"
                  placeholder="Example: Doe"
                />
              </div>
              <CustomInput
                control={form.control}
                name="address1"
                label="Address"
                placeholder="Enter your specific address"
              />
              <CustomInput
                control={form.control}
                name="city"
                label="City"
                placeholder="Enter your city"
              />
              <div className="flex gap-4">
                <CustomInput
                  control={form.control}
                  name="state"
                  label="State"
                  placeholder="Example: NY"
                />
                <CustomInput
                  control={form.control}
                  name="postalCode"
                  label="Postal Code"
                  placeholder="Example: 11101"
                />
              </div>
              <div className="flex gap-4">
                <CustomInput
                  control={form.control}
                  name="dateOfBirth"
                  label="Date of Birth"
                  placeholder="YYYY-MM-DD"
                />
                <CustomInput
                  control={form.control}
                  name="ssn"
                  label="SSN"
                  placeholder="Example: 1234"
                />
              </div>
            </>
          )}

          <CustomInput
            control={form.control}
            name="email"
            label="Email"
            placeholder="Enter your email"
          />

          <CustomInput
            control={form.control}
            name="password"
            label="Password"
            placeholder="Enter your password"
          />
          <Button
            type="submit"
            className="w-full border rounded-lg text-white font-semibold text-base bg-gradient-to-r from-[#0179FE] to-[#4893FF] hover:from-[#0056D2] hover:to-[#3678D2] hover:border-[#0056D2] hover:shadow-lg"
          >
            Submit
          </Button>
        </form>
      </Form>
    </section>
  );
};

export default AuthForm;
