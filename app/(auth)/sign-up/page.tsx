"use client";

import AuthForm from "@/components/forms/AuthForm";
import { signupWithCredentials } from "@/lib/actions/auth.action";
import { SignUpSchema } from "@/lib/validations";

const SignUp = () => {
  return (
    <AuthForm
      formType="SIGN_UP"
      schema={SignUpSchema}
      defaultValues={{ email: "", password: "", name: "", username: "" }}
      onSubmit={signupWithCredentials}
    ></AuthForm>
  );
};

export default SignUp;
