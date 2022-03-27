import React, { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Forbes from "../public/images/what/forbes-logo.png"
import Upwork from "../public/images/what/upwork-logo.png"
import Clutch from "../public/images/what/clutch-logo.png"
import Illustration from "../public/images/what/illustration.png"

const What = () => {
  const [isOpen1, setIsOpen1] = useState(false)
  const [isOpen2, setIsOpen2] = useState(false)
  const [isOpen3, setIsOpen3] = useState(false)

  return (
    <div className="grid justify-items-center ">
      <div className="block justify-between w-2/3 mt-24">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-5 text-2xl font-bold"
        >
          WHAT WE DO
        </motion.div>
        <div className="flex items-start justify-between space-x-4">
          <motion.div
            initial="hidden"
            animate={{ opacity: 0, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -50 },
            }}
            whileInView="visible"
            viewport={{ once: true }}
            className="wideDesktop:w-2/4 laptop:w-64 font-bold laptop:text-xs"
          >
            We are a full-service creative studio. We generate innovative ideas,
            purposeful content and unique visual languages to empower meaningful
            interactions with audiences, brands, products and purposes.
          </motion.div>
          <motion.div
            initial="hidden"
            animate={{ opacity: 0, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: 50 },
            }}
            whileInView="visible"
            viewport={{ once: true }}
            className="block laptop:text-sm w-32"
          >
            <h4>Highlighted in</h4>
            <Image src={Forbes} width="100" height="30" alt="forbes" />
          </motion.div>
          <motion.div
            initial="hidden"
            animate={{ opacity: 0, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: 50 },
            }}
            whileInView="visible"
            viewport={{ once: true }}
            className="block laptop:text-sm w-32"
          >
            <h4>Top rated agency</h4>
            <Image src={Upwork} width="100" height="30" alt="forbes" />
          </motion.div>
          <motion.div
            initial="hidden"
            animate={{ opacity: 0, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: 50 },
            }}
            whileInView="visible"
            viewport={{ once: true }}
            className="block laptop:text-sm w-32"
          >
            <h4>5 stars only</h4>
            <Image src={Clutch} width="100" height="30" alt="forbes" />
          </motion.div>
        </div>
      </div>
      <div className="block justify-between w-2/3 mt-44">
        <motion.div
          initial="hidden"
          animate={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: -50 },
          }}
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-5 text-2xl"
        >
          Our approach
        </motion.div>
        <motion.div
          initial="hidden"
          animate={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: -50 },
          }}
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-5 text-5xl font-bold"
        >
          That’s how we do it
        </motion.div>
        <div className="flex items-start justify-between wideDesktop:space-x-0 laptop:space-x-8">
          <motion.div
            initial="hidden"
            animate={{ opacity: 0, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 },
            }}
            whileInView="visible"
            viewport={{ once: true }}
            className="block wideDesktop:w-60  laptop:w-44 space-y-4 mt-14"
          >
            <div className="flex items-center space-x-2">
              <div>
                <button className="text-5xl font-bold text-gray-500 rounded-full z-30">
                  <span className="opacity-0 hover:opacity-50  hover:animate-ping absolute inline-flex w-14 h-14 rounded-full bg-brand  -z-5 "></span>
                  01
                </button>
              </div>
              <div>
                <svg
                  width="170"
                  height="1"
                  viewBox="0 0 209 1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="0.5"
                    y1="0.5"
                    x2="208.5"
                    y2="0.499982"
                    stroke="#D7DADD"
                    strokeLinecap="round"
                    strokeDasharray="4 4"
                  />
                </svg>
              </div>
            </div>
            <div className="block">
              <div className="font-bold mb-5">Research & Analysis</div>
              <div className="text-gray-500">
                Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam
                velit nostrud aliquip sunt.
              </div>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            animate={{ opacity: 0, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 },
            }}
            whileInView="visible"
            viewport={{ once: true }}
            className="block wideDesktop:w-60  laptop:w-44 space-y-4 mt-14"
          >
            <div className="flex items-center space-x-2">
              <div>
                <span className="opacity-0 hover:opacity-50  hover:animate-ping absolute inline-flex w-14 h-14 rounded-full bg-brand  -z-5 "></span>
                <button className="text-5xl font-bold text-gray-500">02</button>
              </div>
              <div>
                <svg
                  width="170"
                  height="1"
                  viewBox="0 0 209 1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="0.5"
                    y1="0.5"
                    x2="208.5"
                    y2="0.499982"
                    stroke="#D7DADD"
                    strokeLinecap="round"
                    strokeDasharray="4 4"
                  />
                </svg>
              </div>
            </div>
            <div className="block">
              <div className="font-bold mb-5">Prototyping</div>
              <div className="text-gray-500">
                Anim reprehenderit sint voluptate exercitation adipisicing
                laborum adipisicing. Minim ad tempor est ea.
              </div>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            animate={{ opacity: 0, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 },
            }}
            whileInView="visible"
            viewport={{ once: true }}
            className="block wideDesktop:w-60  laptop:w-44 space-y-4 mt-14"
          >
            <div className="flex items-center space-x-2">
              <div>
                <span className="opacity-0 hover:opacity-50  hover:animate-ping absolute inline-flex w-14 h-14 rounded-full bg-brand  -z-5 "></span>
                <button className="text-5xl font-bold text-gray-500">03</button>
              </div>
              <div>
                <svg
                  width="170"
                  height="1"
                  viewBox="0 0 209 1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="0.5"
                    y1="0.5"
                    x2="208.5"
                    y2="0.499982"
                    stroke="#D7DADD"
                    strokeLinecap="round"
                    strokeDasharray="4 4"
                  />
                </svg>
              </div>
            </div>
            <div className="block">
              <div className="font-bold mb-5">Pixel-perfect UI Design</div>
              <div className="text-gray-500">
                Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit
                voluptate ullamco proident ea ad.
              </div>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            animate={{ opacity: 0, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 },
            }}
            whileInView="visible"
            viewport={{ once: true }}
            className="block wideDesktop:w-60  laptop:w-44 space-y-4 mt-14"
          >
            <div className="flex items-center space-x-2">
              <div>
                <span className="opacity-0 hover:opacity-50  hover:animate-ping absolute inline-flex w-14 h-14 rounded-full bg-brand  -z-5 "></span>
                <button className="text-5xl font-bold text-gray-500 rounded-full">
                  04
                </button>
              </div>
            </div>
            <div className="block">
              <div className="font-bold mb-5">Development (Coding)</div>
              <div>
                Adipisicing esse aliqua aliquip qui amet. Aute eiusmod dolore
                dolore et ad et veniam ad deserunt.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="flex items-start justify-between w-2/3 mt-44">
        <div className="block w-96 space-y-6">
          <motion.h1
            initial="hidden"
            animate={{ opacity: 0, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -50 },
            }}
            whileInView="visible"
            viewport={{ once: true }}
            className="font-bold"
          >
            CAPABILITIES
          </motion.h1>
          <motion.h1
            initial="hidden"
            animate={{ opacity: 0, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -50 },
            }}
            whileInView="visible"
            viewport={{ once: true }}
            className="font-bold text-5xl"
          >
            Our Services
          </motion.h1>
          <motion.div
            initial="hidden"
            animate={{ opacity: 0, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -50 },
            }}
            whileInView="visible"
            viewport={{ once: true }}
            className="content mt-16 space-y-5"
          >
            <div>
              <div className="flex items-center space-x-4">
                <button onClick={() => setIsOpen1(!isOpen1)}>
                  {!isOpen1 ? (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 1C12.5523 1 13 1.44772 13 2V11H22C22.5523 11 23 11.4477 23 12C23 12.5523 22.5523 13 22 13H13V22C13 22.5523 12.5523 23 12 23C11.4477 23 11 22.5523 11 22V13H2C1.44772 13 1 12.5523 1 12C1 11.4477 1.44772 11 2 11H11V2C11 1.44772 11.4477 1 12 1Z"
                        fill="#F52F6E"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1 12C1 11.4477 1.44772 11 2 11V12V13C1.44772 13 1 12.5523 1 12ZM22 12L21.9999 13H2V12V11H21.9994L22 12ZM22 12L21.9999 13C22.5522 13 23 12.5523 23 12C23 11.4477 22.5517 11 21.9994 11L22 12Z"
                        fill="#F52F6E"
                      />
                    </svg>
                  )}
                </button>
                <h1 className="font-bold">Identity Design & Illustration</h1>
              </div>

              <p className={isOpen1 ? "visible ml-10 mt-4" : "hidden"}>
                Adipiscing nunc arcu enim elit mattis eu placerat proin.
                Imperdiet elementum faucibus dignissim purus. Fusce parturient
                diam magna ullamcorper morbi semper massa ac facilisis.
              </p>
            </div>
            <div>
              <div className="flex items-center space-x-4">
                <button onClick={() => setIsOpen2(!isOpen2)}>
                  {!isOpen2 ? (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 1C12.5523 1 13 1.44772 13 2V11H22C22.5523 11 23 11.4477 23 12C23 12.5523 22.5523 13 22 13H13V22C13 22.5523 12.5523 23 12 23C11.4477 23 11 22.5523 11 22V13H2C1.44772 13 1 12.5523 1 12C1 11.4477 1.44772 11 2 11H11V2C11 1.44772 11.4477 1 12 1Z"
                        fill="#F52F6E"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1 12C1 11.4477 1.44772 11 2 11V12V13C1.44772 13 1 12.5523 1 12ZM22 12L21.9999 13H2V12V11H21.9994L22 12ZM22 12L21.9999 13C22.5522 13 23 12.5523 23 12C23 11.4477 22.5517 11 21.9994 11L22 12Z"
                        fill="#F52F6E"
                      />
                    </svg>
                  )}
                </button>
                <h1 className="font-bold">
                  UX / UI Design Web & Mobile Design
                </h1>
              </div>

              <p className={isOpen2 ? "visible  ml-10 mt-4" : "hidden"}>
                Adipiscing nunc arcu enim elit mattis eu placerat proin.
                Imperdiet elementum faucibus dignissim purus. Fusce parturient
                diam magna ullamcorper morbi semper massa ac facilisis.
              </p>
            </div>
            <div>
              <div className="flex items-center space-x-4">
                <button onClick={() => setIsOpen3(!isOpen3)}>
                  {!isOpen3 ? (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 1C12.5523 1 13 1.44772 13 2V11H22C22.5523 11 23 11.4477 23 12C23 12.5523 22.5523 13 22 13H13V22C13 22.5523 12.5523 23 12 23C11.4477 23 11 22.5523 11 22V13H2C1.44772 13 1 12.5523 1 12C1 11.4477 1.44772 11 2 11H11V2C11 1.44772 11.4477 1 12 1Z"
                        fill="#F52F6E"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1 12C1 11.4477 1.44772 11 2 11V12V13C1.44772 13 1 12.5523 1 12ZM22 12L21.9999 13H2V12V11H21.9994L22 12ZM22 12L21.9999 13C22.5522 13 23 12.5523 23 12C23 11.4477 22.5517 11 21.9994 11L22 12Z"
                        fill="#F52F6E"
                      />
                    </svg>
                  )}
                </button>
                <h1 className="font-bold">Photography & Video Production</h1>
              </div>

              <p className={isOpen3 ? "visible ml-10 mt-4" : "hidden"}>
                Adipiscing nunc arcu enim elit mattis eu placerat proin.
                Imperdiet elementum faucibus dignissim purus. Fusce parturient
                diam magna ullamcorper morbi semper massa ac facilisis.
              </p>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial="hidden"
          animate={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: 50 },
          }}
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Image
            src={Illustration}
            width="630"
            height="392"
            alt="illustration"
          />
        </motion.div>
      </div>
    </div>
  )
}

export default What
