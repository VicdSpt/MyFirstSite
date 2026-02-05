import { Link } from "react-router";

function SectionAboutMe() {
  return (
    <section className="bg-neutral-100 py-20 dark:bg-zinc-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="flex justify-center lg:justify-start">
            <img
              className="w-64 h-64 rounded-full object-cover shadow-lg"
              src="/images/icons/Profile2.jpg"
              alt="Portrait photo"
              loading="lazy"
              width={256}
              height={256}
            />
          </div>

          {/* Right side - Text */}
          <div className="flex flex-col gap-4 leading-relaxed">
            <h2 className="text-4xl font-bold dark:text-white">About Me</h2>

            <p className="text-justify text-black dark:text-gray-300">
              After working almost 6 years as a customer support specialist, in
              different sectors and companies, I decided to change my career
              path to become a Full Stack Developer. To build a robust technical
              foundation, I completed two intensive training programs at{" "}
              <span className="font-bold">Le Wagon</span> and more recently at{" "}
              <a
                href="https://www.wildcodeschool.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#f7146b]"
              >
                Wild Code School
              </a>
              .
            </p>
            <div className="m-7 self-center">
              <Link
                to="/moreaboutme"
                className="px-6 py-3 self-center bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-400"
              >
                More About Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionAboutMe;
