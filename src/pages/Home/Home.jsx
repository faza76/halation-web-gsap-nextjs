import { useEffect, useState, useRef } from "react";
import "./Home.css";
import { Link } from "react-router";

import HeroGradient from "../../components/HeroGradient/HeroGradient";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
// import NavBar from "../../components/NavBar/NavBar";
// import Burger from "../../components/Burger/Burger";
import Cursor from "../../components/Cursor/Cursor";
//import Transition from "../../components/Transition/Transition";
import Copy from "../../components/Copy/Copy";

import { projects } from "./projects";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";
import ReactLenis from "@studio-freight/react-lenis";

import { HiArrowRight } from "react-icons/hi";
import { HiArrowDown } from "react-icons/hi";
import { RiArrowRightDownLine } from "react-icons/ri";
import { RiArrowRightUpLine } from "react-icons/ri";

const Home = () => {
  const manifestoRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  

  // useEffect(() => {
  //   const scrollTimeout = setTimeout(() => {
  //     window.scrollTo({
  //       top: 0,
  //       behavior: "instant",
  //     });
  //   }, 0);

  //   return () => clearTimeout(scrollTimeout);
  // }, []);

  // useEffect(() => {
  //   const checkMobile = () => {
  //     setIsMobile(window.innerWidth <= 900);
  //   };

  //   checkMobile();

  //   window.addEventListener("resize", checkMobile);

  //   return () => window.removeEventListener("resize", checkMobile);
  // }, []);

  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   ScrollTrigger.create({
  //     trigger: ".footer",
  //     start: "top 80%",
  //     onEnter: () => {
  //       document.querySelector(".team").classList.add("light");
  //       document.querySelector(".footer").classList.add("light");
  //       document.querySelector(".cursor").classList.add("light");
  //     },
  //     onLeaveBack: () => {
  //       document.querySelector(".team").classList.remove("light");
  //       document.querySelector(".footer").classList.remove("light");
  //       document.querySelector(".cursor").classList.remove("light");
  //     },
  //   });

  //   ScrollTrigger.create({
  //     trigger: ".processes",
  //     start: "top 80%",
  //     onEnter: () => {
  //       document.querySelector(".manifesto").classList.add("light");
  //       document.querySelector(".processes").classList.add("light");
  //       document.querySelector(".cursor").classList.add("light");
  //     },
  //     onLeaveBack: () => {
  //       document.querySelector(".manifesto").classList.remove("light");
  //       document.querySelector(".processes").classList.remove("light");
  //       document.querySelector(".cursor").classList.remove("light");
  //     },
  //   });

  //   if (!isMobile) {
  //     gsap.set(".project", { opacity: 0.35 });
  //   }

  //   if (!isMobile) {
  //     const projects = document.querySelectorAll(".project");

  //     projects.forEach((project) => {
  //       const projectImg = project.querySelector(".project-img img");

  //       project.addEventListener("mouseenter", () => {
  //         gsap.to(project, {
  //           opacity: 1,
  //           duration: 0.5,
  //           ease: "power2.out",
  //         });

  //         gsap.to(projectImg, {
  //           scale: 1.2,
  //           duration: 0.5,
  //           ease: "power2.out",
  //         });
  //       });

  //       project.addEventListener("mouseleave", () => {
  //         gsap.to(project, {
  //           opacity: 0.35,
  //           duration: 0.5,
  //           ease: "power2.out",
  //         });

  //         gsap.to(projectImg, {
  //           scale: 1,
  //           duration: 0.5,
  //           ease: "power2.out",
  //         });
  //       });
  //     });
  //   }

  //   const manifestoText = new SplitType(".manifesto-title h1", {
  //     types: ["words", "chars"],
  //     tagName: "span",
  //     wordClass: "word",
  //     charClass: "char",
  //   });

  //   const style = document.createElement("style");
  //   style.textContent = `
  //      .word {
  //        display: inline-block;
  //        margin-right: 0em;
  //      }
  //      .char {
  //        display: inline-block;
  //      }
  //    `;
  //   document.head.appendChild(style);

  //   gsap.set(manifestoText.chars, {
  //     opacity: 0.25,
  //   });

  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".manifesto",
  //       start: "top 35%",
  //       end: "bottom 75%",
  //       scrub: true,
  //       markers: false,
  //     },
  //   });

  //   manifestoText.chars.forEach((char, index) => {
  //     tl.to(
  //       char,
  //       {
  //         opacity: 1,
  //         duration: 0.1,
  //         ease: "none",
  //       },
  //       index * 0.1
  //     );
  //   });

  //   gsap.to(".marquee-text", {
  //     scrollTrigger: {
  //       trigger: ".marquee",
  //       start: "top bottom",
  //       end: "bottom top",
  //       scrub: 1,
  //       markers: false,
  //       onUpdate: (self) => {
  //         const moveAmount = self.progress * -1000;
  //         gsap.set(".marquee-text", {
  //           x: moveAmount,
  //         });
  //       },
  //     },
  //   });

  //   return () => {
  //     tl.kill();
  //     ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  //     manifestoText.revert();
  //     style.remove();
  //   };
  // }, [isMobile]);

  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   const rows = document.querySelectorAll(".row");
  //   const isMobileView = window.innerWidth <= 900;
  //   let getRatio = el => window.innerHeight / (window.innerHeight + el.offsetHeight);

  //   const divider = gsap.utils.toArray(".divider");
  //   // const showreel = document.querySelector(".video-container")
  //   const hero = document.querySelector(".canvas");

  //   const getStartX = (index) => {
  //     const direction = index % 2 === 0 ? 1 : -1;
  //     return direction * (isMobileView ? 150 : 300);
  //   };
  //   gsap.to(hero, {
  //     // backgroundPosition: () => `50% ${window.innerHeight * (1 - getRatio(showreel))}px`,
  //     translateY: "600px",
  //     // scale: 1.5,
  //     ease: "none",
  //     scrollTrigger: {
  //       trigger: hero,
  //       start: "top top",
  //       end: "bottom top",
  //       scrub: true,
  //       invalidateOnRefresh: true
  //     }
  //   });
    

    // gsap.to(showreel, {
    //   // backgroundPosition: () => `50% ${window.innerHeight * (1 - getRatio(showreel))}px`,
    //   translateY: "600px",
    //   scale: 1.5,
    //   ease: "none",
    //   scrollTrigger: {
    //     trigger: showreel,
    //     start: "top top",
    //     end: "bottom top",
    //     scrub: true,
    //     invalidateOnRefresh: true
    //   }
    // });

  //   if (rows.length > 0) {
  //     rows.forEach((row, index) => {
  //       const existingTrigger = ScrollTrigger.getAll().find(
  //         (st) => st.trigger === ".gallery" && st.vars?.targets === row
  //       );
  //       if (existingTrigger) {
  //         existingTrigger.kill();
  //       }

  //       const startX = getStartX(index);

  //       gsap.set(row, { x: startX });
  //       // gsap.set(divider, { x: "0%"});

  //       gsap.to(row, {
  //         scrollTrigger: {
  //           trigger: ".gallery",
  //           start: "top bottom",
  //           end: "bottom top",
  //           scrub: isMobileView ? 0.5 : 1,
  //           onUpdate: (self) => {
  //             const moveAmount = startX * (1 - self.progress);
  //             gsap.set(row, {
  //               x: moveAmount,
  //             });
  //           },
  //         },
  //       });

  //       divider.forEach((div) => {
  //         gsap.to(div, {
  //           scaleX: "100%",
  //           duration: 1,
  //           stagger: 0.5,
  //           ease: "power3.inOut",
  //           scrollTrigger: {
  //             trigger: div,
  //             start: "top 80%",
  //           }
  //         })
  //       });
        
  //     });
  //   }

  //   return () => {
  //     ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  //   };
  // }, [isMobile]);

  return (
    <ReactLenis root>
      
      <div className="home">
      
        
        <Cursor />
        {/* <NavBar /> */}
        <section className="hero" id="hero">
          <HeroGradient />
          <div className="header-container">
            <div className="header h-1">
              <h1>Coming Soon,</h1>
              <h1>Kakavasha Live in 2025</h1>
            </div>
            <div className="header h-2">
              <h1>Generate Ideas,</h1>
              <h1>Boundaries Broken</h1>
            </div>

            <div className="header h-4">
              <h1>Where Vision Meets,</h1>
              <h1>Limitless Design</h1>
            </div>
          </div>
        </section>

      

        
      </div>
    </ReactLenis>
  );
};

export default Home;
