import MyTitle from "@/components/common/MyTitle";
import React from "react";

const page = () => {
  return (
    <div className="max-w-5xl mx-auto px-4">
      <div className="driver-privacy-policy">
        <div className="flex justify-center flex-col items-center gap-4 md:my-14 my-8">
          <MyTitle title="Run Courier - Driver Privacy Policy" />
          <h2>Effective Date: April 2025</h2>
        </div>
        <h1></h1>

        <ol className="list-decimal space-y-4 text-lg">
          <li>
            <strong>Who We Are</strong>
            <br />
            This Driver Privacy Policy applies to Romania Ltd trading as Run
            Courier (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;).
            <br />
            We are registered in England &amp; Wales, Company No. 13665172.
            <br />
            Registered address: 112 Bridgwater Road, Ruislip, London, HA4 6LW.
          </li>

          <li>
            <strong>Purpose of This Policy</strong>
            <br />
            This policy describes how we collect, use, share, and protect the
            personal information of individuals engaged as drivers.
          </li>

          <li>
            <strong>Information We Collect About Drivers</strong>
            <br />
            <ul className="list-disc ml-5 space-y-2">
              <li>Full name</li>
              <li>Home address</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Date of birth</li>
              <li>Right-to-work documentation</li>
              <li>Driving licence and vehicle documents</li>
              <li>Bank account details (for payments)</li>
              <li>Location and tracking data during active deliveries</li>
              <li>Job and shift activity</li>
            </ul>
          </li>

          <li>
            <strong>How We Use Driver Information</strong>
            <br />
            <ul className="list-disc ml-5 space-y-2">
              <li>Verify eligibility to work</li>
              <li>Allocate and manage deliveries</li>
              <li>Communicate about jobs and operational updates</li>
              <li>Process payments</li>
              <li>Monitor job progress and provide support</li>
              <li>Comply with legal obligations (e.g., tax, employment law)</li>
            </ul>
          </li>

          <li>
            <strong>Legal Basis for Processing</strong>
            <br />
            <ul className="list-disc ml-5 space-y-2">
              <li>Contractual necessity (to assign and pay for jobs)</li>
              <li>Legal compliance (e.g., immigration, tax law)</li>
              <li>
                Legitimate interests (operational and business efficiency)
              </li>
            </ul>
          </li>

          <li>
            <strong>Sharing Driver Information</strong>
            <br />
            <ul className="list-disc ml-5 space-y-2">
              <li>Payment service providers</li>
              <li>IT and dispatch platform providers</li>
              <li>Law enforcement or regulators when required</li>
            </ul>
            We do not sell driver information.
          </li>

          <li>
            <strong>Location Tracking</strong>
            <br />
            <ul className="list-disc ml-5 space-y-2">
              <li>We track drivers only during active deliveries.</li>
              <li>Used for monitoring job progress and safety.</li>
            </ul>
          </li>

          <li>
            <strong>Data Security</strong>
            <br />
            We implement strong security measures to protect driver data.
          </li>

          <li>
            <strong>Driver Rights</strong>
            <br />
            Under UK GDPR, drivers have the right to:
            <ul className="list-disc ml-5 space-y-2">
              <li>Access personal data</li>
              <li>Request correction or deletion</li>
              <li>Object to certain processing</li>
              <li>Request data portability</li>
            </ul>
            Contact info@runcourier.co.uk to exercise rights.
          </li>

          <li>
            <strong>Changes to This Policy</strong>
            <br />
            We may update this Driver Privacy Policy. Updates will be
            communicated or posted.
          </li>

          <li>
            <strong>Contact Us</strong>
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
