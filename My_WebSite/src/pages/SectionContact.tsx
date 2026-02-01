import { Link } from "react-router";

function SectionContact() {
  return (
    <section className="bg-neutral-100 py-20 sm:py-16 md:py-20 dark:bg-zinc-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-6 sm:gap-8">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold dark:text-white">
              Want to work together ?
            </h2>
            <p className="text-sm sm:text-base md:text-lg font-semibold dark:text-gray-200 mt-2">
              Let's build something great and fun !
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-xl shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all cursor-pointer"
          >
            <img src="/images/icons/Phone.svg" alt="Phone icon" aria-hidden="true" />
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}

export default SectionContact;

