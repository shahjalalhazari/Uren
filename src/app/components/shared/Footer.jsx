import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaThreads,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#222]">
      {/* Top Part */}
      <footer className="top-footer-layout">
        {/* Column 1 */}
        <aside className="footer-aside">
          <Image
            src={"/images/menu/logo/1.png"}
            width={200}
            height={100}
            alt="UREN"
          />
          <p className="footer-description">
            We are a team of designers and developers that create high quality
            HTML Template & Woocommerce, Shopify Theme.
          </p>
          <div className="footer-contacts">
            <p>
              <span className="footer-contacts-heading">Address: </span>26 Ewrat
              Holdings Inc. Al Waha St. Al Qouz 3, Dubai - UAE.
            </p>
            <p>
              <span className="footer-contacts-heading">Call Us: </span>+971 58
              919 6282
            </p>
            <p>
              <span className="footer-contacts-heading">Email: </span>
              shahjalalhazari@gmail.com
            </p>
          </div>
          <div className="flex gap-x-3">
            <Link
              href={"https://www.linkedin.com/in/shahjalal-hazari-968163230/"}
              target="_blank"
              className="bg-[#0077B5] footer-actions"
            >
              <FaLinkedinIn />
            </Link>
            <Link
              href={"https://github.com/shahjalalhazari"}
              target="_blank"
              className="bg-[#181717] footer-actions"
            >
              <FaGithub />
            </Link>
            <Link
              href={"https://www.facebook.com/shahjalalhazari0"}
              target="_blank"
              className="bg-[#1877F2] footer-actions"
            >
              <FaFacebookF />
            </Link>
            <Link
              href={"https://www.instagram.com/shahjalalhazari/"}
              target="_blank"
              className="bg-[#E4405F] footer-actions"
            >
              <FaInstagram />
            </Link>
            <Link
              href={"/"}
              target="_blank"
              className=" bg-[#000] footer-actions"
            >
              <FaXTwitter />
            </Link>
            <Link
              href={"/"}
              target="_blank"
              className="bg-[#000] footer-actions"
            >
              <FaThreads />
            </Link>
          </div>
        </aside>
        {/* Column 2 */}
        <nav className="">
          <h6 className="footer-nav-heading">Information</h6>
          <div className="bg-primary w-16 h-[1px] mt-4 mb-5"></div>
          <ul className="footer-nav-item-list">
            {InfoNavItems.map((item) => (
              <li key={item.path} className="">
                <Link href={item.path} className="footer-nav-link">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {/* Column 3 */}
        <nav className="">
          <h6 className="footer-nav-heading">Customer Service</h6>
          <div className="bg-primary w-16 h-[1px] mt-4 mb-5"></div>
          <ul className="footer-nav-item-list">
            <li className="">
              <Link href={"/"} className="footer-nav-link">
                Contact Us
              </Link>
            </li>
            <li className="">
              <Link href={"/"} className="footer-nav-link">
                Returns
              </Link>
            </li>
            <li className="">
              <Link href={"/"} className="footer-nav-link">
                Shop Locations
              </Link>
            </li>
          </ul>
        </nav>
        <nav className="">
          <h6 className="footer-nav-heading">Extras</h6>
          <div className="bg-primary w-16 h-[1px] mt-4 mb-5"></div>
          <ul className="footer-nav-item-list">
            <li className="">
              <Link href={"/"} className="footer-nav-link">
                Delivery Information
              </Link>
            </li>
            <li className="">
              <Link href={"/"} className="footer-nav-link">
                Privacy Policy
              </Link>
            </li>
            <li className="">
              <Link href={"/"} className="footer-nav-link">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </nav>
        {/* Column 4 */}
        <nav className="">
          <h6 className="footer-nav-heading">My Account</h6>
          <div className="bg-primary w-16 h-[1px] mt-4 mb-5"></div>
          <ul className="footer-nav-item-list">
            <li className="">
              <Link href={"/"} className="footer-nav-link">
                My Profile
              </Link>
            </li>
            <li className="">
              <Link href={"/"} className="footer-nav-link">
                Order Cart
              </Link>
            </li>
            <li className="">
              <Link href={"/"} className="footer-nav-link">
                Order History
              </Link>
            </li>
            <li className="">
              <Link href={"/"} className="footer-nav-link">
                Wish List
              </Link>
            </li>
          </ul>
        </nav>
      </footer>

      {/* Bottom Part */}
      <footer className="bottom-footer-layout">
        <p>
          &copy; 2025{" "}
          <Link
            href={"https://www.templateshub.net/"}
            className="hover:text-primary"
            target="_blank"
          >
            Templateshub.
          </Link>
        </p>

        <nav className="">
          <Image
            src={"/images/footer/payment/1.png"}
            width={300}
            height={200}
            alt="UREN"
          />
        </nav>
      </footer>
    </div>
  );
};

export default Footer;

// Nav Items List
const InfoNavItems = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About Us",
    path: "/about",
  },
  {
    title: "Services",
    path: "/services",
  },
  {
    title: "Blogs",
    path: "/blog",
  },
  {
    title: "Contact Us",
    path: "/contact",
  },
];