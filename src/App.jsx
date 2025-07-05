import React from "react";
import {useGSAP} from "@gsap/react"
import gsap from "gsap";
import "./index.css"

const App = () => {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(".gta-6-svg",{
      scale:15,
      opacity: 0,
      duration: .8,
      ease: "Power3.easeInOut"
    })

    tl.from(".sky",{
      opacity: 0,
      duration: .2,
      ease: "Power3.easeInOut"
    })

    tl.from(".city",{
      opacity: 0,
      duration: .2,
      ease: "Power3.easeInOut"
    })

    tl.from(".girl",{
      opacity: 0,
      y: 100,
      duration: .5,
      ease: "Power3.easeInOut"
    })

    tl.from(".nav",{
      opacity: 0,
      stagger:.2,
      y: -100,
      duration: .3,
      ease: "Power3.easeInOut"
    })

    tl.from(".heading h1",{
      opacity: 0,
      y: -100,
      duration: .6,
      ease: "Power3.easeInOut"
    })

    tl.from(".btm",{
      opacity: 0,
      duration: .2,
      ease: "Power4.easeInOut"
    })
  })
  return (
    <>
      <main className="bg-zinc-950 w-full">
      <div className="gta-6-svg bg-zinc-950 w-full h-full absolute z-100 top-0 left-0">
      <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <mask id="maskEffect">
                <rect x="0" y="0" width="100" height="100" fill="white"/>
            </mask>
        </defs>

        <text x="50" y="58"
              font-family="Pricedown, Impact, sans-serif"
              font-size="20"
              font-weight="900"
              text-anchor="middle"
              fill="white"
              mask="url(#maskEffect)">
            VI
        </text>
    </svg>
      </div>
        <div className="main-page w-full h-screen relative overflow-hidden">
          <div className="nav w-full absolute top-0  left-0 z-20 text-white py-5 px-10 flex items-center justify-between">
            <h3 className="text-3xl">rockstar</h3>
            <div className="hamburger-menu text-right">
              <div className="w-10 h-2 bg-white my-1"></div>
              <div className="w-6 h-2 bg-white my-1"></div> 
              <div className="w-3 h-2 bg-white my-1"></div>
            </div>
          </div>
          <div className="sky">
            <img
              className="w-full object-cover h-screen absolute top-0 left-0"
              src="./sky.png"
              alt=""
            />
          </div>
          <div className="city">
            <img
              className="w-full object-cover h-screen absolute top-0 left-0"
              src="./bg.png"
              alt=""
            />
          </div>
          <div className="heading text-8xl text-white absolute top-1/3 left-1/2">
            <h1 className="absolute -translate-x-60 -translate-y-40">grand</h1>
            <h1 className="absolute -translate-x-32 -translate-y-16">theft</h1>
            <h1 className="absolute -translate-x-70 translate-y-1">auto</h1>
            <h1 className="text-[30rem] absolute -translate-x-1/2 translate-y-1 tracking-[1vw]">VI</h1>
          </div>
          <div className="girl">
            <img
              className="w-full object-cover scale-[.38] absolute top-0 left-0 -translate-y-1/4"
              src="./girlbg.png"
              alt=""
            />
          </div>
          <div className="bottom-navbar w-full bg-gradient-to-t from-black to-transparent h-20 absolute bottom-0 left-0 z-10">
              <div className="btm w-[60%] h-full flex justify-between items-center px-5">
                <img className="h-12" src="./logo18.png" alt="" />
                <img className="h-15" src="./ps5.png" alt="" />
              </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default App;