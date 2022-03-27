import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import First from "../public/images/selected/1.png"
import Second from "../public/images/selected/2.png"
import Third from "../public/images/selected/3.png"

const Selected = () => {
  return (
    <div className="grid justify-items-center bg-gray-200 mt-10 ">
      <div className="block items-center w-2/3 mt-24 space-y-10 mb-10">
        <div className="flex justify-between items-end">
          <div className="block space-y-3">
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
              className="font-semibold"
            >
              ENJOY OUT LATEST PROJECTS
            </motion.h1>
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
              className="font-bold text-5xl"
            >
              Selected works
            </motion.h1>
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
            className="flex items-center space-x-3"
          >
            <button className="hover:bg-brand hover:rounded-full px-1 py-1">
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
                  d="M9.20711 17.2071C8.81658 17.5976 8.18342 17.5976 7.79289 17.2071L3.29289 12.7071C2.90237 12.3166 2.90237 11.6834 3.29289 11.2929L7.79289 6.79289C8.18342 6.40237 8.81658 6.40237 9.20711 6.79289C9.59763 7.18342 9.59763 7.81658 9.20711 8.20711L6.41421 11L20 11C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13L6.41421 13L9.20711 15.7929C9.59763 16.1834 9.59763 16.8166 9.20711 17.2071Z"
                  fill="#262F56"
                />
              </svg>
            </button>
            <button className="hover:bg-brand hover:rounded-full px-1 py-1">
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
                  d="M14.7929 6.79289C15.1834 6.40237 15.8166 6.40237 16.2071 6.79289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L16.2071 17.2071C15.8166 17.5976 15.1834 17.5976 14.7929 17.2071C14.4024 16.8166 14.4024 16.1834 14.7929 15.7929L17.5858 13L4 13C3.44771 13 3 12.5523 3 12C3 11.4477 3.44771 11 4 11L17.5858 11L14.7929 8.20711C14.4024 7.81658 14.4024 7.18342 14.7929 6.79289Z"
                  fill="#262F56"
                />
              </svg>
            </button>
          </motion.div>
        </div>
        <div className="flex justify-between items-center">
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
            className="block hover:bg-white hover:shadow-xl hover:scale-105 transition ease-in-out duration-200 h-2/5 w-450 rounded-md px-3 py-3"
          >
            <button>
              <Image src={First} width="390" height="440" alt="pink fur" />
            </button>
            <div className="block mt-3 space-y-2 wideDesktop:text-xl laptop:text-sm text-center">
              <button className="font-semibold hover:text-brand">
                Pink Fur Light Bulb Creative Concept
              </button>
              <h4 className="text-sm">Web Design</h4>
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
            className="block hover:bg-white hover:shadow-xl hover:scale-105 transition ease-in-out duration-200 h-2/5 w-450 rounded-md px-3 py-3"
          >
            <button>
              <Image src={Second} width="390" height="440" alt="pink fur" />
            </button>
            <div className="block mt-4 space-y-2 wideDesktop:text-xl laptop:text-sm text-center">
              <button className="font-semibold hover:text-brand">
                Minimalistic Mobile Interface
              </button>
              <h4 className="text-sm">Mobile Apps</h4>
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
            className="block hover:bg-white hover:shadow-xl hover:scale-105 transition ease-in-out duration-200 h-2/5 w-450 rounded-md px-3 py-3"
          >
            <button>
              <Image src={Third} width="390" height="440" alt="pink fur" />
            </button>
            <div className="block mt-4 space-y-2 wideDesktop:text-xl laptop:text-sm text-center">
              <button className="font-semibold hover:text-brand">
                Hardcover Book Concept
              </button>
              <h4 className="text-sm">Branding</h4>
            </div>
          </motion.div>
        </div>
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
          className="flex justify-center items-center space-x-10 mt-16"
        >
          <h1 className="text-2xl font-bold">Fallen in love with our works?</h1>
          <button className="bg-brand text-white py-3 px-3 text-sm rounded-full w-44 hover:shadow-inner hover:shadow-gray-300  transition duration-200 ease-out">
            View portfolio
          </button>
        </motion.div>
      </div>
    </div>
  )
}

export default Selected
