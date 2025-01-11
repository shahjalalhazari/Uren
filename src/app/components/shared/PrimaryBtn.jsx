import Link from "next/link";
import React from "react";

const PrimaryBtn = ({ text, path }) => {
  return (
    <button className="bg-primary px-10 py-3 font-semibold uppercase shadow-md rounded-md hover:text-secondary">
      <Link href={path}>{text}</Link>
    </button>
  );
};

export default PrimaryBtn;
