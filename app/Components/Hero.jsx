import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div
      className="relative flex Jmd:justify-between justify-start lg:pt-28 text-white lg:h-[100vh] py-6 px-4 Jmd:px-10 bg-cover bg-right bg-no-repeat"
      style={{
        backgroundImage: "url(/Herobg.png)",
      }}
    >
      {/* Content Section */}
      <div className="relative flex flex-col justify-end lg:justify-center gap-3 Jmd:w-[45%] SmL:w-[70%] xl:w-[40%] lg:h-[70vh] xl:mt-7 md:mt-14 mt-12 overflow-hidden ">
        {/* Heading Section */}
        <div className="relative w-full">
          <h1
            className="absolute xl:text-7xl lg:text-6xl text-3xl md:text-4xl top-0 z-10 w-fit"
            style={{ fontFamily: "Pacifico" }}
          >
            Artificial
          </h1>
          <h1
            className="relative xl:text-6xl lg:text-5xl lg:mt-20 mt-10 text-4xl bg-[#FF00EA] p-2 px-4 rounded-tl-2xl rounded-br-2xl uppercase w-fit"
            style={{ fontFamily: "Sparky Stones" }}
          >
            Intelligence
          </h1>
        </div>

        {/* Subheading and Description */}
        <h1
          className="relative xl:text-5xl lg:text-4xl text-3xl bg-white text-[#26014E] p-2 px-4 rounded-br-2xl uppercase w-fit"
          style={{ fontFamily: "Sparky Stones" }}
        >
          Courses for kids
        </h1>
        <p className="bg-[#1977FF] rounded-tr-2xl md:text-xl text-lg font-semibold px-3 py-1 w-fit">
          From kids to future scientists
        </p>
        <p className="text-base lg:text-lg">
          I am Scientist: inspiring young minds to explore AI, Machine Learning,
          Cybersecurity, and more! Join our online contests, designed for
          3rd-12th graders, to learn, compete, and win. Whether you`re a school
          or an individual student, register now to dive into the future of
          technology!
        </p>

        {/* Button and Stats Section */}
        <div className="flex flex-col lg:flex-row lg:justify-between md:self-start SmL:items-start gap-4">
          <button className="lg:text-3xl md:text-xl SmL:self-start text-lg bg-[#C407B9] px-4 py-2 rounded-bl-2xl rounded-tr-2xl border capitalize font-bold h-fit">
            Explore Now
          </button>
          <div className="relative flex md:flex-col gap-3 md:gap-0 SmL:items-start justify-center items-center">
            <Image src={"/three.png"} width={80} height={50} alt="300" />
            {/* <h2
              className="xl:text-4xl md:text-2xl text-xl text-[#2c84ff] z-10"
              style={{ fontFamily: "Neon Feel" }}
            >
              300+
            </h2> */}
            {/* <div className="absolute top-0 bg-blue-400 rounded-full opacity-50 blur-lg w-24 h-10 z-0"></div> */}
            <span className="text-center text-sm sm:text-base">
              Trusted Schools/Academies
            </span>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative hidden Jmd:flex Jmd:w-[50%] xl:w-[35%] lg:h-[70vh] xl:mt-7 md:mt-14 mt-12 justify-center items-center ">
        <Image
          className=""
          src={"/Heroimg.png"}
          width={0}
          height={0}
          alt="child"
          sizes="1000px"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </div>
  );
};

export default Hero;
