import {
  AutoFixHigh,
  CheckCircle,
  Create,
  Margin,
  RampRight,
  Settings,
} from "@mui/icons-material";
import React from "react";

export default function HowItWorks() {
  return (
    <section className="bg-[#ffffff06]  mt-20 p-10 max-md:p-3 rounded-[10px] text-gray-800 max-w-6xl mx-auto dark:text-white py-12">
      <div className="container mx-auto">
        <h2 className="text-center text-3xl font-bold mb-8">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="text-left flex  items-start gap-4 max-md:flex-wrap max-md:justify-center max-md:items-center">
            <div class=" w-[50px] h-[50px]  text-2xl  mt-0 mb-5 rounded-[50%] bg-gradient-to-r  from-[#726bff] to-[#57b6fe] flex justify-center items-center">
              {/* <i class="fas fa-robot"></i> */}
              <AutoFixHigh />
            </div>
            <div className="max-md:justify-center max-md:items-center max-md:flex-col max-md:flex">
              <h2 className="text-2xl font-bold">Choose Your Genre</h2>
              <p className="mt-2 font-semibold max-md:text-center">
                Select from a wide range of genres or create a custom blend.{" "}
              </p>
            </div>
          </div>
          <div className="text-left flex  items-start gap-4 max-md:flex-wrap max-md:justify-center max-md:items-center">
            <div class=" w-[50px] h-[50px]  text-2xl  mt-0 mb-5 rounded-[50%] bg-gradient-to-r  from-[#726bff] to-[#57b6fe] flex justify-center items-center">
              {/* <i class="fas fa-robot"></i> */}
              <Create />
            </div>
            <div className="max-md:justify-center max-md:items-center max-md:flex-col max-md:flex">
              <div className="text-2xl font-bold">Provide Key Details</div>
              <p className="mt-2 font-semibold max-md:text-center">
                Input main characters, plot points, or themes to guide the AI.{" "}
              </p>
            </div>
          </div>
          {/* Add more steps here */}
        </div>
        <div className="grid grid-cols-1 mt-10 md:grid-cols-2 gap-6">
          <div className="text-left flex  items-start gap-4 max-md:flex-wrap max-md:justify-center max-md:items-center">
            <div class=" w-[50px] h-[50px]  text-2xl  mt-0 mb-5 rounded-[50%] bg-gradient-to-r  from-[#726bff] to-[#57b6fe] flex justify-center items-center">
              {/* <i class="fas fa-robot"></i> */}
              <Settings />
            </div>
            <div className="max-md:justify-center max-md:items-center max-md:flex-col max-md:flex">
              <div className="text-2xl font-bold">AI Generation</div>
              <p className="mt-2 font-semibold max-md:text-center">
                Our advanced AI creates your book based on your inputs.
              </p>
            </div>
          </div>
          <div className="text-left flex  items-start gap-4 max-md:flex-wrap max-md:justify-center max-md:items-center">
            <div class=" w-[50px] h-[50px]  text-2xl  mt-0 mb-5 rounded-[50%] bg-gradient-to-r  from-[#726bff] to-[#57b6fe] flex justify-center items-center">
              {/* <i class="fas fa-robot"></i> */}
              <CheckCircle />
            </div>
            <div className="max-md:justify-center max-md:items-center max-md:flex-col max-md:flex">
              <div className="text-2xl font-bold">Review and Download</div>
              <p className="mt-2 font-semibold max-md:text-center">
                Review your generated book and download in your preferred
                format.{" "}
              </p>
            </div>
          </div>
          {/* Add more steps here */}
        </div>
      </div>
    </section>
  );
}
