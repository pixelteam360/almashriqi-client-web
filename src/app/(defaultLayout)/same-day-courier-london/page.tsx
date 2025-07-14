import Link from "next/link";

const page = () => {
  return (
    <div>
      <h1>Same Day Courier Service in London</h1>

      <p>
        <strong>Run Courier</strong> is your trusted same-day delivery partner
        based in London. We offer fast, affordable, and reliable courier
        services throughout <strong>Greater London</strong>, including Central
        London, North, South, East, and West London zones.
      </p>

      <p>
        {`Whether you're a pharmacy, law firm, retailer, restaurant, or private
        client — we’re ready to deliver your urgent packages with care and
        speed.`}
      </p>

      <h2>Why Choose Run Courier for London Deliveries?</h2>
      <ul>
        <li>⚡ Instant same-day pickup — usually within 60 minutes</li>
        <li>📦 Medical, retail, legal, and personal deliveries</li>
        <li>📍 Live GPS tracking and proof of delivery</li>
        <li>🚗 Motorbike, car, small van, and medium van options</li>
        <li>💼 Multi-drop and return trip service available</li>
        <li>
          ✅ Central London congestion zone covered (+£15 surcharge applies)
        </li>
      </ul>

      <h2>Delivery Areas We Cover</h2>
      <p>
        We cover all London postcodes including NW, SE, SW, W, E, N, EC, WC, and
        Greater London boroughs such as:
      </p>
      <ul>
        <li>
          Croydon, Enfield, Camden, Westminster, Hammersmith, Hackney,
          Wandsworth
        </li>
        <li>
          Heathrow, Stratford, Barking, Lewisham, Brent, Hounslow, Islington
        </li>
      </ul>

      <p>
        Need to send something outside London? We also cover national same-day
        deliveries across the UK.
      </p>

      <h2>Book Your Delivery Now</h2>
      <p>
        Get an instant quote on our website or contact us by phone at{" "}
        <strong>07311 121217</strong>.
      </p>
      <p>
        <Link href="/contact-us">Click here to get a quote</Link> or{" "}
        <a href="/contact.html">contact us</a> directly.
      </p>
    </div>
  );
};

export default page;
