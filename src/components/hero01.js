import Link from "next/link";
import Image from "next/image";

function Hero01() {
  return (
    <div className="relative w-full min-h-[65vh] flex items-center">

      {/* TEXT */}
      <div className="w-full lg:w-1/2 z-10">
        <h1 className="font-extrabold text-bgwhite text-4xl lg:text-5xl 2xl:text-6xl leading-[1.05]">
          Crafting Digital Experiences with Animation and Code
        </h1>

        <div className="mt-6 inline-flex bg-bgblue px-4 py-2">
          <Link href="/contact" className="flex items-center gap-2">
            <span className="text-bgwhite font-semibold uppercase text-sm">
              Reach Me
            </span>
            <Image
              src="/arrow.svg"
              height={16}
              width={16}
              alt="arrow"
              priority
            />
          </Link>
        </div>
      </div>

      {/* IMAGE (desktop only, controlled absolute) */}
      <div className="hidden lg:block absolute right-0 bottom-0">
        <Image
          src="/hero-image.webp"
          height={520}
          width={520}
          alt="hero"
          priority
        />
      </div>
    </div>
  );
}

export default Hero01;