import Image from "next/image";
import Link from "next/link";
import { FaBars, FaAngleDown, FaDollarSign, FaUser } from "react-icons/fa";

const BottomNavbar = () => {
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
  return (
    <div className="bg-primary flex justify-between items-center px-8 py-0 mt-5">
      <div className="flex items-center gap-x-10">
        {/* Category List */}
        <div className="bg-[#000] cursor-pointer text-base-100 flex justify-between items-center py-[14px] px-4">
          <FaBars className="text-4xl" />
          <h2 className="uppercase flex-col font-semibold lg:pl-4 lg:pr-20 leading-none">
            <span>Shop By</span>
            <br />
            <span>Department</span>
          </h2>
          <FaAngleDown className="text-3xl" />
        </div>

        {/* Nav items */}
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

      <div className="flex gap-4">
        {/* Nav right Part */}
        <h6 className="flex text-lg hover:cursor-pointer">
          <FaDollarSign />
          <FaAngleDown />
        </h6>

        <h6 className="flex text-lg hover:cursor-pointer">
          <FaUser />
          <FaAngleDown />
        </h6>
      </div>
    </div>
  );
};

export default BottomNavbar;

// CATEGORY LIST
{
  /* <div id="cate-toggle" className="category-menu-list">
                <ul>
                  <li className="right-menu">
                    <a href="shop-left-sidebar.html">Car Parts</a>
                    <ul className="cat-mega-menu">
                      <li className="right-menu cat-mega-title">
                        <a href="shop-left-sidebar.html">Active body control</a>
                        <ul>
                          <li>
                            <a href="shop-left-sidebar.html">
                              Aluminum Nonstick
                            </a>
                          </li>
                          <li>
                            <a href="shop-left-sidebar.html">Calphalon</a>
                          </li>
                          <li>
                            <a href="shop-left-sidebar.html">Contemporary</a>
                          </li>
                          <li>
                            <a href="shop-left-sidebar.html">Hard-Anodized</a>
                          </li>
                        </ul>
                      </li>
                      <li className="right-menu cat-mega-title">
                        <a href="shop-left-sidebar.html">Battery Indicator</a>
                        <ul>
                          <li>
                            <a href="shop-left-sidebar.html">Sanai laptops</a>
                          </li>
                          <li>
                            <a href="shop-left-sidebar.html">Byteflight</a>
                          </li>
                          <li>
                            <a href="shop-left-sidebar.html">EXcaliberPC</a>
                          </li>
                          <li>
                            <a href="shop-left-sidebar.html">Gaming Laptops</a>
                          </li>
                        </ul>
                      </li>
                      <li className="right-menu cat-mega-title">
                        <a href="shop-left-sidebar.html">Remote Starter</a>
                        <ul>
                          <li>
                            <a href="shop-left-sidebar.html">Dual Core</a>
                          </li>
                          <li>
                            <a href="shop-left-sidebar.html">Gaming Monitors</a>
                          </li>
                          <li>
                            <a href="shop-left-sidebar.html">GPS Monitors</a>
                          </li>
                          <li>
                            <a href="shop-left-sidebar.html">Heat Shield</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="right-menu">
                    <a href="shop-left-sidebar.html">Tools &amp; Accessories</a>
                    <ul className="cat-mega-menu cat-mega-menu-2">
                      <li className="right-menu cat-mega-title">
                        <a href="shop-left-sidebar.html">Drills</a>
                        <ul>
                          <li>
                            <a href="shop-left-sidebar.html">Angle Drills</a>
                          </li>
                          <li>
                            <a href="shop-left-sidebar.html">Combi Drills</a>
                          </li>
                          <li>
                            <a href="shop-left-sidebar.html">Drill Drivers</a>
                          </li>
                          <li>
                            <a href="shop-left-sidebar.html">
                              PercussionDrills
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="right-menu cat-mega-title">
                        <a href="shop-left-sidebar.html">Nail Guns</a>
                        <ul>
                          <li>
                            <a href="shop-left-sidebar.html">Air Nail Guns</a>
                          </li>
                          <li>
                            <a href="shop-left-sidebar.html">
                              Cordless Nail Guns
                            </a>
                          </li>
                          <li>
                            <a href="shop-left-sidebar.html">
                              Electric Nail Guns
                            </a>
                          </li>
                          <li>
                            <a href="shop-left-sidebar.html">Gas Nail Guns</a>
                          </li>
                        </ul>
                      </li>
                      <li className="right-menu cat-mega-title">
                        <a href="shop-left-sidebar.html">Sanders</a>
                        <ul>
                          <li>
                            <a href="shop-left-sidebar.html">
                              1/2 Sheet Sanders
                            </a>
                          </li>
                          <li>
                            <a href="shop-left-sidebar.html">
                              1/4 Sheet Sanders
                            </a>
                          </li>
                          <li>
                            <a href="shop-left-sidebar.html">Belt Sanders</a>
                          </li>
                          <li>
                            <a href="shop-left-sidebar.html">Drywall Sanders</a>
                          </li>
                        </ul>
                      </li>
                      <li className="right-menu cat-mega-title">
                        <a href="shop-left-sidebar.html">Saws</a>
                        <ul>
                          <li>
                            <a href="shop-left-sidebar.html">Circular Saws</a>
                          </li>
                          <li>
                            <a href="shop-left-sidebar.html">Jigsaws</a>
                          </li>
                          <li>
                            <a href="shop-left-sidebar.html">Mitre Saws</a>
                          </li>
                          <li>
                            <a href="shop-left-sidebar.html">
                              Reciprocating Saws
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="right-menu">
                    <a href="shop-left-sidebar.html">Suspension Systems</a>
                    <ul className="cat-mega-menu cat-mega-menu-3">
                      <li className="right-menu cat-mega-title">
                        <a href="shop-left-sidebar.html">Clothing</a>
                        <ul>
                          <li>
                            <a href="shop-left-sidebar.html">Cuisinart</a>
                          </li>
                          <li>
                            <a href="shop-left-sidebar.html">Homeinart</a>
                          </li>
                          <li>
                            <a href="shop-left-sidebar.html">
                              Kettle Stainless
                            </a>
                          </li>
                          <li>
                            <a href="shop-left-sidebar.html">Steel Stovetop</a>
                          </li>
                        </ul>
                      </li>
                      <li className="right-menu cat-mega-title">
                        <a href="shop-left-sidebar.html">Jewelry</a>
                        <ul>
                          <li>
                            <a href="shop-left-sidebar.html">Hard Anodized</a>
                          </li>
                          <li>
                            <a href="shop-left-sidebar.html">
                              Scratch Resistant
                            </a>
                          </li>
                          <li>
                            <a href="shop-left-sidebar.html">Thermo-Spot</a>
                          </li>
                          <li>
                            <a href="shop-left-sidebar.html">Ultimate</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="right-menu">
                    <a href="shop-left-sidebar.html">Turbo System</a>
                    <ul className="cat-mega-menu">
                      <li className="right-menu cat-mega-title">
                        <a href="shop-left-sidebar.html">BMW</a>
                        <ul>
                          <li>
                            <a href="shop-left-sidebar.html">Dining Chairs</a>
                          </li>
                          <li>
                            <a href="shop-left-sidebar.html">Dining Tables</a>
                          </li>
                          <li>
                            <a href="shop-left-sidebar.html">Gramophone</a>
                          </li>
                          <li>
                            <a href="shop-left-sidebar.html">Sideboards</a>
                          </li>
                        </ul>
                      </li>
                      <li className="right-menu cat-mega-title">
                        <a href="shop-left-sidebar.html">FORD</a>
                        <ul>
                          <li>
                            <a href="shop-left-sidebar.html">Chairs & Sofas</a>
                          </li>
                          <li>
                            <a href="shop-left-sidebar.html">Chest</a>
                          </li>
                          <li>
                            <a href="shop-left-sidebar.html">Loungers</a>
                          </li>
                          <li>
                            <a href="shop-left-sidebar.html">Sets</a>
                          </li>
                        </ul>
                      </li>
                      <li className="right-menu cat-mega-title">
                        <a href="shop-left-sidebar.html">POSCHER</a>
                        <ul>
                          <li>
                            <a href="shop-left-sidebar.html">Bed</a>
                          </li>
                          <li>
                            <a href="shop-left-sidebar.html">Daybed</a>
                          </li>
                          <li>
                            <a href="shop-left-sidebar.html">Futon</a>
                          </li>
                          <li>
                            <a href="shop-left-sidebar.html">Hammock</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="right-menu">
                    <a href="shop-left-sidebar.html">Oils & Fluids</a>
                    <ul className="cat-dropdown">
                      <li>
                        <a href="shop-left-sidebar.html">Daylesford</a>
                        <a href="shop-left-sidebar.html">Delaware</a>
                        <a href="shop-left-sidebar.html">Fayence</a>
                        <a href="shop-left-sidebar.html">Franzea</a>
                        <a href="shop-left-sidebar.html">Mable</a>
                        <a href="shop-left-sidebar.html">Mobo</a>
                        <a href="shop-left-sidebar.html">Pippins</a>
                      </li>
                    </ul>
                  </li>
                  <li className="right-menu">
                    <a href="shop-left-sidebar.html">Exterior</a>
                    <ul className="cat-dropdown cat-dropdown-2">
                      <li>
                        <a href="shop-left-sidebar.html">
                          Coffee & side tables
                        </a>
                        <a href="shop-left-sidebar.html">
                          Living room lighting
                        </a>
                        <a href="shop-left-sidebar.html">Living room storage</a>
                        <a href="shop-left-sidebar.html">
                          Living room textiles & rugs
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="shop-left-sidebar.html">Body Parts</a>
                  </li>
                  <li>
                    <a href="shop-left-sidebar.html">Interior</a>
                  </li>
                  <li>
                    <a href="shop-left-sidebar.html">Audio</a>
                  </li>
                  <li>
                    <a href="shop-left-sidebar.html">End Tables</a>
                  </li>
                  <li className="rx-child">
                    <a href="shop-left-sidebar.html">Uncategorized</a>
                  </li>
                  <li className="rx-child">
                    <a href="shop-left-sidebar.html">Appliances</a>
                  </li>
                  <li className="rx-parent">
                    <a className="rx-default">More Categories</a>
                    <a className="rx-show">Collapse</a>
                  </li>
                </ul>
              </div> */
}

// MAIN MAV LIST
//  <div className="container-fluid">
//    <div className="row">
//      <div className="custom-menu_col col-12 d-none d-lg-block">
//        <div className="main-menu_area position-relative">
//          <nav className="main-nav">
//            <ul>
//              <li className="dropdown-holder active">
//                <a href="index.html">Home</a>
//                <ul className="hm-dropdown">
//                  <li>
//                    <a href="index.html">Home One</a>
//                  </li>
//                  <li>
//                    <a href="index-2.html">Home Two</a>
//                  </li>
//                  <li>
//                    <a href="index-3.html">Home Three</a>
//                  </li>
//                </ul>
//              </li>
//              <li className="megamenu-holder ">
//                <a href="shop-left-sidebar.html">
//                  Shop <i className="ion-ios-arrow-down"></i>
//                </a>
//                <ul className="hm-megamenu">
//                  <li>
//                    <span className="megamenu-title">Shop Page Layout</span>
//                    <ul>
//                      <li>
//                        <a href="shop-grid-fullwidth.html">Grid Fullwidth</a>
//                      </li>
//                      <li>
//                        <a href="shop-left-sidebar.html">Left Sidebar</a>
//                      </li>
//                      <li>
//                        <a href="shop-right-sidebar.html">Right Sidebar</a>
//                      </li>
//                      <li>
//                        <a href="shop-list-fullwidth.html">List Fullwidth</a>
//                      </li>
//                      <li>
//                        <a href="shop-list-left-sidebar.html">
//                          List Left Sidebar
//                        </a>
//                      </li>
//                      <li>
//                        <a href="shop-list-right-sidebar.html">
//                          List Right Sidebar
//                        </a>
//                      </li>
//                    </ul>
//                  </li>
//                  <li>
//                    <span className="megamenu-title">Single Product Style</span>
//                    <ul>
//                      <li>
//                        <a href="single-product-gallery-left.html">
//                          Gallery Left
//                        </a>
//                      </li>
//                      <li>
//                        <a href="single-product-gallery-right.html">
//                          Gallery Right
//                        </a>
//                      </li>
//                      <li>
//                        <a href="single-product-tab-style-left.html">
//                          Tab Style Left
//                        </a>
//                      </li>
//                      <li>
//                        <a href="single-product-tab-style-right.html">
//                          Tab Style Right
//                        </a>
//                      </li>
//                      <li>
//                        <a href="single-product-sticky-left.html">Sticky Left</a>
//                      </li>
//                      <li>
//                        <a href="single-product-sticky-right.html">
//                          Sticky Right
//                        </a>
//                      </li>
//                    </ul>
//                  </li>
//                  <li>
//                    <span className="megamenu-title">Single Product Type</span>
//                    <ul>
//                      <li>
//                        <a href="single-product.html">Single Product</a>
//                      </li>
//                      <li>
//                        <a href="single-product-sale.html">
//                          Single Product Sale
//                        </a>
//                      </li>
//                      <li>
//                        <a href="single-product-group.html">
//                          Single Product Group
//                        </a>
//                      </li>
//                      <li>
//                        <a href="single-product-variable.html">
//                          Single Product Variable
//                        </a>
//                      </li>
//                      <li>
//                        <a href="single-product-affiliate.html">
//                          Single Product Affiliate
//                        </a>
//                      </li>
//                      <li>
//                        <a href="single-product-slider.html">
//                          Single Product Slider
//                        </a>
//                      </li>
//                    </ul>
//                  </li>
//                </ul>
//              </li>
//              <li>
//                <a href="javascript:void(0)">Specials</a>
//              </li>
//              <li className="">
//                <a href="javascript:void(0)">
//                  Pages <i className="ion-ios-arrow-down"></i>
//                </a>
//                <ul className="hm-dropdown">
//                  <li>
//                    <a href="my-account.html">My Account</a>
//                  </li>
//                  <li>
//                    <a href="login-register.html">Login | Register</a>
//                  </li>
//                  <li>
//                    <a href="wishlist.html">Wishlist</a>
//                  </li>
//                  <li>
//                    <a href="cart.html">Cart</a>
//                  </li>
//                  <li>
//                    <a href="checkout.html">Checkout</a>
//                  </li>
//                  <li>
//                    <a href="compare.html">Compare</a>
//                  </li>
//                  <li>
//                    <a href="faq.html">FAQ</a>
//                  </li>
//                  <li>
//                    <a href="404.html">404 Error</a>
//                  </li>
//                </ul>
//              </li>
//              <li className="">
//                <a href="about-us.html">About Us</a>
//              </li>
//              <li className="">
//                <a href="contact.html">Contact</a>
//              </li>
//              <li className="">
//                <a href="blog-left-sidebar.html">
//                  Blog <i className="ion-ios-arrow-down"></i>
//                </a>
//                <ul className="hm-dropdown">
//                  <li>
//                    <a href="blog-left-sidebar.html">Grid View</a>
//                    <ul className="hm-dropdown hm-sub_dropdown">
//                      <li>
//                        <a href="blog-2-column.html">Column Two</a>
//                      </li>
//                      <li>
//                        <a href="blog-3-column.html">Column Three</a>
//                      </li>
//                      <li>
//                        <a href="blog-left-sidebar.html">Left Sidebar</a>
//                      </li>
//                      <li>
//                        <a href="blog-right-sidebar.html">Right Sidebar</a>
//                      </li>
//                    </ul>
//                  </li>
//                  <li>
//                    <a href="blog-list-left-sidebar.html">List View</a>
//                    <ul className="hm-dropdown hm-sub_dropdown">
//                      <li>
//                        <a href="blog-list-fullwidth.html">List Fullwidth</a>
//                      </li>
//                      <li>
//                        <a href="blog-list-left-sidebar.html">
//                          List Left Sidebar
//                        </a>
//                      </li>
//                      <li>
//                        <a href="blog-list-right-sidebar.html">
//                          List Right Sidebar
//                        </a>
//                      </li>
//                    </ul>
//                  </li>
//                  <li>
//                    <a href="blog-details-left-sidebar.html">Blog Details</a>
//                    <ul className="hm-dropdown hm-sub_dropdown">
//                      <li>
//                        <a href="blog-details-left-sidebar.html">Left Sidebar</a>
//                      </li>
//                      <li>
//                        <a href="blog-details-right-sidebar.html">
//                          Right Sidebar
//                        </a>
//                      </li>
//                    </ul>
//                  </li>
//                  <li>
//                    <a href="blog-gallery-format.html">Blog Format</a>
//                    <ul className="hm-dropdown hm-sub_dropdown">
//                      <li>
//                        <a href="blog-gallery-format.html">Gallery Format</a>
//                      </li>
//                      <li>
//                        <a href="blog-audio-format.html">Audio Format</a>
//                      </li>
//                      <li>
//                        <a href="blog-video-format.html">Video Format</a>
//                      </li>
//                    </ul>
//                  </li>
//                </ul>
//              </li>
//            </ul>
//          </nav>
//        </div>
//      </div>
//      <div className="custom-setting_col col-12 d-none d-lg-block">
//        <div className="ht-right_area">
//          <div className="ht-menu">
//            <ul>
//              <li>
//                <a href="javascript:void(0)">
//                  <span>$</span> <span>Currency</span>
//                  <i className="fa fa-chevron-down"></i>
//                </a>
//                <ul className="ht-dropdown ht-currency">
//                  <li>
//                    <a href="javascript:void(0)">€ EUR</a>
//                  </li>
//                  <li className="active">
//                    <a href="javascript:void(0)">£ Pound Sterling</a>
//                  </li>
//                  <li>
//                    <a href="javascript:void(0)">$ Us Dollar</a>
//                  </li>
//                </ul>
//              </li>
//              <li>
//                <a href="javascript:void(0)">
//                  <span>
//                    <Image
//                      width="500"
//                      height="500"
//                      src="/images/menu/icon/1.jpg"
//                      alt=""
//                    />
//                  </span>
//                  <span>Language</span> <i className="fa fa-chevron-down"></i>
//                </a>
//                <ul className="ht-dropdown">
//                  <li className="active">
//                    <a href="javascript:void(0)">
//                      <Image
//                        width="400"
//                        height="400"
//                        src="/images/menu/icon/1.jpg"
//                        alt="JB's Language Icon"
//                      />
//                      English
//                    </a>
//                  </li>
//                  <li>
//                    <a href="javascript:void(0)">
//                      <Image
//                        width="400"
//                        height="400"
//                        src="/images/menu/icon/2.jpg"
//                        alt="JB's Language Icon"
//                      />
//                      Français
//                    </a>
//                  </li>
//                </ul>
//              </li>
//              <li>
//                <a href="my-account.html">
//                  <span className="fa fa-user"></span> <span>My Account</span>
//                  <i className="fa fa-chevron-down"></i>
//                </a>
//                <ul className="ht-dropdown ht-my_account">
//                  <li>
//                    <a href="javascript:void(0)">Register</a>
//                  </li>
//                  <li className="active">
//                    <a href="javascript:void(0)">Login</a>
//                  </li>
//                </ul>
//              </li>
//            </ul>
//          </div>
//        </div>
//      </div>
//      <div className="custom-search_col col-12 d-none d-md-block d-lg-none">
//        <div className="hm-form_area">
//          <form action="#" className="hm-searchbox">
//            <select className="nice-select select-search-category">
//              <option value="0">All Categories</option>
//              <option value="10">Laptops</option>
//              <option value="17">Prime Video</option>
//              <option value="20">All Videos</option>
//              <option value="21">Blouses</option>
//              <option value="22">Evening Dresses</option>
//              <option value="23">Summer Dresses</option>
//              <option value="24">T-shirts</option>
//              <option value="25">Rent or Buy</option>
//              <option value="26">Your Watchlist</option>
//              <option value="27">Watch Anywhere</option>
//              <option value="28">Getting Started</option>
//              <option value="18">Computers</option>
//              <option value="29">More to Explore</option>
//              <option value="30">TV &amp; Video</option>
//              <option value="31">Audio &amp; Theater</option>
//              <option value="32">Camera, Photo </option>
//              <option value="33">Cell Phones</option>
//              <option value="34">Headphones</option>
//              <option value="35">Video Games</option>
//              <option value="36">Wireless Speakers</option>
//              <option value="19">Electronics</option>
//              <option value="37">Amazon Home</option>
//              <option value="38">Kitchen &amp; Dining</option>
//              <option value="39">Furniture</option>
//              <option value="40">Bed &amp; Bath</option>
//              <option value="41">Appliances</option>
//              <option value="11">TV &amp; Audio</option>
//              <option value="42">Chamcham</option>
//              <option value="45">Office</option>
//              <option value="47">Gaming</option>
//              <option value="48">Chromebook</option>
//              <option value="49">Refurbished</option>
//              <option value="50">Touchscreen</option>
//              <option value="51">Ultrabooks</option>
//              <option value="52">Blouses</option>
//              <option value="43">Sanai</option>
//              <option value="53">Hard Drives</option>
//              <option value="54">Graphic Cards</option>
//              <option value="55">Processors (CPU)</option>
//              <option value="56">Memory</option>
//              <option value="57">Motherboards</option>
//              <option value="58">Fans &amp; Cooling</option>
//              <option value="59">CD/DVD Drives</option>
//              <option value="44">Meito</option>
//              <option value="60">Sound Cards</option>
//              <option value="61">Cases &amp; Towers</option>
//              <option value="62">Casual Dresses</option>
//              <option value="63">Evening Dresses</option>
//              <option value="64">T-shirts</option>
//              <option value="65">Tops</option>
//              <option value="12">Smartphone</option>
//              <option value="66">Camera Accessories</option>
//              <option value="68">Octa Core</option>
//              <option value="69">Quad Core</option>
//              <option value="70">Dual Core</option>
//              <option value="71">7.0 Screen</option>
//              <option value="72">9.0 Screen</option>
//              <option value="73">Bags &amp; Cases</option>
//              <option value="67">XailStation</option>
//              <option value="74">Batteries</option>
//              <option value="75">Microphones</option>
//              <option value="76">Stabilizers</option>
//              <option value="77">Video Tapes</option>
//              <option value="78">Memory Card Readers</option>
//              <option value="79">Tripods</option>
//              <option value="13">Cameras</option>
//              <option value="14">headphone</option>
//              <option value="15">Smartwatch</option>
//              <option value="16">Accessories</option>
//            </select>
//            <input type="text" placeholder="Enter your search key ..." />
//            <button className="header-search_btn" type="submit">
//              <i className="ion-ios-search-strong">
//                <span>Search</span>
//              </i>
//            </button>
//          </form>
//        </div>
//      </div>
//    </div>
//  </div>;
