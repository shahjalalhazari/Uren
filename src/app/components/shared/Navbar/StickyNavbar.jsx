"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BiShoppingBag } from "react-icons/bi";
import { FaAngleDown, FaUser } from "react-icons/fa";

const StickyNavbar = ({ navItems }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isUserAccountOpen, setUserAccountOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`sticky-navbar ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex gap-8">
        {navItems.map((item) => (
          <Link
            className="font-bold hover:text-secondary"
            key={item.path}
            href={item.path}
          >
            {item.title}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-x-8">
        <div className="">
          {/* REPLACE */}
          <Link href="/" className="">
            <div className="flex gap-2 items-center">
              <div className="relative">
                <BiShoppingBag className="text-4xl" />
                <p className="cart-items-qty">3</p>
              </div>
              <p className="text-xl font-semibold">$462.40</p>
            </div>
          </Link>
        </div>
        {/* User's Account */}
        <div className="relative">
          <button
            className="flex items-center gap-1 text-md"
            onClick={() => setUserAccountOpen(!isUserAccountOpen)}
          >
            <FaUser /> <FaAngleDown />
          </button>
          <ul
            className={`dropdown-list ${
              isUserAccountOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          >
            <Link href="/profile">
              <li className="dropdown-list-item">Profile</li>
            </Link>
            <Link href="/profile">
              <li className="dropdown-list-item">Logout</li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default StickyNavbar;
