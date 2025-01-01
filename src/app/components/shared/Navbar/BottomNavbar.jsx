"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaAngleDown, FaDollarSign, FaUser } from "react-icons/fa";

const BottomNavbar = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isCurrencyOpen, setCurrencyOpen] = useState(false);
  const [isLanguageOpen, setLanguageOpen] = useState(false);
  const [isUserAccountOpen, setUserAccountOpen] = useState(false);

  return (
    <div className="btm-nav-bg">
      {/* Category Menu  */}
      <div className="flex items-center gap-x-16">
        <div className="relative">
          <div
            onClick={() => setIsCategoryOpen(!isCategoryOpen)}
            className="category-list-heading"
          >
            <FaBars className="text-4xl" />
            <h2 className="category-list-heading-text">
              <span>Shop By</span>
              <br />
              <span>Department</span>
            </h2>
            <FaAngleDown className="text-3xl" />
          </div>

          {/* Category List */}
          <div
            className={`category-list 
                ${
                  isCategoryOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
          >
            <ul className="p-4 font-medium">
              {categories.map((item) => (
                <Link className="" key={item.title} href={item.path}>
                  <li className="dropdown-list-item">{item.title}</li>
                </Link>
              ))}
            </ul>
          </div>
        </div>

        {/* Main Navigation */}
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
      </div>

      {/* Navbar right part */}
      <div className="flex items-center gap-6">
        {/* Currency Dropdown */}
        <div className="relative">
          <button
            className="flex items-center gap-1"
            onClick={() => setCurrencyOpen(!isCurrencyOpen)}
          >
            <FaDollarSign /> <FaAngleDown />
          </button>
          <ul
            className={`dropdown-list ${
              isCurrencyOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          >
            <Link href="">
              <li className="dropdown-list-item">$ US Dollar</li>
            </Link>
            <Link href="">
              <li className="dropdown-list-item">£ Pound Sterling</li>
            </Link>
            <Link href="">
              <li className="dropdown-list-item">€ EUR</li>
            </Link>
          </ul>
        </div>

        {/* Language Dropdown  */}
        <div className="relative">
          <button
            className="flex items-center gap-1"
            onClick={() => setLanguageOpen(!isLanguageOpen)}
          >
            <Image
              src="/images/menu/icon/1.jpg"
              width="18"
              height="15"
              alt="English"
            />{" "}
            <FaAngleDown />
          </button>
          <ul
            className={`dropdown-list ${
              isLanguageOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          >
            <li className="dropdown-list-item flex gap-2 hover:cursor-pointer">
              <Image
                src="/images/menu/icon/1.jpg"
                width="20"
                height="12"
                alt="English"
              />{" "}
              English
            </li>
            <li className="dropdown-list-item flex gap-2 hover:cursor-pointer">
              <Image
                src="/images/menu/icon/2.jpg"
                width="20"
                height="12"
                alt="English"
              />{" "}
              Français
            </li>
          </ul>
        </div>

        {/* User's Account */}
        <div className="relative">
          <button
            className="flex items-center gap-1"
            onClick={() => setUserAccountOpen(!isUserAccountOpen)}
          >
            <FaUser /> <FaAngleDown />
          </button>
          <ul
            className={`dropdown-list ${
              isUserAccountOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          >
            <Link href="profile">
              <li className="dropdown-list-item">Profile</li>
            </Link>
            <Link href="profile">
              <li className="dropdown-list-item">Logout</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BottomNavbar;

// Nav Items List
const navItems = [
  {
    title: "HOME",
    path: "/",
  },
  {
    title: "ABOUT US",
    path: "/about",
  },
  {
    title: "SERVICES",
    path: "/services",
  },
  {
    title: "BLOG",
    path: "/blog",
  },
  {
    title: "CONTACT US",
    path: "/contact",
  },
];

// CATEGORY LIST
const categories = [
  {
    title: "Tires",
    path: "/",
  },
  {
    title: "Spare Parts",
    path: "/",
  },
  {
    title: "Bumpers",
    path: "/",
  },
  {
    title: "Lights",
    path: "/",
  },
  {
    title: "Suspensions",
    path: "/",
  },
];
