import BottomNavbar from "./BottomNavbar";
import StickyNavbar from "./StickyNavbar";
import TopNavbar from "./TopNavbar";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      {/* Navbar Top Part */}
      <TopNavbar />
      {/* Navbar Bottom Part */}
      <BottomNavbar navItems={navItems} />
      {/* Sticky Navbar */}
      <StickyNavbar navItems={navItems} />
    </>
  );
};

export default Navbar;

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