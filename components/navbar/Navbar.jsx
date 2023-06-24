import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import AnimatedLink from "../Others/AnimatedLink";
import { BsChevronDown } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { HiMenu } from "react-icons/hi";
import { VscClose } from "react-icons/vsc";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
const Header = () => {
  const [open, setOpen] = useState(false);
  const [navColor, setNavColor] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [searchModal, setSearchModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
  const changeNavColor = () => {
    if (window.scrollY >= 90) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }
  };
  const handleDropdownClick = () => {
    setOpen(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNavColor);
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchTerm);
  };
  return (
    <nav
      className={`w-full fixed z-20 text-[#222] py-2 md:py-0 px-1 md:px-3 xl:px-0 navbar ${
        navColor ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1296px]  relative z-10 mx-auto flex flex-wrap justify-between md:justify-around xl:justify-between items-center">
        <Link href="/">
          <a className="flex items-center pl-2 md:pl-0">
            <Image src="/logo-afthonia-negro.png" height={50} width={150} alt="Logo" />
          </a>
        </Link>

        <div
          className={` w-screen md:block md:w-auto ${
            open
              ? "block absolute -left-1  h-[92vh] bg-white z-20 top-10"
              : "hidden"
          }`}
        >
          <ul className="flex items-start mx-3 text- md:mx-0  md:px-0 md:items-center flex-col mt-4 bg-body rounded-lg md:flex-row lg:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:gap-5">
            {[
              ["/", "Home"],
              ["/service", "Services"],
              ["/pricing", "Pricing"],
              ["/contact", "Contact"],
              ["/about", "About"]
            ].map(([url, title]) => (
              <li
                className={`lg:py-[35px] ${
                  router.pathname == url && "text-[var(--color-primary)]"
                } hover:text-[var(--color-primary)] duration-200`}
                key={title}
                onClick={() => setOpen(false)}
              >
                <Link href={url}>
                  <a
                    className="block heading-6 py-2 pr-4 md:pl-3 rounded md:bg-transparent hover:text-primary md:p-0 "
                    aria-current="page"
                  >
                    {title}
                  </a>
                </Link>
              </li>
            ))}

            {/* <li
              onClick={() => setDropdown(!dropdown)}
              className="dropdown-button cursor-pointer py-2 md:py-4 lg:py-[35px]"
            >
              <a className=" flex heading-6 items-center gap-2 relative pr-4 md:pl-3 rounded md:hover:bg-transparent md:border-0 hover:text-primary md:p-0 ">
                PAGES <BsChevronDown />{" "}
              </a>
              <div className="relative">
                <div
                  className={`absolute bg-white w-40 top-4 lg:top-[35px] dropdown text-lg ${
                    dropdown ? "flex flex-col" : "hidden"
                  }`}
                >
                  {[
                    ["/seo", "SEO"],
                    ["/smm", "SMM"],
                    ["/about", "ABOUT"],
                    ["/portfolio", "PORTFOLIO"],
                  ].map(([url, title]) => (
                    <Link key={title} href={url}>
                      <a
                        onClick={handleDropdownClick}
                        className="py-2 px-4 hover:pl-5 duration-200 select-none hover:bg-orange-600 hover:text-white"
                      >
                        {title}
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            </li> */}
            <li className="py-2 md:py-4 lg:py-[35px]">
              <AnimatedLink
                link="http://localhost:3000/signup"
                name="Register"
                classes="paragraph-default w-24 h-12 flex items-center justify-center"
              />
            </li>
            <li className="py-2 md:py-4 lg:py-[35px]">
              <AnimatedLink
                link="http://localhost:3000/login"
                name="Login"
                classes="paragraph-default w-24 h-12 flex items-center justify-center bg-gray-700"
              />
            </li>
          </ul>
        </div>
        <button
          onClick={() => setOpen(!open)}
          type="button"
          className="items-center pr-2 md:pr-0 text-sm text-gray-500 rounded-lg md:hidden  "
        >
          <HiMenu className="text-[var(--color-primary)]" size={40} />
        </button>
        {/* Modal for search */}
        {searchModal && (
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ ease: "linear", duration: 0.1 }}
            className="p-10 right-0 absolute top-[98px]  bg-white duration-500 rounded-lg shadow-lg"
          >
            <h3 className="text-center text-3xl font-semibold mb-5">Search</h3>
            <form
              onSubmit={handleSubmit}
              className="flex  justify-center gap-4"
            >
              <input
                className="md:w-[400px] px-2 py-3 focus:outline-none border bg-gray-100 rounded-md"
                placeholder="Write something and hit enter to search..."
                type="text"
                onChange={(e) => setSearchTerm(e.target.value)}
                value={searchTerm}
                required
              />

              <button
                className="bg-[var(--color-primary)] px-6 py-3 rounded-md text-white hover:shadow-xl hover:shadow-[#ff52496c] duration-300"
                type="submit"
              >
                Search
              </button>
            </form>
            <div
              onClick={() => setSearchModal(!searchModal)}
              className="absolute top-3 right-3 cursor-pointer"
            >
              <VscClose size={40} />
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Header;
