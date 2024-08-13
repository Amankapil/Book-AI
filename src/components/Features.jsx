// src/components/Features.js
import { Download, FileCopy, Language, SmartToy } from "@mui/icons-material";
import React from "react";

export default function Features() {
  return (
    <section className="bgwhite max-w-6xl mx-auto  text-gray-800  py-12">
      <div className="container mx-auto flex items-center justify-center max-md:flex-wrap gap-6">
        {/* Repeat similar blocks for each feature */}
        <div className="text-center p-4 max-w-[280px] group hover:-mt-4 transition-all">
          <div class=" w-[60px] h-[60px] flex justify-center items-center text-2xl  mt-0 mb-5 mx-auto rounded-[50%] bg-gradient-to-r  from-[#726bff] to-[#57b6fe]">
            {/* <i class="fas fa-robot"></i> */}
            <SmartToy />
          </div>
          <div className="text-2xl font-bold">AI-Powered Writing</div>
          <p className="mt-2 font-semibold">
            Generate high-quality content using advanced AI technology.
          </p>
        </div>
        <div className="text-center p-4 max-w-[280px] hover:-mt-4 transition-all">
          <div class=" w-[60px] h-[60px] flex justify-center items-center text-2xl  mt-0 mb-5 mx-auto rounded-[50%] bg-gradient-to-r  from-[#726bff] to-[#57b6fe]">
            {/* <i class="fas fa-robot"></i> */}
            <FileCopy />
          </div>
          <div className="text-2xl font-bold">Custom Genres</div>
          <p className="mt-2 font-semibold">
            Create stories in any genre or blend multiple styles.{" "}
          </p>
        </div>
        <div className="text-center p-4 max-w-[280px] hover:-mt-4 transition-all">
          <div class=" w-[60px] h-[60px] flex justify-center items-center text-2xl  mt-0 mb-5 mx-auto rounded-[50%] bg-gradient-to-r  from-[#726bff] to-[#57b6fe]">
            {/* <i class="fas fa-robot"></i>? */}
            <Download />
          </div>
          <div className="text-2xl font-bold">Instant Download</div>
          <p className="mt-2 font-semibold">
            Get your completed book in various formats instantly.
          </p>
        </div>
        <div className="text-center p-4 max-w-[280px] hover:-mt-4 transition-all">
          <div class=" w-[60px] h-[60px] flex justify-center items-center text-2xl  mt-0 mb-5 mx-auto rounded-[50%] bg-gradient-to-r  from-[#726bff] to-[#57b6fe]">
            <Language />
          </div>

          <div className="text-2xl font-bold">Multilingual</div>
          <p className="mt-2 font-semibold">
            Generate content in multiple languages effortlessly.
          </p>
        </div>
        {/* Add more feature blocks here */}
      </div>
    </section>
  );
}
