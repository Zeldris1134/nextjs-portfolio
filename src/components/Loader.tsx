import React, { useEffect, useState } from "react"
import Logo from "./Logo"
import { AnimatePresence, motion } from "framer-motion"

function Loader({ isLoading, setIsLoading }: any) {
  useEffect(() => {
    setTimeout(() => {
      setIsLoading()
    }, 1900)
  }, [setIsLoading])
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="loader"
          exit={{ scale: 0 }}
          key="motiondivleave"
          transition={{
            duration: 0.45,
            ease: "easeInOut"
          }}
        >
          <motion.svg
            id="logo"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
          >
            <title>Logo</title>
            <g>
              <g id="J" transform="translate(35.000000, 35.000000)">
                <motion.path
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  exit={{
                    scale: 2
                  }}
                  fill="currentColor"
                  d="M 21.996094 2.914062 L 18.441406 2.914062 C 18.160156 2.914062 17.933594 3.144531 17.933594 3.429688 L 17.933594 18.789062 C 17.933594 20.464844 16.667969 21.925781 15.023438 21.988281 C 13.273438 22.058594 11.835938 20.652344 11.835938 18.898438 C 11.835938 18.613281 11.609375 18.382812 11.328125 18.382812 L 7.769531 18.382812 C 7.488281 18.382812 7.261719 18.621094 7.261719 18.910156 C 7.269531 22.882812 10.683594 26.117188 14.882812 26.117188 C 19.085938 26.117188 22.503906 22.878906 22.503906 18.898438 L 22.503906 3.429688 C 22.503906 3.144531 22.277344 2.914062 21.996094 2.914062 Z M 21.996094 2.914062 "
                />
              </g>
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 1,
                  ease: "easeInOut"
                }}
                exit={{
                  scale: 2
                }}
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M 50, 5
          L 11, 27
          L 11, 72
          L 50, 95
          L 89, 73
          L 89, 28 z"
              />
            </g>
          </motion.svg>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Loader
