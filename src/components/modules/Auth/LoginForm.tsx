/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import MyFormInput from "@/components/form/MyFormInput";
import MyFormWrapper from "@/components/form/MyFormWrapper";
import Image from "next/image";
import { FieldValues } from "react-hook-form";
import car from "../../../assets/images/run-courier.png";
import MyBtn from "@/components/common/MyBtn";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { varifyToken } from "@/utils/verifyToken";
import { setCookie } from "@/utils/cookies";
import { useAppDispatch } from "@/redux/hooks";
import { setUser, TUser } from "@/redux/features/auth/authSlice";
import Link from "next/link";

const LoginForm = () => {
  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("login...");

    try {
      const res = await login(data).unwrap();
      const user = varifyToken(res.data.token) as TUser;

      setCookie(res.data.token);
      dispatch(setUser({ user, token: res.data.token }));

      toast.success("Login success", { id: toastId });

      setTimeout(() => {
        router.push("/");
      }, 1000);
    } catch (err: any) {
      toast.error(err.data?.message || "Faild to login", { id: toastId });
    }
  };
  return (
    <div className="max-w-2xl mx-auto h-screen flex justify-center items-center px-6">
      <div className="space-y-6 w-full py-8">
        <div className="flex justify-center">
          <Image
            src={car}
            alt="image"
            height={1000}
            width={1000}
            className="md:w-[300px] w-40"
          />
        </div>
        <h1 className="text-center md:text-3xl text-2xl font-bold">Sign In</h1>
        <MyFormWrapper onSubmit={handleSubmit}>
          <MyFormInput
            name="email"
            type="email"
            label="Email"
            inputClassName="bg-[#f6f6f6]"
          />
          <MyFormInput
            name="password"
            type="password"
            label="Password"
            inputClassName="bg-[#f6f6f6]"
          />
          <div className="flex justify-between mb-5">
            <Link href={"/register"} className="text-primary font-semibold ">
              Register
            </Link>
            <Link
              href={"/forgot-password"}
              className="text-primary font-semibold "
            >
              Forgot password?
            </Link>
          </div>
          <MyBtn name="Log In" width="w-full" />
        </MyFormWrapper>
      </div>
    </div>
  );
};

export default LoginForm;
