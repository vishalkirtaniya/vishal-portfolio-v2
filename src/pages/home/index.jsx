import Hero01 from "@/components/hero01";
import Hero02 from "@/components/hero02";

const Home = () => {
  return (
    <section className="w-full bg-bgblack flex items-center justify-center px-4 lg:px-0">
      <div className="w-full max-w-7xl flex flex-col py-10">
        
        {/* HERO 01 */}
        <Hero01 />

        {/* Divider */}
        <div className="bg-githubblack h-[2px] w-full mb-4" />

        {/* HERO 02 */}
        <div className="flex flex-col lg:flex-row justify-end gap-4">
          <Hero02 />
        </div>

      </div>
    </section>
  );
};

export default Home;