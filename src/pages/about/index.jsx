import Image from "next/image";
import Link from "next/link";
import AnimatedAbout from "@/components/animatedAbout";

const Section03 = () => {
  return (
    <>
      <section className="section h-[90vh] bg-bgblack flex justify-start items-center montserratFont text-bgwhite">
        <div className="xxs:h-[500px] md:h-[600px] w-full  ">
          <div className="xxs:h-[50%] md:h-[70%] w-full  ">
            <h1 className="font-extrabold  text-bgwhite xxs:text-3xl md:text-5xl xl:text-6xl leading-[1.1em] xxs:w-[90%] md:w-[600px]  ">
              A Self Taught Front End Developer creating dynamic web
              experiences.
            </h1>

            <div className="flex justify-center items-center h-[40px] w-[120px] mt-5 ">
              <Link
                className=" gap-1 uppercase text-sm flex justify-center items-center z-30"
                href={
                  "https://drive.google.com/file/d/1WPOsbEdz4iMalZEjsMQJOG-XJAr7LmuP/view?usp=drive_link"
                }
                target="_blank"
              >
                <h1>Resume</h1>
                <Image
                  className=""
                  src="/arrow.svg"
                  height={12}
                  width={12}
                  alt="arrow svg"
                />
              </Link>
            </div>
          </div>
          <div className="xxs:h-[50%] md:h-[30%]  w-full flex xxs:flex-col xxs:items-start sm:flex-row md:justify-start md:items-center xxs:gap-1 sm:gap-5">
            <AnimatedAbout
              title="About Me"
              para="A Front End Developer with 2 years of experience turning UI designs into fully functional websites."
              image="/about/introduction.png"
            />
            <AnimatedAbout
              title="Story"
              para="A biology student who took drop for med school found coding interesting and went all in on web development."
              image="/about/story.png"
            />
            <AnimatedAbout
              title="Skills"
              para="Really good with HTML5, CSS, TailwindCSS, and know way around JavaScript, React, NextJs, and GSAP Animations."
              image="/about/skills.png"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Section03;
