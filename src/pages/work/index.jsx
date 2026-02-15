import Card from "@/components/card";
import { Suspense } from "react";
import { WorkLoading } from "@/components/skeleton";

const Section02 = () => {
  return (
    <Suspense fallback={<WorkLoading />}>
      <section className="section bg-bgblack montserratFont text-bgwhite py-20">
        <div className="w-full max-w-4xl mx-auto px-6">
          <h1 className="font-bold text-lg sm:text-xl lg:text-3xl mb-12 text-center">
            Work
          </h1>

          <Card />
        </div>
      </section>
    </Suspense>
  );
};

export default Section02;