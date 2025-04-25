import React from "react";

const MyBtn = ({
  name,
  width = "w-auto",
}: {
  name: string;
  width?: string;
}) => {
  return (
    <button
      className={`px-12 py-3 bg-primary text-white rounded-lg ${width} hover:bg-secondary`}
    >
      {name}
    </button>
  );
};

export default MyBtn;
