"use client";

import React, { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { authFormSchema } from "@/lib/utils";
import { Form } from "@/components/ui/form";
import CustomInput from "./CustomInput";
import BrandHeader from "./BrandHeader";
import SubmitButton from "./SubmitButton";
import { useFormState } from "react-dom";
import { dummyAuthAction, State } from "@/lib/actions/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";

type AuthFormProps = {
  type: "register" | "login";
};

const AuthForm = ({ type }: AuthFormProps) => {
  const formSchema = authFormSchema(type);
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "all",
  });

  const [state, formAction] = useFormState<State, FormData>(
    (prevState, data) => dummyAuthAction(prevState, data, type),
    null
  );

  const fillDummyCredentials = () => {
    form.setValue("email", "john.doe@example.com");
    form.setValue("password", "password123");
    form.trigger();
  };

  useEffect(() => {
    if (!state) {
      return;
    }
    if (form.formState.isValid) {
      if (state.status === "success") {
        router.push("/");
      }
    }
    if (state.status === "error") {
      form.trigger();
    }
  }, [state, form, router]);

  return (
    <section className="flex lg:min-h-screen max-w-[460px] flex-col justify-center gap-5 p-10 md:gap-8 max-lg:border max-lg:rounded-md max-lg:border-gray-300">
      <header className="flex flex-col gap-5 md:gap-8">
        <BrandHeader />

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
        <form action={formAction} className="space-y-4">
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
                  name="pan"
                  label="PAN"
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
          <SubmitButton isValid={form.formState.isValid} />
        </form>
      </Form>
      <footer className="flex gap-1 text-sm">
        {type === "login" ? (
          <>
            <span>Don’t have an account?</span>
            <Link href="/register" className="text-[#0179FE]">
              Register
            </Link>
          </>
        ) : (
          <>
            <span>Already have an account?</span>
            <Link href="/login" className="text-[#0179FE]">
              Login
            </Link>
          </>
        )}
      </footer>
      {type === "login" && (
        <div className=" border bg-gray-200 p-2">
          Click{" "}
          <span
            onClick={fillDummyCredentials}
            className="text-[#0179FE] cursor-pointer"
          >
            here
          </span>{" "}
          to fill dummy email and password
        </div>
      )}
    </section>
  );
};

export default AuthForm;
