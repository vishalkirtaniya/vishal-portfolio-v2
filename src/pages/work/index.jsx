import Card from "@/components/card.js";
import { Suspense } from "react";
import { WorkLoading } from "@/components/skeleton";

const Section02 = () => {
  return (
    <Suspense fallback={<WorkLoading />}>
      <section className="section h-[90vh]  bg-bgblack flex justify-start items-center montserratFont text-bgwhite">
        <div className="h-[600px] w-full  flex flex-col justify-center items-center">
          <h1 className="font-bold xxs:text-lg sm:text-xl lg:text-3xl">Work</h1>
          <div className="h-[400px] w-full flex justify-evenly items-center">
            <Card />
          </div>
        </div>
      </section>
    </Suspense>
  );
};

export default Section02;
