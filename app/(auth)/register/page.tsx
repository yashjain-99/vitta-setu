import AuthForm from "@/components/AuthForm";
import React from "react";

const Register = () => {
  return (
    <section className="lg:size-full max-sm:px-6 max-lg:flex max-lg:items-center">
      <AuthForm type="register" />
    </section>
  );
};

export default Register;
