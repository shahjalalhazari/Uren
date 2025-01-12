import Link from "next/link";
import React from "react";

const PrimaryBtn = ({ text, path }) => {
  return (
    <button className="primary-btn">
      <Link href={path}>{text}</Link>
    </button>
  );
};

export default PrimaryBtn;
