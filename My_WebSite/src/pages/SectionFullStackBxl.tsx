import React from "react";

function SectionFullStackBxl() {
  return (
    <section className="py-5 relative flex flex-col dark:bg-zinc-800">
      <div className="max-w-7xl mx-auto w-full px-6 pt-30 pb-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left side - Hero content */}
          <div className="flex flex-col justify-center gap-4 lg:w-1/2">
            <h1 className="text-5xl font-bold dark:text-white">Victor de Spirlet</h1>
            <p className="text-xl font-semibold dark:text-gray-200">Fullstack Engineer in Brussels</p>
            <p className="text-lg dark:text-gray-300">Building fun stuff for people</p>
          </div>

          {/* Right side - Paragraphs */}
          <div className="flex flex-col gap-6 text-gray-700 dark:text-gray-300 leading-relaxed lg:w-1/2">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dolorem nobis iste unde natus velit! Voluptas voluptate perspiciatis incidunt dolorem optio blanditiis nisi, labore aliquid modi consequatur, totam odit id eos quod similique unde esse. Iste, dolorem deleniti magnam laudantium tempore praesentium ducimus dolorum sequi cupiditate, suscipit omnis odit repudiandae?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dolorem nobis iste unde natus velit! Voluptas voluptate perspiciatis incidunt dolorem optio blanditiis nisi, labore aliquid modi consequatur, totam odit id eos quod similique unde esse. Iste, dolorem deleniti magnam laudantium tempore praesentium ducimus dolorum sequi cupiditate, suscipit omnis odit repudiandae?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionFullStackBxl;
