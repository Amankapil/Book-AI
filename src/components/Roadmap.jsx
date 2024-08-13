import { AccountCircle, Draw, People, Store } from "@mui/icons-material";
import React from "react";

export default function Roadmap() {
  return (
    <section className="bg-[#ffffff06] my-20 p-10 rounded-[10px] text-gray-800 max-w-6xl mx-auto dark:text-white py-12">
      <div className="container mx-auto">
        <h2 className="text-center text-3xl font-bold mb-8">Roadmap</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="text-left flex  items-start gap-4 max-md:flex-wrap max-md:justify-center max-md:items-center">
            <div class=" w-[50px] h-[50px]  text-2xl  mt-0 mb-5 rounded-[50%] bg-gradient-to-r  from-[#726bff] to-[#57b6fe]  flex justify-center items-center">
              {/* <i class="fas fa-robot"></i> */}
              <AccountCircle />
            </div>
            <div className="max-md:justify-center max-md:items-center max-md:flex-col max-md:flex">
              <div className="text-2xl font-bold max-md:text-center">
                Advanced Character Development
              </div>
              <p className="mt-2 font-semibold max-md:text-center">
                AI-powered tool for creating deep, complex characters.
              </p>
            </div>
          </div>
          <div className="text-left flex  items-start gap-4 max-md:flex-wrap max-md:justify-center max-md:items-center">
            <div class=" w-[50px] h-[50px]  text-2xl  mt-0 mb-5 rounded-[50%] bg-gradient-to-r  from-[#726bff] to-[#57b6fe]  flex justify-center items-center">
              {/* <i class="fas fa-robot"></i> */}
              <Store />
            </div>
            <div className="max-md:justify-center max-md:items-center max-md:flex-col max-md:flex">
              <div className="text-2xl font-bold">Collaborative Writing</div>
              <p className="mt-2 font-semibold max-md:text-center">
                Co-create stories with other authors or AI assistants.
              </p>
            </div>
          </div>
          {/* Add more steps here */}
        </div>
        <div className="grid grid-cols-1 mt-10 md:grid-cols-2 gap-6">
          <div className="text-left flex  items-start gap-4 max-md:flex-wrap max-md:justify-center max-md:items-center">
            <div class=" w-[50px] h-[50px]  text-2xl  mt-0 mb-5 rounded-[50%] bg-gradient-to-r  from-[#726bff] to-[#57b6fe]  flex justify-center items-center">
              {/* <i class="fas fa-robot"></i> */}
              <People />
            </div>
            <div className="max-md:justify-center max-md:items-center max-md:flex-col max-md:flex">
              <div className="text-2xl font-bold">AI Cover Art Generation</div>
              <p className="mt-2 font-semibold max-md:text-center">
                Create stunning book covers with AI-generated art.
              </p>
            </div>
          </div>
          <div className="text-left flex  items-start gap-4 max-md:flex-wrap max-md:justify-center max-md:items-center">
            <div class=" w-[50px] h-[50px]  text-2xl  mt-0 mb-5 rounded-[50%] bg-gradient-to-r  from-[#726bff] to-[#57b6fe]  flex justify-center items-center">
              {/* <i class="fas fa-robot"></i> */}
              <Draw />
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
