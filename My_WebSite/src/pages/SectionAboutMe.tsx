import React from "react";
import Profile from "../images/Profile.png";

function SectionAboutMe() {
  return (
    <section className="bg-neutral-100 py-20 dark:bg-zinc-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="flex justify-center lg:justify-start">
            <img
              className="w-64 h-64 rounded-full object-cover shadow-lg"
              src={Profile}
              alt="Profile"
            />
          </div>

          {/* Right side - Text */}
          <div className="flex flex-col gap-4 leading-relaxed">
            <h2 className="text-4xl font-bold dark:text-white">About Me</h2>
            <p className="text-lg font-semibold dark:text-gray-200">
              This is me
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              dolorem nobis iste unde natus velit! Voluptas voluptate
              perspiciatis incidunt dolorem optio blanditiis nisi, labore
              aliquid modi consequatur, totam odit id eos quod similique unde
              esse. Iste, dolorem deleniti magnam laudantium tempore praesentium
              ducimus dolorum sequi cupiditate, suscipit omnis odit repudiandae?
            </p>
            <button className="self-center bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-xl shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all cursor-pointer">
              More about Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionAboutMe;
