import MyTitle from "@/components/common/MyTitle";
import Image from "next/image";
import about1 from "../../../assets/images/about1.png";
import about2 from "../../../assets/images/about2.png";

const page = () => {
  return (
    <div className="md:mt-18 mt-8">
      <div className="flex md:flex-row flex-col-reverse md:gap-12 gap-6 md:text-start text-center">
        <div className="space-y-4 md:w-1/2">
          <MyTitle title="Mission Statement" />
          <p className="text-[#525050]">
            At Run Courier, our mission is to redefine same-day delivery by
            combining speed, reliability, and personalized service. We are
            dedicated to helping businesses and individuals send and receive
            parcels with confidence—whether it’s a legal document, an urgent
            medical sample, or a retail order.
          </p>
          <p className="text-[#525050]">
            We aim to build long-term relationships with our clients by
            delivering excellence at every step—from real-time tracking and fair
            per-mile pricing, to professional drivers who treat every delivery
            with care. With a focus on customer satisfaction, safety, and
            transparency, we are not just delivering packages—we’re delivering
            trust.
          </p>
        </div>
        <div className="md:w-1/2">
          <Image src={about1} alt="image" height={1000} width={1000} />
        </div>
      </div>

      <div className="flex md:flex-row flex-col md:gap-12 gap-6 md:mt-28 mt-14 md:text-start text-center">
        <div className="md:w-1/2">
          <Image src={about2} alt="image" height={1000} width={1000} />
        </div>
        <div className="space-y-4 md:w-1/2">
          <MyTitle title="Vision Statement" />
          <p className="text-[#525050]">
            Our vision is to become the go-to courier partner for urgent and
            time-sensitive deliveries across the UK. We aspire to lead the
            logistics space with technology-driven solutions, eco-conscious
            operations, and a people-first culture.
          </p>
          <p className="text-[#525050]">
            We envision a future where small businesses, large enterprises, and
            everyday customers all benefit from our reliable same-day delivery
            network—where deliveries are seamless, expectations are exceeded,
            and local communities are better connected.
          </p>
          <ul className="text-[#525050]">
            As we grow, we are committed to:
            <li>
              - Expanding our service reach while maintaining personal,
              high-quality service
            </li>
            <li>
              - Investing in innovative tools to improve speed, accuracy, and
              communication
            </li>
            <li>
              - Supporting industries like healthcare, legal, retail, and
              government with specialized courier solutions
            </li>
            <li>
              - Promoting sustainability by exploring greener delivery options
            </li>
          </ul>
        </div>
      </div>

      <div className="grid md:grid-cols-3 md:gap-x-5 md:gap-y-8 gap-y-4 md:mt-14 mt-8 md:text-start text-center">
        <div></div>
        <div className="md:col-span-2">
          <p className="text-[#525050]">
            Run Courier is dedicated to providing fast, reliable, and secure
            same-day delivery services across London and the UK. Our mission is
            to ensure that every parcel—whether for business or personal
            use—arrives on time, every time.
          </p>
        </div>
        <div className="md:col-span-2">
          <p className="text-[#525050]">
            Founded by industry experts, our company combines local knowledge
            with innovative technology to keep your deliveries moving. By
            leveraging advanced routing systems and real-time tracking, we can
            offer tailored solutions that meet the unique demands of our
            clients—from urgent corporate documents and e-commerce packages to
            specialized medical and healthcare deliveries.
          </p>
        </div>
        <div></div>
        <div></div>
        <div className="md:col-span-2">
          <p className="text-[#525050]">
            Founded by industry experts, our company combines local knowledge
            with innovative technology to keep your deliveries moving. By
            leveraging advanced routing systems and real-time tracking, we can
            offer tailored solutions that meet the unique demands of our
            clients—from urgent corporate documents and e-commerce packages to
            specialized medical and healthcare deliveries.
          </p>
        </div>
        <div className="md:col-span-2">
          <ul className="text-[#525050]">
            Our services are designed with you in mind:
            <li>
              • Local Same-Day Delivery: Rapid service across London with
              flexible options for both small and bulk deliveries.
            </li>
            <li>
              • Nationwide Delivery: Same-day drop-offs that extend our reach to
              meet your needs across the UK.
            </li>
            <li>
              • Corporate & Custom Solutions: Personalized services that
              integrate seamlessly into your business operations, from
              multi-stop routes to scheduled regular pickups.
            </li>
            <li>
              • Specialized Services: From confidential medical deliveries to
              sensitive documents, we have the expertise to handle it all.
            </li>
          </ul>
        </div>
        <div></div>
        <div></div>
        <div className="md:col-span-2">
          <p className="text-[#525050]">
            Join the many satisfied customers who trust Run Courier for their
            time-critical deliveries. Let us streamline your logistics so you
            can focus on what matters most—growing your business and meeting
            your personal commitments.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
