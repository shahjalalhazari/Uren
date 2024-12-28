import Image from "next/image";
import Link from "next/link";
import { BiShoppingBag, BiSolidPhone } from "react-icons/bi";

const TopNavbar = () => {
  return (
    <div className="navbar bg-base-100 flex justify-between">
      {/* LOGO */}
      <div className="">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <Link href={"/"}>
              <Image
                width={"190"}
                height={"40"}
                src="/images/menu/logo/2.png"
                alt="Uren's Logo"
              />
            </Link>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          ></ul>
        </div>
        <Link href="/">
          <Image
            width={"190"}
            height={"40"}
            src="/images/menu/logo/2.png"
            alt="Uren's Logo"
          />
        </Link>
      </div>
      <ul className="flex gap-4">
        <li className="">
          <form action="#" className="">
            <input
              type="text"
              placeholder="Search Here..."
              className="h-[60px] pl-5 pr-10 focus:outline-none border border-primary rounded-s-lg"
            />
            <button
              className="bg-primary px-5 py-4 rounded-e-lg font-bold uppercase text-lg"
              type="submit"
            >
              <span>Search</span>
            </button>
          </form>
        </li>
        <li className="border border-primary rounded-lg px-5 py-1">
          {/* REPLACE */}
          <Link href="/" className="">
            <div className="flex gap-3 items-center">
              <BiShoppingBag className="text-3xl" />
              <div className="flex flex-col gap-y-0 text-md font-semibold">
                <span className="">3 Items</span>
                <span className="text-secondary text-xl">$462.40</span>
              </div>
            </div>
          </Link>
        </li>
        <li className="border border-primary rounded-lg flex items-center">
          <Link
            href="tel://+123123321345"
            className="flex items-center gap-x-2 px-5 py-[14px] text-2xl font-semibold text-secondary"
          >
            <BiSolidPhone />
            +971 58 919 6282
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default TopNavbar;
