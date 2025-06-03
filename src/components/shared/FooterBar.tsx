import Link from "next/link";
import MyContainer from "../common/MyContainer";
import { FaFacebookF } from "react-icons/fa";
import { SiTrustpilot } from "react-icons/si";
import { RiWhatsappFill } from "react-icons/ri";

const FooterBar = () => {
  return (
    <div className="bg-primary md:mt-20 mt-10 text-white ">
      <MyContainer>
        <div className="flex justify-between md:gap-12 gap-6 flex-wrap">
          <div className="space-y-6">
            <h2 className="text-2xl font-medium italic">
              Run <span className="font-bold">Courier</span>
            </h2>

            <div>
              <p>
                Run Courier Same Day Delivery Trading name <br /> of Romania Ltd
                Registered in England & Wales
              </p>
              <p>Company Number: 13665172</p>
              <p>Email: info@runcourier.co.uk</p>
              <p>Phone: +44 7311 121217</p>
              <p>Phone: +44 7862 771999</p>
              <p>112 Bridgwater Road</p>
              <p>HA4 6LW Ruislip London</p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-lg font-bold">Explore</h2>

            <ul className="flex flex-col gap-1">
              <Link href={"/services"}>Services</Link>
              <Link href={"/about-us"}>About Us</Link>
              <Link href={"/contact-us"}>Contact Us</Link>
              <Link href={"/faq"}>FAQ</Link>
            </ul>
          </div>

          <div className="space-y-6">
            <h2 className="text-lg font-bold">Legal Pages</h2>

            <ul className="flex flex-col gap-1">
              <Link href={"/terms-privacy"}>Terms & Conditions</Link>
              <Link href={"/privacy-policy"}>Privacy Policy</Link>
              <Link href={"/driver-privacy-policy"}>Driver Privacy Policy</Link>
              <Link href={"/same-day-delivery"}>Same Day Delivery</Link>
            </ul>
          </div>

          <div className="space-y-6">
            <h2 className="text-lg font-bold">Social Media</h2>

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

        <div className="md:my-9 my-5 border-t-2 border-white/30">
          <h2 className="text-2xl font-medium italic text-center mt-9">
            Run <span className="font-bold">Courier</span>
          </h2>
        </div>
      </MyContainer>
    </div>
  );
};

export default FooterBar;
