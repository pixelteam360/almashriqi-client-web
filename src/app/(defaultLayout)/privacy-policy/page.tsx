import MyTitle from "@/components/common/MyTitle";

const page = () => {
  return (
    <div className="max-w-5xl mx-auto px-4">
      <div className="privacy-policy">
        <div className="flex justify-center flex-col items-center gap-4 md:my-14 my-8">
          <MyTitle title="Run Courier - Privacy Policy" />
          <h2>Effective Date: April 2025</h2>
        </div>

        <ol className="list-decimal space-y-4 text-lg">
          <li>
            <strong>Who We Are</strong>
            <br />
            This Privacy Policy applies to Romania Ltd trading as Run Courier
            (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;).
            <br />
            Registered in England & Wales, Company No. 13665172.
            <br />
            Registered Address: 112 Bridgwater Road, Ruislip, London, HA4 6LW.
          </li>

          <li>
            <strong>What This Policy Covers</strong>
            <br />
            This policy describes how we collect, use, share, and protect your
            personal data when you use our services, contact us, or visit our
            website (www.runcourier.co.uk).
          </li>

          <li>
            <strong>Information We Collect</strong>
            <br />
            <ul className="list-disc ml-5 space-y-2">
              <li>
                Personal information: name, address, phone number, email address
              </li>
              <li>Delivery details and instructions</li>
              <li>Payment details (securely through payment processors)</li>
              <li>Tracking and location data for deliveries</li>
              <li>Device information (IP address from website visits)</li>
            </ul>
          </li>

          <li>
            <strong>How We Use Your Information</strong>
            <br />
            <ul className="list-disc ml-5 space-y-2">
              <li>To provide courier and delivery services</li>
              <li>To communicate about bookings and deliveries</li>
              <li>To handle billing, payments, and support</li>
              <li>To improve services and operations</li>
              <li>To comply with legal obligations</li>
            </ul>
          </li>

          <li>
            <strong>Legal Basis for Processing</strong>
            <br />
            <ul className="list-disc ml-5 space-y-2">
              <li>Contractual necessity</li>
              <li>Legal obligations</li>
              <li>Legitimate interests</li>
              <li>Consent (where applicable)</li>
            </ul>
          </li>

          <li>
            <strong>Sharing Your Data</strong>
            <br />
            <ul className="list-disc ml-5 space-y-2">
              <li>Delivery drivers and subcontractors</li>
              <li>Payment service providers</li>
              <li>IT and hosting service providers</li>
              <li>Law enforcement (where legally required)</li>
            </ul>
            We never sell your personal data.
          </li>

          <li>
            <strong>International Transfers</strong>
            <br />
            Data is primarily stored in the UK.
            <br />
            If transferred outside the UK/EEA, appropriate safeguards will be
            applied.
          </li>

          <li>
            <strong>Data Retention</strong>
            <br />
            Data is retained as long as necessary for service provision and for
            6 years for legal and accounting purposes.
          </li>

          <li>
            <strong>Your Rights</strong>
            <br />
            <ul className="list-disc ml-5 space-y-2">
              <li>Access, correct, delete your personal data</li>
              <li>Object to or restrict processing</li>
              <li>Data portability rights</li>
            </ul>
            To exercise your rights, contact info@runcourier.co.uk.
          </li>

          <li>
            <strong>Data Security</strong>
            <br />
            We implement robust security measures to protect your personal data.
          </li>

          <li>
            <strong>Cookies</strong>
            <br />
            We use cookies to operate and improve our website.
          </li>

          <li>
            <strong>Changes to This Privacy Policy</strong>
            <br />
            We may update this policy periodically. Changes will be posted on
            our website.
          </li>

          <li>
            <strong>Contact Us</strong>
            <br />
            Data Protection Officer (DPO)
            <br />
            Run Courier - Romania Ltd
            <br />
            112 Bridgwater Road, Ruislip, London, HA4 6LW
            <br />
            Email: info@runcourier.co.uk
          </li>
        </ol>
      </div>
    </div>
  );
};

export default page;
