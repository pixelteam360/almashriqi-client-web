/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import MyBtn from "@/components/common/MyBtn";
import MyTitle from "@/components/common/MyTitle";
import MyFormInput from "@/components/form/MyFormInput";
import MyFormWrapper from "@/components/form/MyFormWrapper";
import { useSendMailToAdminMutation } from "@/redux/features/common/commonApi";
import { Mail, MapPin, PhoneCall } from "lucide-react";
import Link from "next/link";
import { FieldValues } from "react-hook-form";
import { FaFacebookF } from "react-icons/fa6";
import { RiWhatsappFill } from "react-icons/ri";
import { SiTrustpilot } from "react-icons/si";
import { toast } from "sonner";

const ContactUs = () => {
  const [sendMail] = useSendMailToAdminMutation();

  const handleSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Sending...");

    try {
      const res = await sendMail(data).unwrap();
      if (res) {
        toast.success("Sendet successfully", { id: toastId });
      }
    } catch (err: any) {
      toast.error(err.data?.message || "Faild to Send", {
        id: toastId,
      });
    }
  };
  return (
    <div className="md:mt-20 mt-8">
      <div className="flex flex-col items-center w-full text-center space-y-4">
        <MyTitle title="Contact Us" />
        <p className="text-[#717171]">
          Any question or remarks? Just write us a message!
        </p>
      </div>

      <div className="bg-white md:p-4 p-2 flex md:flex-row flex-col-reverse md:gap-7 gap-4 rounded-xl md:mt-16 mt-6">
        <div className="bg-primary rounded-xl md:w-5/12 w-full md:p-9 p-3  text-white">
          <div className="space-y-4">
            <h3 className="text-[28px] ">Contact Information</h3>
            <p className="text-[#C9C9C9]">
              Run Courier Same Day Delivery Trading name of Romania Ltd
              Registered in England & Wales Company Number: 13665172
            </p>
          </div>

          <div className="md:space-y-12 space-y-5 md:mt-16 mt-6">
            <p className="flex gap-3 items-center">
              <PhoneCall /> +44 7311 121217
            </p>
            <p className="flex gap-3 items-center">
              <Mail /> info@runcourier.co.uk
            </p>
            <p className="flex gap-3 items-center">
              <MapPin /> 112 Bridgwater Road HA4 6LW Ruislip London
            </p>
          </div>

          <div className="md:mt-24 mt-7">
            <ul className="flex gap-4">
              <Link
                href={
                  "https://www.facebook.com/share/192Um3f12V/?mibextid=wwXIfr"
                }
                target="_blank"
              >
                <FaFacebookF className="w-12 h-12 rounded-full bg-white text-primary p-3" />{" "}
              </Link>
              <Link href={"https://wa.me/447311121217"} target="_blank">
                <RiWhatsappFill className="w-12 h-12 rounded-full bg-white text-primary p-3" />
              </Link>
              <Link
                href={"https://uk.trustpilot.com/review/runcourier.co.uk"}
                target="_blank"
              >
                <SiTrustpilot className="w-12 h-12 rounded-full bg-white text-primary p-3" />
              </Link>
            </ul>
          </div>
        </div>

        <div className="md:w-7/12 w-full md:p-7 p-3">
          <MyFormWrapper onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <MyFormInput
                name="firstName"
                inputClassName="border-b border-[#8D8D8D] bg-transparent rounded-none"
                label="First Name"
                labelClassName="!text-sm"
              />
              <MyFormInput
                name="lastName"
                inputClassName="border-b border-[#8D8D8D] bg-transparent rounded-none"
                label="Last Name"
                labelClassName="!text-sm"
              />
              <MyFormInput
                name="email"
                type="email"
                inputClassName="border-b border-[#8D8D8D] bg-transparent rounded-none"
                label="Email"
                labelClassName="!text-sm"
              />
              <MyFormInput
                name="phone"
                inputClassName="border-b border-[#8D8D8D] bg-transparent rounded-none"
                label="Phone Number"
                labelClassName="!text-sm"
              />
            </div>
            <MyFormInput
              name="subject"
              inputClassName="border-b border-[#8D8D8D] bg-transparent rounded-none"
              label="Select Subject?"
              labelClassName="!text-sm"
            />
            <MyFormInput
              name="message"
              type="textarea"
              inputClassName="border-b border-[#8D8D8D] bg-transparent rounded-none"
              label="Message"
              labelClassName="!text-sm"
            />
            <div className="flex md:justify-end justify-center mt-5">
              <MyBtn name="Send Message" />
            </div>
          </MyFormWrapper>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
