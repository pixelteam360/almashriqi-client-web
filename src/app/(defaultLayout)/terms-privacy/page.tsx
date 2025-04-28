import MyTitle from "@/components/common/MyTitle";

const page = () => {
  return (
    <div className="max-w-5xl mx-auto px-4">
      <div className="terms-conditions">
        <div className="flex justify-center flex-col items-center gap-4 md:my-14 my-8">
          <MyTitle title="Run Courier - Terms and Conditions" />
          <h2>Effective Date: April 2025</h2>
        </div>

        <ol className="list-decimal space-y-4 text-lg">
          <li>
            <strong>Introduction</strong>
            <br />
            Welcome to Run Courier. These Terms and Conditions apply to the use
            of our services and website. Run Courier is operated by Romania Ltd,
            registered in England and Wales (Company No. 13665172).
            <br />
            Registered Address: 112 Bridgwater Road, Ruislip, London, HA4 6LW.
            <br />
            By using our services, you agree to comply with these Terms.
          </li>

          <li>
            <strong>Our Services</strong>
            <br />
            Run Courier provides same-day, scheduled, and express delivery
            services throughout the United Kingdom.
            <br />
            All bookings are subject to acceptance, availability, and
            confirmation.
          </li>

          <li>
            <strong>Booking and Cancellation</strong>
            <br />
            <ul className="list-disc ml-5 space-y-2">
              <li>
                Bookings can be made through our website, email, or phone.
              </li>
              <li>
                Cancellations must be made within 30 minutes to avoid
                cancellation fees.
              </li>
              <li>
                If a driver has already been dispatched, cancellation charges
                may apply.
              </li>
            </ul>
          </li>

          <li>
            <strong>Customer Responsibilities</strong>
            <br />
            Customers must:
            <ul className="list-disc ml-5 space-y-2">
              <li>Ensure all parcels are properly packaged and labelled.</li>
              <li>Provide accurate collection and delivery addresses.</li>
              <li>
                Ensure that no prohibited, illegal, dangerous, or restricted
                goods are sent.
              </li>
              <li>
                Ensure someone is available to hand over and receive parcels
                where required.
              </li>
            </ul>
          </li>

          <li>
            <strong>Pricing and Payment</strong>
            <br />
            <ul className="list-disc ml-5 space-y-2">
              <li>
                Prices are provided at the time of booking and confirmed before
                service.
              </li>
              <li>
                Payments must be made by credit card, debit card, or approved
                invoicing accounts.
              </li>
              <li>
                Additional charges may apply for:
                <ul className="list-disc ml-5">
                  <li>
                    Waiting time beyond the free period (first 10 minutes free)
                  </li>
                  <li>Congestion zone fees</li>
                  <li>Return trips or additional stops</li>
                </ul>
              </li>
            </ul>
          </li>

          <li>
            <strong>Liability</strong>
            <br />
            <ul className="list-disc ml-5 space-y-2">
              <li>
                Run Courier holds Goods in Transit insurance for all deliveries.
              </li>
              <li>
                In the event of loss, theft, or damage to goods while in our
                possession, claims will be handled through our insurance
                coverage.
              </li>
              <li>
                Customers are not personally liable for loss or damage while
                items are in transit with Run Courier.
              </li>
              <li>
                Customers are responsible for ensuring goods are properly
                packaged for transport.
              </li>
              <li>
                Any claims for loss or damage must be made in writing within 7
                days of the scheduled delivery date.
              </li>
            </ul>
          </li>

          <li>
            <strong>Prohibited Items</strong>
            <br />
            We do not transport:
            <ul className="list-disc ml-5 space-y-2">
              <li>
                Dangerous goods (unless prior agreement and compliance with ADR
                regulations)
              </li>
              <li>Illegal items</li>
              <li>Perishable goods without appropriate packaging</li>
            </ul>
          </li>

          <li>
            <strong>Claims</strong>
            <br />
            Any claim for loss, damage, or delay must be made in writing within
            7 days of delivery (or expected delivery).
          </li>

          <li>
            <strong>Data Protection</strong>
            <br />
            Customer information is collected and processed in accordance with
            our Privacy Policy, available on our website.
          </li>

          <li>
            <strong>Changes to Terms</strong>
            <br />
            We reserve the right to modify these Terms at any time. Updates will
            be posted on our website.
          </li>

          <li>
            <strong>Governing Law</strong>
            <br />
            These Terms are governed by the laws of England and Wales.
            <br />
            Any disputes will be subject to the exclusive jurisdiction of the
            courts of England and Wales.
          </li>

          <li>
            <strong>Contact Us</strong>
            <br />
            Run Courier - Romania Ltd
            <br />
            112 Bridgwater Road, Ruislip, London, HA4 6LW
            <br />
            Email: info@runcourier.co.uk
            <br />
            Phone: +44 7311 121217
          </li>
        </ol>
      </div>
    </div>
  );
};

export default page;
