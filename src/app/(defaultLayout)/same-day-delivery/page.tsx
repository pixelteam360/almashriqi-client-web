import MyTitle from "@/components/common/MyTitle";

const page = () => {
  return (
    <div className="max-w-5xl mx-auto px-4">
      <div className="flex justify-center flex-col items-center gap-4 md:my-14 my-8">
        <MyTitle title="Same Day Delivery – Failed Delivery Policy" />
        <h2>Effective Date: April 2025</h2>
      </div>

      <h2 className="text-xl font-semibold mb-2">1. Overview</h2>
      <p className="mb-4">
        This policy outlines the procedures and consequences of a failed
        delivery attempt by Run Courier Same Day Delivery. A delivery is
        considered “failed” when it cannot be completed due to reasons outside
        the company’s control.
      </p>

      <h2 className="text-xl font-semibold mb-2">
        2. Definition of a Failed Delivery
      </h2>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>
          The recipient is unavailable at the delivery address during the agreed
          delivery time.
        </li>
        <li>
          The pickup contact is not reachable, or the parcel is not ready upon
          driver arrival.
        </li>
        <li>The delivery address is incorrect, incomplete, or inaccessible.</li>
        <li>
          The driver has waited the maximum allotted time (including the free
          waiting period) with no further instruction.
        </li>
        <li>The recipient refuses to accept the parcel.</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">
        3. Procedure in Case of Failed Delivery
      </h2>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>
          The driver will wait up to 10 minutes for free, and then charge £5 per
          10-minute block (as per Waiting Time Policy).
        </li>
        <li>The driver must attempt to contact the recipient via phone.</li>
        <li>
          If no response is received within 30 minutes, the delivery will be
          marked as failed.
        </li>
        <li>
          The parcel will be returned to the sender, held for re-delivery, or
          stored securely depending on prior instructions.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">
        4. Charges for Failed Deliveries
      </h2>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Full delivery fee still applies.</li>
        <li>
          Return-to-sender or re-delivery is charged separately based on
          distance and effort.
        </li>
        <li>
          Additional fees may apply for:
          <ul className="list-disc pl-6 mt-1">
            <li>Waiting time</li>
            <li>Congestion/toll zones</li>
            <li>Out-of-hours attempts</li>
          </ul>
        </li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">5. Re-Delivery Options</h2>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Subject to availability and rebooking confirmation</li>
        <li>Charged as a new delivery, based on current pricing</li>
        <li>
          Payment required before re-dispatch (unless business account with
          terms)
        </li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">6. Special Circumstances</h2>
      <p className="mb-4">
        If the failed delivery was due to an error caused by Run Courier (e.g.,
        wrong driver instructions, internal misrouting), the client will not be
        charged for re-delivery.
      </p>

      <h2 className="text-xl font-semibold mb-2">7. Disputes & Resolution</h2>
      <p className="mb-4">
        Clients may dispute a failed delivery within 48 hours by contacting{" "}
        <a
          href="mailto:info@runcourier.co.uk"
          className="text-blue-600 underline"
        >
          info@runcourier.co.uk
        </a>{" "}
        with their delivery reference and details. All disputes will be reviewed
        by management.
      </p>

      <h2 className="text-xl font-semibold mb-2">8. Amendments</h2>
      <p className="mb-4">
        Run Courier reserves the right to modify this Failed Delivery Policy at
        any time. The updated policy will be posted on our website and
        communicated to clients when necessary.
      </p>
    </div>
  );
};

export default page;
