import Hero01 from "@/components/hero01";
import Hero02 from "@/components/hero02";

const Home = () => {
  return (
    <section className="section trigger01 montserratFont h-[90vh] w-full bg-bgblack flex justify-start items-center  ">
      <div className="xxs:h-[400px] md:h-[600px] w-full flex flex-col xxs:self-center lg:self-end lg:mb-10 ">
        <div className="h-[65%] w-full flex justify-between montserratFont ">
          <Hero01 />
        </div>
        <div className="bg-githubblack h-[3px] w-full"></div>
        <div className="flex  xxs:h-[20%] md:h-[15%] w-full justify-end ">
          <Hero02 />
        </div>
      </div>
    </section>
  );
};

export default Home;
