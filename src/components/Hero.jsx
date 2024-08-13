import React from "react";

export default function Hero() {
  return (
    <section className="bg-82]  text-gray-800 dark:text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-[48px] font-bold w-[80%] mx-auto">
          Explore the Possibilities of{" "}
          <span className=" health">AI Book Writing</span> with BookAI
        </h1>
        <p className="my-5 text-[18px]  w-[40%] mx-auto max-md:w-full">
          Unleash the power of AI to create captivating books in minutes.
          Download, Distribute wherever you want. Generate unlimited free books.
        </p>
        <div className="mt-6 space-x-4">
          <button className="bg-gradient-to-r  from-[#726bff] to-[#57b6fe] hover:mt-4 font-bold text-white py-[12px] px-[30px] rounded-full">
            Get Started
          </button>
          <button className="bg-gradient-to-r  from-[#726bff] to-[#57b6fe] hover:mt-4 font-bold text-white py-[12px] px-[30px] rounded-full">
            Get API Access
          </button>
        </div>

        <section class="main-content max-w-6xl group mx-auto mt-40">
          <div class="ai-demo">
            <img
              src="https://raw.githubusercontent.com/adarshagupta/trybookai/main/book2.png "
              alt="AI Book Generator"
              className=" group-hover:scale-[1.03] transition-all"
            />
          </div>
        </section>
      </div>
    </section>
  );
}
