import React, { useState } from "react"
import { motion } from "framer-motion"
import ReactPlayer from "react-player"
import Image from "next/image"
import HeroImage from "../public/images/Hero.png"
import Play from "../public/images/icons/play.svg"

const Hero = () => {
  const [openVideo, setOpenVideo] = useState(false)

  return (
    <div className="grid justify-items-center">
      <div
        className={
          openVideo
            ? "transition easy-in-out duration-300 visible absolute flex justify-center items-center z-30 top-0 w-full h-screen backdrop-blur-lg"
            : "transition easy-in-out duration-300 hidden"
        }
      >
        <div className="">
          <ReactPlayer
            playing={!openVideo ? false : true}
            url="https://www.youtube.com/watch?v=DoirrCfhjf0&list=PLzILpZM7fd6LD9_8knA8nahAvkBm0kTiG"
            playIcon={Play}
            playbackRate={1}
            pip={true}
          />
        </div>
        <button
          className="text-white text-4xl font-bold ml-10"
          onClick={() => setOpenVideo(false)}
        >
          X
        </button>
      </div>
      <div className="block  justify-between w-2/3 absolute top-24 space-x-10">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="block text-white space-y-6"
          >
            <div className="flex items-center space-x-4">
              <button
                className="hover:shadow-2xl hover:shadow-red-300 rounded-full relative"
                onClick={() => setOpenVideo(true)}
              >
                <span className=" animate-ping absolute inline-flex w-14 h-14 rounded-full bg-brand opacity-50 -right-0 -top-0 -left-0 "></span>
                <svg
                  width="52"
                  height="52"
                  viewBox="0 0 52 52"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="26" cy="26" r="26" fill="#F52F6E" />
                  <path
                    d="M32.5 25.134C33.1667 25.5189 33.1667 26.4811 32.5 26.866L23.5 32.0622C22.8333 32.4471 22 31.966 22 31.1962L22 20.8038C22 20.034 22.8333 19.5529 23.5 19.9378L32.5 25.134Z"
                    fill="white"
                  />
                </svg>
              </button>

              <h1>Play showreel</h1>
            </div>
            <h1 className="wideDesktop:text-6xl laptop:text-4xl font-bold leading-normal">
              Hey, we&apos;re <br />
              <span className="text-brand">CREATIVE</span>
            </h1>
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-brand hover:shadow-inner hover:shadow-gray-300 hover:scale-150 transition duration-200 ease-out rounded-full py-3 px-4 text-white text-sm wideDesktop:w-64 laptop:w-56"
            >
              View showcase
            </motion.button>
          </motion.div>
          <motion.div
            initial={{ opacity: 100, y: 40 }}
            animate={{ opacity: 100, y: 0 }}
            transition={{ yoyo: Infinity, duration: 1 }}
            className="laptop:w-96 wideDesktop:w-4/6"
          >
            <Image src={HeroImage} width="650" height="600" alt="hero" />
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-between items-end wideDesktop:text-md laptop:text-sm"
        >
          <div className="text-white">
            <h3>UX/UI</h3>
            <h3>MOBILE & WEB-TECH</h3>
            <h3>BRANDING</h3>
            <h3>SEO</h3>
          </div>
          <div className="flex space-x-2 ">
            <motion.div
              initial={{ opacity: 100, y: 10 }}
              animate={{ opacity: 100, y: -10 }}
              transition={{ yoyo: Infinity, duration: 1, delay: 1 }}
            >
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
                  d="M17.2071 14.7929C17.5976 15.1834 17.5976 15.8166 17.2071 16.2071L12.7071 20.7071C12.3166 21.0976 11.6834 21.0976 11.2929 20.7071L6.79289 16.2071C6.40237 15.8166 6.40237 15.1834 6.79289 14.7929C7.18342 14.4024 7.81658 14.4024 8.20711 14.7929L11 17.5858V4C11 3.44772 11.4477 3 12 3C12.5523 3 13 3.44772 13 4V17.5858L15.7929 14.7929C16.1834 14.4024 16.8166 14.4024 17.2071 14.7929Z"
                  fill="white"
                />
              </svg>
            </motion.div>
            <div>
              <h3 className="text-white text-sm">Scroll down</h3>
            </div>
          </div>
          <div>
            <h3 className="text-white text-sm">
              12+
              <br />
              AWARDS
            </h3>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
