import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";
import ContactLoading from "./loading";

const Section04 = () => {
  return (
    <Suspense fallback={<ContactLoading />}>
      <section className="section h-[90vh] w-full bg-bgblack  flex justify-start items-center montserratFont text-bgwhite relative">
        <div className="h-full w-full flex xxs:justify-center lg:justify-end items-center relative ">
          <div className="absolute inset-0">
            <Image
              src={"/contact bgImage.webp"}
              layout="fill"
              prop="layout"
              sizes="90vh"
              className="object-cover"
              alt="contact bg"
              priority
            />
            <div className="absolute inset-0 bg-gradient-radial"></div>
          </div>
          <div className="h-[400px] w-[300px] bg-black rounded-lg box01 flex flex-col gap-3 justify-center items-center absolute z-10">
            <h3>Saket, New Delhi</h3>
            <Link href={"mailto:vishalkirtaniyaofficial@gmail.com"}>
              <h2>vishalkirtaniyaofficial@gmail.com</h2>
            </Link>
            <Link href={"tel:+918839054275"}>
              <h2>+91 88390 54275</h2>
            </Link>
            <Link
              href={
                "https://www.linkedin.com/in/vishal-aditya-kirtaniya-618300293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              }
              target="_blank"
            >
              <div className="LinkedInContainer h-[40px] flex justify-center items-center w-[160px] bg-linkedinblue">
                <h3 className="text-base font-bold">Linkedin</h3>
              </div>
            </Link>
            <Link href={"https://github.com/vishalkirtaniya"} target="_blank">
              <div className="GitHubContainer h-[40px] w-[160px] flex justify-center items-center bg-githubblack">
                <h3 className="text-base font-bold">Github</h3>
              </div>
            </Link>
            <Link
              href={"mailto:vishalkirtaniyaofficial@gmail.com"}
              target="_blank"
            >
              <div className="InContainer h-[40px] w-[160px] flex justify-center items-center bg-bgblue">
                <h3 className="text-base font-bold">Contact Me</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </Suspense>
  );
};

export default Section04;
