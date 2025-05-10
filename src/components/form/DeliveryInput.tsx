"use client";
import { useEffect, useRef } from "react";

interface Props {
  onSelect: (postcode: string) => void;
}

export const DeliveryInput = ({ onSelect }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!window.google || !inputRef.current) return;

    const autocomplete = new window.google.maps.places.Autocomplete(
      inputRef.current,
      {
        types: ["geocode"],
        componentRestrictions: { country: "uk" },
      }
    );

    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();

      if (!place.address_components) return;

      const postalComponent = place.address_components.find((comp) =>
        comp.types.includes("postal_code")
      );

      const postalCode = postalComponent?.long_name;

      if (postalCode) {
        onSelect(postalCode);
      } else {
        console.warn("No postal code found in the selected place.");
      }
    });
  }, []);

  return (
    <input
      type="text"
      ref={inputRef}
      placeholder="Enter delivery address"
      className="border !border-[#2C2D5B] !rounded-2xl bg-white py-7 !text-sm px-7 w-full"
    />
  );
};
