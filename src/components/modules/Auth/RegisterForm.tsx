/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import MyFormInput from "@/components/form/MyFormInput";
import MyFormWrapper from "@/components/form/MyFormWrapper";
import Image from "next/image";
import { FieldValues } from "react-hook-form";
import car from "../../../assets/images/run-courier.png";
import MyFormSelect from "@/components/form/MyFormSelect";
import MyBtn from "@/components/common/MyBtn";
import { useRegisterMutation } from "@/redux/features/auth/authApi";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { userOptions } from "@/constants/common";
import Link from "next/link";

const RegisterForm = () => {
  const [register] = useRegisterMutation();
  const router = useRouter();

  const handleSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Registaring...");

    if (data.confirmPassword !== data.password) {
      toast.error("Confirm password did not match", { id: toastId });
      return;
    }

    const { confirmPassword, ...rest } = data;

    try {
      const res = await register(rest).unwrap();
      if (res) {
        toast.success("Register successfully", { id: toastId });
        router.push("/login");
      }
    } catch (err: any) {
      toast.error(err.data?.message || "Faild to Register", {
        id: toastId,
      });
    }
  };
  return (
    <div className="max-w-2xl mx-auto h-screen flex justify-center items-center md:mp-12 py-6">
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
        <h1 className="text-center md:text-3xl text-2xl font-bold">Sign Up</h1>
        <MyFormWrapper onSubmit={handleSubmit}>
          <MyFormInput
            name="email"
            type="email"
            label="Email"
            inputClassName="bg-[#f6f6f6]"
          />
          <MyFormInput
            name="phoneNumber"
            label=" Enter Number"
            inputClassName="bg-[#f6f6f6]"
          />
          <MyFormSelect
            name="role"
            options={userOptions}
            label=" Profile Type"
            selectClassName="bg-[#f6f6f6]"
          />
          <MyFormInput
            name="password"
            type="password"
            label="Password"
            inputClassName="bg-[#f6f6f6]"
          />
          <MyFormInput
            name="confirmPassword"
            type="password"
            label="Confirm Password"
            inputClassName="bg-[#f6f6f6]"
          />
          <div className="flex justify-end mb-5">
            <Link href={"/login"} className="text-primary font-semibold ">
              Login
            </Link>
          </div>
          <MyBtn name="Sign Up" width="w-full" />
        </MyFormWrapper>
      </div>
    </div>
  );
};

export default RegisterForm;
