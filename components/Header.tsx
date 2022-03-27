import React, { useEffect, useState } from "react"
import Image from "next/image"
import Logo from "../public/Logo.svg"
import BG from "../public/images/HeroBG.png"
import { motion } from "framer-motion"

const Header = () => {
  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10)
    })
  }, [])

  return (
    <div className="grid justify-items-center  ">
      <div>
        <Image
          src={BG}
          width="1920"
          height="1080"
          alt="hero"
          className="relative"
        />
      </div>
      <div
        className={
          scroll
            ? "flex justify-between items-center top-0 wideDesktop:w-2/3 laptop:w-4/6 fixed z-30 transition duration-200 ease-in-out bg-bgGradient px-4 rounded-b-3xl"
            : "flex justify-between items-center top-0 wideDesktop:w-2/3 laptop:w-4/6 fixed z-30  px-4 "
        }
      >
        <div className="flex items-center wideDesktop:space-x-10 laptop:space-x-6">
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Image src={Logo} width="150" height="150" alt="Logo" />
          </motion.div>
          <div className="text-white wideDesktop:text-base laptop:text-sm">
            <ul className="flex space-x-10">
              <motion.li
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <a
                  href="#"
                  className="hover:text-brand hover:font-bold focus:text-brand focus:font-bold"
                >
                  Portfolio
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <a
                  href="#"
                  className="hover:text-brand hover:font-bold focus:text-brand focus:font-bold"
                >
                  About Us
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <a
                  href="#"
                  className="hover:text-brand hover:font-bold focus:text-brand focus:font-bold"
                >
                  Blog
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <a
                  href="#"
                  className="hover:text-brand hover:font-bold focus:text-brand focus:font-bold"
                >
                  Contacts
                </a>
              </motion.li>
            </ul>
          </div>
        </div>
        <div className="">
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-brand hover:shadow-inner hover:shadow-gray-300 hover:scale-150 transition duration-200 ease-out rounded-full wideDesktop:py-4 laptop:py-2 px-4 text-white text-sm wideDesktop:w-32 laptop:w-24"
          >
            Lets Talk
          </motion.button>
        </div>
      </div>
    </div>
  )
}

export default Header
