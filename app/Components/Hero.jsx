import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div
      className="relative flex justify-evenly text-white py-10 px-4 Jmd:px-7 bg-cover bg-right bg-no-repeat"
      style={{
        backgroundImage: "url(/Herobg.png)",
      }}
    >
      {/* Content Section */}
      <div className="relative flex flex-col justify-center gap-4 pt-10 Jmd:w-[45%] SmL:w-[70%] xl:w-[40%] overflow-hidden ">
        {/* Heading Section */}
        <div className="relative w-full space-y-2 lg:mt-0 mt-10">
          <h1
            className="absolute xl:text-6xl lg:text-5xl text-4xl md:text-4xl -top-9 lg:-top-14 z-20 w-fit"
            style={{ fontFamily: "Pacifico" }}
          >
            Artificial
          </h1>
          <h1
            className="relative xl:text-6xl lg:text-4xl lg:mt-20 mt-10 text-3xl bg-[#FF00EA] p-2 px-4 rounded-tl-2xl rounded-br-2xl uppercase w-fit"
            style={{ fontFamily: "SparkyStones" }}
          >
            Intelligence
          </h1>
          {/* Subheading and Description */}
          <h1
            className="relative xl:text-4xl lg:text-3xl text-2xl bg-white text-[#26014E] p-2 px-4 rounded-br-2xl uppercase w-fit"
            style={{ fontFamily: "Sparky Stones" }}
          >
            Courses for kids
          </h1>
          <p className="bg-[#1977FF] rounded-tr-2xl md:text-xl text-base font-semibold px-3 py-1 w-fit">
            From kids to future scientists
          </p>
        </div>

        <p className="lg:text-base text-sm">
          I am Scientist: inspiring young minds to explore AI, Machine Learning,
          Cybersecurity, and more! Join our online contests, designed for
          3rd-12th graders, to learn, compete, and win. Whether you`re a school
          or an individual student, register now to dive into the future of
          technology!
        </p>

        {/* Button and Stats Section */}
        <div className="flex flex-col md:flex-row lg:justify-between md:self-start SmL:items-start gap-4">
          <button className="lg:text-lg SmL:self-start text-base bg-[#C407B9] px-4 py-2 rounded-bl-2xl rounded-tr-2xl border capitalize font-bold h-fit">
            Explore Now
          </button>
          <div className="relative flex md:flex-col gap-3 md:gap-0 SmL:items-start justify-center items-center">
            <Image src={"/three.png"} width={80} height={50} alt="300" />
            <span className="text-center text-sm">
              Trusted Schools/Academies
            </span>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative hidden Jmd:flex Jmd:w-[50%] xl:w-[35%] mt-10 justify-center ">
        <Image
          className=""
          src={"/Heroimg.png"}
          width={0}
          height={0}
          alt="child"
          sizes="1000px"
          style={{ width: "min-content", height: "auto" }}
        />
      </div>
    </div>
  );
};

export default Hero;
