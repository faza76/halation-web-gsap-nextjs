import React, { useEffect } from "react";
import "./Work.css";
import { Link } from "react-router";

import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import Cursor from "../../components/Cursor/Cursor";
// import Transition from "../../components/Transition/Transition";
import BackButton from "../../components/BackButton/BackButton";

import { ReactLenis } from "@studio-freight/react-lenis";

import { IoMdArrowForward } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";

const Work = () => {
  useEffect(() => {
    const scrollTimeout = setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
    }, 0);

    return () => clearTimeout(scrollTimeout);
  }, []);

  return (
    <ReactLenis root>
      <Cursor />
      <div className="sample-project">
        <BackButton />

        <section className="sp-title">
          <div className="container">
            <h1>Natasae Studio - Remake</h1>
          </div>
        </section>

        <section className="sp-banner">
          <img src="/work/work1.jpg" alt="" />
        </section>

        <section className="sp-details">
          <div className="container">
            <div className="sp-details-col">
              <p className="sp-details-name">Natasae Studio</p>

              <div className="sp-tags">
                <p>Website Redesign</p>
                <p>Web Development</p>
                <p>UI/UX</p>
                <p>Landing Page</p>
              </div>

              <div className="sp-date">
                <p>February 2021</p>
              </div>

              <div className="sp-link">
                <Link to="https://natasae-remake.vercel.app">
                  <button>
                    <div className="icon">
                      <IoIosArrowRoundForward size={16} />
                    </div>
                    View Project
                  </button>
                </Link>
              </div>
            </div>
            <div className="sp-details-col">
              <p>Client Story</p>
              <p>
                Natasae Studio is an architectural and interior design studio dedicated to creating flexible and functional spaces. Our work is rooted in the 'Less is More' concept, guided by innovative thinking, and shaped through close personal collaboration with every client.
              </p>
            </div>
          </div>
        </section>

        <section className="showreel">
          <VideoPlayer />
        </section>

        <section className="sp-info">
          <div className="container">
            <div className="sp-info-title">
              <h3>Client Story</h3>
            </div>

            <div className="sp-info-desc">
              <p>
                They are focus on realistic and buildable designs, we create scalable solutions that reflect quiet elegance and long-term value. Every project is an exercise in efficiency, innovation, and technical excellence with carefully selected materials.
              </p>
            </div>
          </div>
        </section>

        <section className="sp-img">
          <div className="container">
            <img src="/work/work2.jpg" alt="" />
          </div>
        </section>

        <section className="sp-info">
          <div className="container">
            <div className="sp-info-title">
              <h3>Creative Solution</h3>
            </div>

            <div className="sp-info-desc">
              <p>
                To bring Shadow Beacon to life, we focused on creating a
                seamless blend of reality and surrealism. Escapism became our
                guiding principle, leading us to juxtapose real-life moments
                with ethereal 3D landscapes. Shot on the quiet streets of
                Saigon, our Director of Photography, Ray Lavers, captured
                fleeting glimpses of reality in just two hours during
                quarantine. These grounded visuals set the stage for the
                dreamlike sequences that followed.
              </p>
            </div>
          </div>
        </section>

        <section className="sp-img">
          <div className="container">
            <img src="/work/work3.jpg" alt="" />
          </div>
        </section>

        <section className="credits">
          <div className="container">
            <h2>Credits</h2>

            <div className="credits-row">
              <div className="credits-col">
                <div className="credits-header">
                  <p>Project</p>
                </div>
                <div className="credits-copy">
                  <p>Shadow Beacon</p>
                </div>
              </div>
              <div className="credits-col">
                <div className="credits-header">
                  <p>Our Role</p>
                </div>
                <div className="credits-copy">
                  <p>
                    Motion Capture, Creative Direction, 3D Design, Atmospheric
                    Post-Production
                  </p>
                </div>
              </div>
            </div>

            <div className="divider"></div>

            <div className="credits-row">
              <div className="credits-col">
                <div className="credits-header">
                  <p>Team</p>
                </div>
              </div>
              <div className="credits-col">
                <div className="credits-header">
                  <p>Directors</p>
                </div>
                <div className="credits-copy">
                  <p>Lila Morrin (Lightforms), Kai Rivers (Lightforms)</p>
                </div>
              </div>
            </div>

            <div className="credits-row">
              <div className="credits-col"></div>
              <div className="credits-col">
                <div className="credits-header">
                  <p>Creative Producer</p>
                </div>
                <div className="credits-copy">
                  <p>Eli Dawson</p>
                </div>
              </div>
            </div>

            <div className="credits-row">
              <div className="credits-col"></div>
              <div className="credits-col">
                <div className="credits-header">
                  <p>Art Direction & Animation</p>
                </div>
                <div className="credits-copy">
                  <p>Lila Morrin (Lightforms)</p>
                </div>
              </div>
            </div>

            <div className="credits-row">
              <div className="credits-col"></div>
              <div className="credits-col">
                <div className="credits-header">
                  <p>Editing & Compositing</p>
                </div>
                <div className="credits-copy">
                  <p>Kai Rivers (Lightforms)</p>
                </div>
              </div>
            </div>

            <div className="credits-row">
              <div className="credits-col"></div>
              <div className="credits-col">
                <div className="credits-header">
                  <p>Cinematography & Color Grading</p>
                </div>
                <div className="credits-copy">
                  <p>Rhea Clarke</p>
                </div>
              </div>
            </div>

            <div className="credits-row">
              <div className="credits-col"></div>
              <div className="credits-col">
                <div className="credits-header">
                  <p>Choreography</p>
                </div>
                <div className="credits-copy">
                  <p>Juno Evers</p>
                </div>
              </div>
            </div>

            <div className="credits-row">
              <div className="credits-col"></div>
              <div className="credits-col">
                <div className="credits-header">
                  <p>Sound Design</p>
                </div>
                <div className="credits-copy">
                  <p>Echo Chamber Studios</p>
                </div>
              </div>
            </div>

            <div className="credits-row">
              <div className="credits-col"></div>
              <div className="credits-col">
                <div className="credits-header">
                  <p>Label</p>
                </div>
                <div className="credits-copy">
                  <p>Lightforms Collective</p>
                </div>
              </div>
            </div>

            <div className="credits-row">
              <div className="credits-col"></div>
              <div className="credits-col">
                <div className="credits-header">
                  <p>Acknowledgments</p>
                </div>
                <div className="credits-copy">
                  <p>Mira Solis, Adrian Wren, & Camille Trest</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="next-project">
          <div className="next-project-img">
            <img src="/projects/project4.jpg" alt="" />
          </div>

          <div className="container">
            <div className="next-project-header">
              <div className="next-project-icon">
                <h1>
                  <IoMdArrowForward />
                </h1>
              </div>
              <div className="next-project-title">
                <h1>The Machina Chronicles by Narratives Studio</h1>
              </div>
            </div>
          </div>
        </section>
      </div>
    </ReactLenis>
  );
};

export default Work;
