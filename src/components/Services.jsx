import React, { useEffect, useState } from "react";
import "./Services.css"; // Import the custom CSS for animation
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaBook } from "react-icons/fa6";
import { PiEnvelopeSimpleDuotone } from "react-icons/pi";
import { AiTwotoneFlag } from "react-icons/ai";
import { GrMap } from "react-icons/gr";
import { HiPhoto } from "react-icons/hi2";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { SiGlassdoor } from "react-icons/si";
import { SiIndeed } from "react-icons/si";

import "aos/dist/aos.css";
import AOS from "aos";

const Services = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ["/image.jpg", "/image2.jpg", "/image3.jpg", "/image4.jpg"];

  const [showHeader, setShowHeader] = useState(false);
  const scrollThreshold = 600; // Set the scroll threshold (in pixels)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const [opacity, setOpacity] = useState(1); // Set initial opacity to 1 (fully visible)

  // Listen to scroll events
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY; // Get vertical scroll position
      const maxScroll = 200; // The point where you want it fully faded out
      const newOpacity = 1 - Math.min(scrollPosition / maxScroll, 1); // Gradually reduce opacity
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup event listener on unmount
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY; // Get vertical scroll position
      const maxScroll = 200; // The point where you want it fully faded out
      const newOpacity = 1 - Math.min(scrollPosition / maxScroll, 1); // Gradually reduce opacity
      setOpacity(newOpacity);

      // Show header if scrolled past threshold
      setShowHeader(scrollPosition > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup event listener on unmount
    };
  }, [scrollThreshold]); // Depend on scrollThreshold

  const [activeSlide, setActiveSlide] = useState(1);

  const slides = [
    {
      id: 1,
      title: "Over 33 Years of Real Estate Success",
      content:
        "We provide every one of our clients with a level of service they won’t find anywhere else. We give them what they need, often before they know they need it. ​​​​​​​In real estate, almost everything can be negotiated. When you choose Hansen Partners, its experience is 100% nonnegotiable. ​​​​​​​And it’s an experience like no other.",
      imgSrc: "/slide1.png",
      imgClass: "absolute border-2 border-red-500 w-40 h-40 -mt-40 -ml-40 ", // Class for slide 1
      imgBg: "/image7.png",
    },
    {
      id: 2,
      title: "We Want To Create An Unforgettable Experience For You...",
      content:
        "We combine data gained from your home’s Comparative Market Analysis with local market research to create a marketing plan designed to help you meet your selling goals. Your home’s carefully designed plan will include a range of online, print, and other marketing tools targeted to the best-qualified pool of buyers. ​​​​​​​ Successfully marketing a home in today’s real estate environment requires a firm with experience and flexibility. Hansen Partners provides both.",
      imgSrc: "/slide2.png",
      imgClass: "absolute border-2 border-red-500 w-40 h-40 ", // Class for slide 2 (middle)
      imgBg: "/image8.jpg",
    },
    {
      id: 3,
      title: "The Hansen Partners Communications Tablet",
      content:
        "We have created this as a wonderful tool so that we can communicate with you daily, provide you with updates on what is happening with your home. We are available at the with a click of your tablet. We believe that transparency and guiding you and your family through the process is key to having the best experience.  During these uncertain times. It is a good feeling to know you have some one with a proven track record you can count on.  We will be here to handle your needs during the Real Estate process.  We think of it before a need even arises. Because, that is just what we do.  Who you work with does matter! ",
      imgSrc: "/slide3.png",
      imgClass: "absolute border-2 border-red-500 w-40 h-40 mt-40 ml-40", // Class for slide 3
      imgBg: "/image9.jpg",
    },
  ];

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      {showHeader && (
        <header
          className="fixed top-0 left-0 right-0 flex justify-around gap-96 bg-black bg-opacity-50 text-white p-4 z-20 backdrop-blur-md transition-opacity duration-300 ease-in-out"
          data-aos="zoom-out"
        >
          <div className="border border-gray-300 text-white flex">
            <FaMagnifyingGlass className="absolute ml-1 top-1/2 transform -translate-y-1/2 text-white" />
            <h1 className="absolute top-1/2 ml-6 transform -translate-y-1/2 text-white">
              │
            </h1>
            <input
              className="px-4 py-2 h-10 w-52 bg-transparent ml-5 placeholder-gray-400 outline-none transition-all duration-300 ease-in-out transform hover:scale-95 focus:scale-95 focus:bg-transparent focus:text-white"
              type="text"
              placeholder="Search for services"
            />
          </div>

          <button className="btn bg-transparent h-10 flex justify-center items-center text-white px-6 cursor-pointer font-thin transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-white hover:text-black z-10">
            <span>Book An Appointment</span>
            <FaBook className="ml-1" />
          </button>
        </header>
      )}
      <div className="sticky top-0 h-screen overflow-hidden z-[-1] ">
        {images.map((image, index) => (
          <div
            key={index}
            className={`bg-img ${index === currentImageIndex ? "active" : ""} ${
              index === (currentImageIndex - 1 + images.length) % images.length
                ? "slide-out"
                : ""
            } ${
              index === (currentImageIndex + 1) % images.length
                ? "slide-in"
                : ""
            } relative`} // Add "relative" for positioning the overlay
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="absolute inset-0 bg-gray-900 opacity-70"></div>
          </div>
        ))}

        <div className="absolute inset-0 flex flex-col justify-center items-center z-10 text-center">
          <h1 className="text-white text-6xl tracking-widest mb-6">Services</h1>
        </div>
      </div>
      <div
        className="absolute inset-0 flex flex-col justify-center items-center z-10 text-center mt-40"
        style={{ opacity: opacity }} // Apply dynamic opacity
      >
        <button className="btn bg-transparent h-10 flex justify-center items-center text-white px-6 cursor-pointer font-thin transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-white hover:text-black z-10 mb-2">
          <span>Book An Appointment</span>
          <FaBook className="ml-1" />
        </button>
        <div className="border border-gray-300 text-white flex">
          <FaMagnifyingGlass className="absolute mt-2.5 ml-1 transform  text-white" />
          <h1 className="absolute mt-1.5 ml-6 transform  text-white">│</h1>
          <input
            className="px-4 py-2 h-10 w-52 bg-transparent ml-5 placeholder-gray-400 outline-none transition-all duration-300 ease-in-out transform hover:scale-95 focus:scale-95 focus:bg-transparent focus:text-white"
            type="text"
            placeholder="Search for services"
          />
        </div>
      </div>

      <div>
        <div className="h-screen overflow-hidden bg-white flex flex-col items-center rounded-t-3xl">
          <h1
            className="text-4xl m-20"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1200"
          >
            Comprehensive Marketing Plan
          </h1>
          <div className="flex justify-evenly w-full">
            <div className="flex flex-col items-center text-center w-1/4">
              <PiEnvelopeSimpleDuotone className="text-9xl" />
              <h1
                className="font-extrabold text-xl"
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
              >
                Responsive
              </h1>
              <p data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                I am always available via phone, text, or email.
              </p>
            </div>
            <div className="flex flex-col items-center text-center w-1/4 mt-24">
              <AiTwotoneFlag className="text-9xl" />
              <h1
                className="font-extrabold text-xl"
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
              >
                Syndication
              </h1>
              <p data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                I market your property locally, nationally, and internationally
              </p>
            </div>
            <div className="flex flex-col items-center text-center w-1/4">
              <GrMap className="text-9xl" />
              <h1
                className="font-extrabold text-xl"
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
              >
                Virutal Tour
              </h1>
              <p data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                Let's make your home stand out with a high quality virtual tour.
              </p>
            </div>
            <div className="flex flex-col items-center text-center w-1/4 mt-24">
              <HiPhoto className="text-9xl" />
              <h1
                className="font-extrabold text-xl"
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
              >
                Photography
              </h1>
              <p data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                Beatiful, high-end photography is a central part of our
                marketing plan for your property.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="h-screen w-full  bg-white flex flex-col items-center cursor-pointer">
          <div
            className="fade h-3/5 w-11/12 m-1 relative flex items-center"
            style={{
              backgroundImage: "url('/image.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            data-aos="fade-right"
          >
            <div
              className="absolute inset-0 z-10"
              style={{
                background:
                  "linear-gradient(to right, rgba(0, 0, 0, 0.9) 50%, rgba(0, 0, 0, 0))",
              }}
            />
            <div className="relative z-20 p-4 ml-52">
              <h1
                className="text-white text-3xl cursor-pointer transition-all duration-500 ease-in-out opacity-100 hover:opacity-0"
                data-aos="zoom-out"
              >
                Decor Guidance
              </h1>
              <div className="hidden-content opacity-0 invisible transition-all duration-500 ease-in-out">
                <h2 className="text-white text-2xl mb-4">
                  My Staging Expertise
                </h2>
                <ul className="text-white">
                  <li>• Unclutter and organize your home</li>
                  <li>• Neatly arrange drawers and cabinets</li>
                  <li>• Keep pets outdoors or off the premises</li>
                  <li>• Play soft music</li>
                </ul>
              </div>
            </div>
          </div>

          <div
            className="fade h-3/5 w-11/12 m-1 relative flex items-center justify-end"
            style={{
              backgroundImage: "url('/image2.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            data-aos="fade-right"
          >
            <div
              className="absolute inset-0 "
              style={{
                background:
                  "linear-gradient(to right, rgba(0, 0, 0, 0) , rgba(0, 0, 0, 0.9) 50%)",
              }}
            />
            <div className="relative z-20 p-4 mr-44">
              <h1
                className="text-white text-3xl cursor-pointer transition-all duration-500 ease-in-out opacity-100 hover:opacity-0"
                data-aos="zoom-out"
              >
                Intentional Layout
              </h1>
              <div className="hidden-content opacity-0 invisible transition-all duration-500 ease-in-out">
                <ul className="text-white">
                  <li>• Unclutter and organize your home</li>
                  <li>• Neatly arrange drawers and cabinets</li>
                  <li>• Keep pets outdoors or off the premises</li>
                  <li>• Play soft music</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="h-auto bg-white">
          <div
            className="w-full flex flex-col items-center pt-20 "
            data-aos="fade-left"
          >
            <h1 className="text-5xl mb-8" data-aos="zoom-out">
              The Selling Process
            </h1>
            <div className="w-full flex justify-end relative ">
              <div
                className="h-72 w-11/12 bg-black relative"
                style={{
                  backgroundImage: "url('/image2.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Overlay with gradient */}
                <div className="absolute inset-0 bg-gray-950 opacity-70" />
                <ul className="flex w-full h-full justify-around items-center text-white">
                  <li className="z-20 w-60 h-60 flex flex-col justify-center items-center text-center  border-r-2 hover:w-72 transition-all duration-300 ease-in-out hover:h-44">
                    <h1 className="text-6xl font-bold pb-5">1</h1>
                    <h3>Initial Consultation & Planning</h3>
                  </li>
                  <li className="z-20 w-60 h-60 flex flex-col justify-center items-center text-center  border-r-2 hover:w-72 transition-all duration-300 ease-in-out hover:h-44">
                    <h1 className="text-6xl font-bold pb-5">2</h1>
                    <h3>Devise & Execute Marketing Plan</h3>
                  </li>
                  <li className="z-20 w-60 h-60 flex flex-col justify-center items-center text-center  border-r-2 hover:w-72 transition-all duration-300 ease-in-out hover:h-44">
                    <h1 className="text-6xl font-bold pb-5">3</h1>
                    <h3>Review Offers & Reach Agreement with Buyer</h3>
                  </li>
                  <li className="z-20 w-60 h-60 flex flex-col justify-center items-center text-center  border-r-2 hover:w-72 transition-all duration-300 ease-in-out hover:h-44">
                    <h1 className="text-6xl font-bold pb-5">4</h1>
                    <h3>Complete Transaction Process</h3>
                  </li>
                  <li className="z-20 w-60 h-60 flex flex-col justify-center items-center text-center hover:w-72 transition-all duration-300 ease-in-out hover:h-44">
                    <h1 className="text-6xl font-bold pb-5">5</h1>
                    <h3>After - Sale Service</h3>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="absolute w-full h-96 z-[-1] bg-gray-200 -mt-10"></div>

          <div
            className="w-full flex flex-col items-center pt-20 "
            data-aos="fade-right"
          >
            <h1 className="text-5xl mb-8" data-aos="zoom-out">
              The Buying Process
            </h1>
            <div className="w-full flex justify-start relative">
              <div
                className="h-72 w-11/12 bg-black relative"
                style={{
                  backgroundImage: "url('/image2.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-gray-950 opacity-70" />
                <ul className="flex w-full h-full justify-around items-center text-white">
                  <li className="z-20 w-60 h-60 flex flex-col justify-center items-center text-center  border-l-2 border-r-2 hover:w-80 transition-all duration-300 ease-in-out mr-5 hover:h-44">
                    <h1 className="text-6xl font-bold pb-5">1</h1>
                    <h3>Initial Consultation & Planning</h3>
                  </li>
                  <li className="z-20 w-60 h-60 flex flex-col justify-center items-center text-center  border-l-2 border-r-2 hover:w-80 transition-all duration-300 ease-in-out mr-5 hover:h-44">
                    <h1 className="text-6xl font-bold pb-5">2</h1>
                    <h3>Devise & Execute Marketing Plan</h3>
                  </li>
                  <li className="z-20 w-60 h-60 flex flex-col justify-center items-center text-center  border-l-2 border-r-2 hover:w-80 transition-all duration-300 ease-in-out hover:h-44">
                    <h1 className="text-6xl font-bold pb-5">3</h1>
                    <h3>Review Offers & Reach Agreement with Buyer</h3>
                  </li>
                  <li className="z-20 w-60 h-60 flex flex-col justify-center items-center text-center  border-l-2 border-r-2 hover:w-80 transition-all duration-300 ease-in-out hover:h-44">
                    <h1 className="text-6xl font-bold pb-5">4</h1>
                    <h3>Complete Transaction Process</h3>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="bg-section bg-white pt-32">
          <div className="bg h-full flex justify-center items-center">
            <div className="h-3/4 w-10/12 bg-white flex">
              {/* Left Section */}
              <div className="w-2/5 h-full relative flex justify-center items-center">
                {/* Black Overlay */}
                <div className="absolute inset-0 bg-black opacity-80 z-20 pointer-events-none"></div>

                {/* Dynamic Background Image */}
                <div
                  className="absolute inset-0 transition-all duration-700 ease-in-out z-10"
                  style={{
                    backgroundImage: `url('${
                      slides.find((slide) => slide.id === activeSlide)?.imgBg
                    }')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />

                {/* Slide Images */}
                {slides.map((slide) => (
                  <img
                    key={slide.id}
                    src={slide.imgSrc}
                    alt={`slide${slide.id}`}
                    className={`${
                      slide.imgClass
                    } absolute transition-opacity duration-500 cursor-pointer ${
                      activeSlide === slide.id
                        ? "z-30 opacity-100"
                        : "opacity-50 z-10"
                    }`}
                    onClick={() => setActiveSlide(slide.id)}
                    data-aos="zoom-out"
                  />
                ))}
              </div>

              {/* Right Section */}
              <div className="h-full w-3/5 flex flex-col justify-center items-center p-5">
                {slides
                  .filter((slide) => slide.id === activeSlide)
                  .map((slide) => (
                    <div
                      key={slide.id}
                      className="text-center w-4/5"
                      data-aos="zoom-out"
                    >
                      <h1 className="text-2xl font-bold mb-2 tracking-wider">
                        {slide.title}
                      </h1>
                      <p className="text-sm tracking-widest">{slide.content}</p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="h-screen bg-white flex flex-col items-center text-center pt-20">
          <h1
            className="text-3xl font-bold mb-7 tracking-wide"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            We Market Your Home to The World
          </h1>
          <h5
            className="text-sm font-bold mb-7 tracking-wide"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            Our Online Marketing Strategy
          </h5>
          <p
            className="w-3/4 tracking-wide mb-7"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            ​​​​​​​The Bay Area remains one of the world's most sought-after
            regions to live in, and when looking to sell, it is vital that your
            home be marketed online to audiences locally, nationally, and
            internationally.
          </p>
          <div className="w-3/4 h-80 flex justify-around items-center gap-4">
            <div
              className=" p-6 ml-5 flex flex-col justify-center items-start h-full w-1/3"
              data-aos="fade-right"
            >
              <div className="relative w-full h-16 overflow-hidden">
                <video
                  autoPlay
                  loop
                  muted
                  className="absolute top-0 left-0 w-full h-full object-cover"
                >
                  <source src="/local.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" />

                <h1 className="relative font-bold text-sm text-white z-10 w-full flex justify-center mt-6">
                  Local Exposure
                </h1>
              </div>
              <p className="text-sm tracking-wide text-justify">
                Through our partnership with Nextdoor, the private online social
                network now used in over 80% of U.S. neighborhoods and virtually
                all Bay Area neighborhoods, we make sure your home receives
                targeted local exposure. When you list your home with Hansen
                Partners, it will automatically appear on Nextdoor in your
                neighborhood.
              </p>
            </div>

            <div
              className=" p-6 ml-5 flex flex-col justify-center items-start h-full w-1/3"
              data-aos="fade-up"
            >
              <div className="relative w-full h-16 overflow-hidden">
                <video
                  autoPlay
                  loop
                  muted
                  className="absolute top-0 left-0 w-full h-full object-cover"
                >
                  <source src="/national.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" />

                <h1 className="relative font-bold text-sm text-white z-10 w-full flex justify-center mt-6">
                  National Exposure
                </h1>
              </div>
              <p className="text-sm tracking-wide text-justify">
                We secure strategic positioning and enhancement on Realtor.com,
                Trulia, and Zillow, driving more consumers to your home and
                increasing exposure. We will receive every inquiry about your
                property directly.
              </p>
            </div>

            <div
              className=" p-6 ml-5 flex flex-col justify-center items-start h-full w-1/3"
              data-aos="fade-left"
            >
              <div className="relative w-full h-16 overflow-hidden">
                <video
                  autoPlay
                  loop
                  muted
                  className="absolute top-0 left-0 w-full h-full object-cover"
                >
                  <source src="/international.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" />

                <h1 className="relative font-bold text-sm text-white z-10 w-full flex justify-center mt-6">
                  International Exposure
                </h1>
              </div>
              <p className="text-sm tracking-wide text-justify">
                To expose your luxury listing to millions of potential
                homebuyers worldwide, we promote on prominent international real
                estate portals, including: Wall Street Journal,
                LuxuryPortfolio.com, LuxuryRealEstate.com, LeadingRE.com,
                UniqueHomes.com, China.apr.com, Caimeiju, Juwai, Country Life UK
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="h-9 bg-stone-600 flex justify-center ">
          <img src="/image100.png" alt="" className="w-72 m-2" />
        </div>
      </div>
      <div>
        <div className="h-screen bg-white relative">
          <div
            className="bg-clip h-full flex justify-start items-center"
            style={{
              clipPath: "polygon(0% 0%, 100% 0%, 60% 10%, 40% 100%, 0% 100%)",
            }}
          >
            <p
              className="text-white w-2/5 font-thin tracking-widest ml-10"
              data-aos="zoom-out"
            >
              JRockcliff is a founding member of Luxury Portfolio
              International®, the luxury division of Leading Real Estate
              Companies of the World®, a prestigious network of over 500 member
              firms worldwide. Through this affiliation, our luxury listings
              gain exposure to a vast global audience, reaching potential buyers
              and investors in more than 50 countries. Additionally, JRockcliff
              is part of Who's Who in Luxury Real Estate, an elite global
              collection of luxury real estate brokers, further enhancing our
              ability to connect with high-end clientele and provide
              unparalleled service in the luxury market.
            </p>
          </div>
          <div>
            <img
              src="/image20.png"
              alt=""
              className="absolute w-2/6 top-0 right-0 mt-40 mr-24 z-10"
              data-aos="zoom-out"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="h-screen bg-white -m-1 relative ">
          <div
            className="bg-clip h-full flex flex-col justify-center items-start"
            style={{
              clipPath: "polygon(0% 0%, 40% 0%, 60% 80%, 100% 100%, 0% 100%)",
            }}
          >
            <p
              className="text-white w-96 ml-10 font-thin tracking-widest mb-5"
              data-aos="zoom-out"
            >
              Through our international affiliations, we have a strong presence
              in over 50 countries. Our luxury listings are sent to prominent
              international real estate sites, reaching over 70 million
              potential buyers and investors worldwide through our relationships
              with:
            </p>
            <div className="flex justify-center w-2/4 h-40 mt-20">
              <img
                src="/image300.png"
                alt=""
                className="leading -mt-5"
                data-aos="zoom-out"
              />
              <img
                src="/image301.png"
                alt=""
                className="w-44"
                data-aos="zoom-out"
              />
              <img
                src="/image302.png"
                alt=""
                className="w-40 mt-5"
                data-aos="zoom-out"
              />
            </div>
            <p
              className="text-white w-2/5 ml-10 font-thin tracking-widest mt-10"
              data-aos="zoom-out"
            >
              We also have several well-positioned affiliate offices in China,
              providing our clients with access to buyers in Hong Kong,
              Shanghai, and Beijing.{" "}
            </p>
          </div>
          <div>
            <img
              src="/image21.png"
              alt=""
              className="absolute w-2/6 top-0 right-0 z-10 mr-10 -mt-20"
              data-aos="zoom-out"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="gb-last bg-white pb-20 flex pt-20 relative">
          <div className="w-3/6 ">
            <ul className="bg-first flex flex-col justify-center items-center text-center">
              <li className="flex flex-col items-center text-center w-2/4 -ml-32 mb-10">
                <PiEnvelopeSimpleDuotone className="text-9xl" />
                <h1 className="font-extrabold text-xl" data-aos="fade-right">
                  Responsive
                </h1>
                <p className="tracking-widest text-sm" data-aos="fade-right">
                  I am always available via phone, text, or email to answer your
                  questions in a timely manner.
                </p>
              </li>
              <li className="flex flex-col items-center text-center w-2/4 ml-96 mb-10">
                <AiTwotoneFlag className="text-9xl" />
                <h1 className="font-extrabold text-xl" data-aos="fade-left">
                  Syndication
                </h1>
                <p className="tracking-widest text-sm" data-aos="fade-left">
                  I market your property locally, nationally, and
                  internationally.
                </p>
              </li>
              <li className="flex flex-col items-center text-center w-2/4 -ml-32 mb-10">
                <GrMap className="text-9xl" />
                <h1 className="font-extrabold text-xl" data-aos="fade-right">
                  Virtual Tour
                </h1>
                <p className="tracking-widest text-sm" data-aos="fade-right">
                  Let’s make your home stand out with a high quality virtual
                  tour.
                </p>
              </li>
              <li className="flex flex-col items-center text-center w-2/4 ml-96">
                <HiPhoto className="text-9xl" />
                <h1 className="font-extrabold text-xl" data-aos="fade-left">
                  Drone Photography
                </h1>
                <p className="tracking-widest text-sm" data-aos="fade-left">
                  Beautiful photography is a central part of our marketing plan
                  for your property.
                </p>
              </li>
            </ul>
          </div>
          <div className="flex justify-center ml-96">
            <img
              src="/image500.jpg"
              alt=""
              className="image w-3/6 absolute"
              data-aos="flip-left"
            />
          </div>
        </div>
      </div>

      <div>
        <div className="bg-contact relative bg-white">
          {/* Black Overlay */}
          <div
            className="absolute inset-0 bg-black opacity-50 z-10"
            style={{
              clipPath: "polygon(0% 0%, 100% 15%, 100% 100%, 0% 85%)",
            }}
          ></div>

          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{
              clipPath: "polygon(0% 0%, 100% 15%, 100% 100%, 0% 85%)",
              backgroundImage: "url('/image2.jpg')",
            }}
          ></div>

          {/* Content */}
          <div className="relative h-3/4 flex flex-col justify-center items-center z-10">
            <h1
              className="font-bold text-5xl text-white mb-8 mt-32"
              data-aos="fade-up"
            >
              Get in touch
            </h1>
            <p
              className="font-thin tracking-widest text-white w-2/4 text-xs text-center"
              data-aos="fade-up"
            >
              With decades of experience in luxurious Tri Valley real estate,
              our team is here to ensure that your dreams are a reality. Let us
              guide you through your home buying journey, contact us today!
            </p>
            <button
              className="btn bg-transparent h-10 flex justify-center items-center text-white px-10 py-5 cursor-pointer font-thin transition-all duration-300 ease-in-out transform hover:scale-110 hover:bg-white hover:text-black z-10 mb-2 border mt-20"
              data-aos="fade-up"
            >
              <span>Contact Us</span>
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="h-72 bg-white flex pb-5">
          <div className=" w-2/4 flex justify-center items-center">
            <img src="/logo.png" alt="" className="h-80" data-aos="zoom-out" />
          </div>
          <div
            className="flex w-2/4 flex-col justify-center items-center "
            data-aos="zoom-out"
          >
            <h1 className="text-4xl tracking-wider mb-5">
              Julie Hansen Partnership
            </h1>
            <p className="w-3/4 font-raleway font-normal text-sm text-center">
              An elite group of the East Bay’s most talented and visionary real
              estate professionals believed buyers and sellers deserved more
              from their real estate company. More service. More resources. More
              integrity. More global reach. In a word, more of everything people
              should expect when they buy or sell their homes.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="h-52 bg-white relative">
          {/* Background image with overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/image2.jpg')",
            }}
          ></div>

          {/* Black overlay with opacity */}
          <div className="absolute inset-0 bg-black opacity-70"></div>

          {/* Content on top of background image */}
          <div className="relative w-full flex justify-between items-center px-10 h-full text-white">
            <div>
              <h1 className="text-2xl font-bold" data-aos="fade-up">
                Newsletter
              </h1>
              <p className="text-sm" data-aos="fade-up">
                Subscribe to our Newsletter for the latest news and updates.
                Stay tuned!
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <input
                className="px-4 py-2 h-10 w-80 bg-transparent placeholder-gray-300 outline-none transition-all duration-300 ease-in-out transform hover:scale-95 focus:scale-95 focus:bg-transparent focus:text-white border-b-2 border-white"
                type="text"
                placeholder="Email Address"
                data-aos="fade-up"
              />
              <button className="bg-transparent h-10 flex justify-center items-center text-white px-5 cursor-pointer font-thin transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-white hover:text-black border border-white">
                <span data-aos="fade-up">Subscribe</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="h-60 bg-gray-950 flex flex-col justify-center items-center text-white font-raleway">
          <div className="flex w-full justify-around items-center text-gray-300">
            <div>
              <h1 className="font-extrabold text-lg tracking-widest">
                ADDRESS
              </h1>
              <p className="text-sm tracking-widest">4733 Chabot Drive #100</p>
              <p className="text-sm tracking-widest">Pleasanton, CA 94588</p>
              <p className="text-sm tracking-widest">
                ​​​​​​​Julie Hansen-Orvis | CA DRE# 00934447
              </p>
            </div>
            <div>
              <h1 className="font-extrabold text-lg tracking-widest">
                CONTACT INFORMATION
              </h1>
              <p className="text-sm tracking-widest">(925) 553-6707</p>
              <p className="text-sm tracking-widest">
                luxuryhomesinwc@icloud.com
              </p>
            </div>
          </div>
          <div className="flex h-16 justify-evenly items-center  w-full ">
            <img src="/line.png" alt="" className="line" />
            <FaFacebookF />
            <FaLinkedinIn />
            <FaYoutube />
            <SiGlassdoor />
            <SiIndeed />
            <img src="/line.png" alt="" className="line" />
          </div>
          <h1 className="font-extrabold tracking-widest text-lg">Services</h1>
          <p className="text-xs tracking-widest">
            Website Designed & Developed by <a href="">Luxury Presence</a>
          </p>
          <p className="text-xs tracking-widest">
            Copyright 2024 | Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
