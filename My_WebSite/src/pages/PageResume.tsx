import { useRef, useState } from "react";
import { Briefcase, GraduationCap, Code, Download } from "lucide-react";
import Mon_CV from "../assets/MyCV.pdf";

interface TimelineItem {
  id: number;
  type: "work" | "education" | "coding";
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  country: string;
}

const MyTimeline = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Your actual timeline data
  const timelineData: TimelineItem[] = [
    {
      id: 1,
      type: "education",
      title: "BA Business Management",
      company: "Middlesex University",
      startDate: "2012-09-01",
      endDate: "2015-06-30",
      country: "Belgium - Brussels",
    },
    {
      id: 2,
      type: "education",
      title: "German Language Studies",
      company: "University of Vienna",
      startDate: "2016-01-01",
      endDate: "2016-08-30",
      country: "Austria - Vienna",
    },
    {
      id: 3,
      type: "education",
      title: "MS International Marketing",
      company: "Hult International Business School",
      startDate: "2016-09-01",
      endDate: "2017-08-30",
      country: "United-State - Boston",
    },
    {
      id: 4,
      type: "work",
      title: "Paralegal - European Patent Validations",
      company: "Clarivate",
      startDate: "2019-01-01",
      endDate: "2021-08-31",
      country: "Belgium - Brussels",
    },
    {
      id: 5,
      type: "work",
      title: "Customer Support Representative",
      company: "Critizr",
      startDate: "2022-02-01",
      endDate: "2022-05-31",
      country: "France - Paris",
    },
    {
      id: 6,
      type: "education",
      title: "Web Development",
      company: "Le Wagon",
      startDate: "2022-10-01",
      endDate: "2022-12-31",
      country: "Belgium - Brussels",
    },
    {
      id: 7,
      type: "work",
      title: "Technical Support Specialist",
      company: "IRIS (Canon Group)",
      startDate: "2023-04-01",
      endDate: "2025-11-30",
      country: "Belgium - Brussels",
    },
    {
      id: 8,
      type: "education",
      title: "Formation Développeur Web",
      company: "Wild Code School",
      startDate: "2025-11-01",
      endDate: "2026-04-30",
      country: "Belgium - Brussels",
    },
  ];

  const getIcon = (type: TimelineItem["type"]) => {
    switch (type) {
      case "work":
        return <Briefcase className="w-5 h-5 sm:w-6 sm:h-6" />;
      case "education":
        return <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />;
      case "coding":
        return <Code className="w-5 h-5 sm:w-6 sm:h-6" />;
      default:
        return <Briefcase className="w-5 h-5 sm:w-6 sm:h-6" />;
    }
  };

  const getTypeColor = (type: TimelineItem["type"]) => {
    switch (type) {
      case "work":
        return "bg-blue-500";
      case "education":
        return "bg-purple-500";
      case "coding":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  const formatDate = (dateString: string) => {
    if (dateString === "Present") return "Present";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  };

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
    scrollContainerRef.current.style.cursor = "grabbing";
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.cursor = "grab";
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.cursor = "grab";
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  // Touch drag handlers for mobile
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging || !scrollContainerRef.current) return;
    const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-8 sm:py-12 md:py-16 px-4 sm:px-6 flex items-center justify-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14 md:mb-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3">
            My Professional Journey
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
            From {formatDate(timelineData[0].startDate)} to Today
          </p>
          <p className="text-sm sm:text-base text-gray-400 dark:text-gray-500 mt-3">
            👆 Swipe or drag to explore
          </p>
        </div>

        {/* Horizontal Timeline - Draggable */}
        <div
          ref={scrollContainerRef}
          className="relative overflow-x-auto pb-8 cursor-grab select-none [&::-webkit-scrollbar]:hidden"
          style={{
            scrollBehavior: isDragging ? "auto" : "smooth",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="inline-flex items-center min-w-full px-6 sm:px-8 md:px-12">
            {timelineData.map((item, index) => (
              <div key={item.id} className="flex items-center">
                {/* Timeline Item */}
                <div className="flex flex-col items-center min-w-48 sm:min-w-56 md:min-w-64">
                  {/* Card */}
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl dark:shadow-gray-900/50 transition-shadow duration-300 p-4 sm:p-5 md:p-6 w-44 sm:w-52 md:w-60 mb-5 sm:mb-7">
                    <div className="text-center">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-blue-600 dark:text-blue-400 font-medium mb-3 sm:mb-4">
                        {item.company}
                      </p>
                      <p className="text-xs sm:text-sm text-green-600 dark:text-green-400 font-medium mb-3 sm:mb-4">
                        {item.country}
                      </p>
                      <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 border-t dark:border-gray-700 pt-2 sm:pt-3">
                        <div>{formatDate(item.startDate)}</div>
                        <div className="text-gray-400 dark:text-gray-500">
                          to
                        </div>
                        <div>{formatDate(item.endDate)}</div>
                      </div>
                    </div>
                  </div>

                  {/* Icon */}
                  <div
                    className={`${getTypeColor(item.type)} rounded-full p-3 sm:p-4 text-white shadow-lg`}
                  >
                    {getIcon(item.type)}
                  </div>

                  {/* Year */}
                  <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-2 sm:mt-3 font-semibold">
                    {new Date(item.startDate).getFullYear()}
                  </div>
                </div>

                {/* Connecting Line */}
                {index < timelineData.length - 1 && (
                  <div className="h-1 bg-gray-300 dark:bg-gray-600 w-6 sm:w-8 md:w-12 mb-10 sm:mb-14"></div>
                )}
              </div>
            ))}

            {/* Today Marker */}
            <div className="flex items-center">
              <div className="h-1 bg-gray-300 dark:bg-gray-600 w-6 sm:w-8 md:w-12 mb-10 sm:mb-14"></div>
              <div className="flex flex-col items-center min-w-44 sm:min-w-52 md:min-w-60">
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 rounded-xl p-4 sm:p-5 md:p-6 border-2 border-blue-200 dark:border-blue-700 shadow-md dark:shadow-gray-900/50 w-44 sm:w-52 md:w-60 mb-5 sm:mb-7">
                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 dark:text-white text-center">
                    Today
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 text-center mt-2">
                    {new Date().toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                  <p className="text-xs sm:text-sm text-purple-600 dark:text-purple-400 font-medium text-center mt-2 sm:mt-3">
                    Currently at Wild Code School
                  </p>
                </div>
                <div className="bg-gradient-to-br from-blue-500 to-purple-500 rounded-full p-3 sm:p-4 text-white shadow-lg">
                  <Code className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-2 sm:mt-3 font-semibold">
                  {new Date().getFullYear()}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mt-8 sm:mt-12 md:mt-16">
          <div className="flex items-center gap-3">
            <div className="w-4 sm:w-5 h-4 sm:h-5 bg-purple-500 rounded-full"></div>
            <span className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300">
              Education
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-4 sm:w-5 h-4 sm:h-5 bg-blue-500 rounded-full"></div>
            <span className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300">
              Work Experience
            </span>
          </div>
        </div>

        {/* Download CV Button */}
        <div className="flex justify-center mt-10 sm:mt-14 md:mt-20">
          <a
            href={Mon_CV}
            download="Resume_de_Spirlet_Victor"
            className="group flex items-center gap-3 py-3 px-6 rounded-lg bg-linear-to-r from-blue-500 to-purple-500 text-white font-medium hover:from-blue-600 hover:to-purple-600 shadow-lg hover:shadow-xl transition-all"
          >
            <Download className="w-5 h-5" />
            <span>Download My CV</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyTimeline;
