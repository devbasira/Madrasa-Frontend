
import { useState } from "react";
import { CourseCard } from "./CourseCard";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const coursesData = [
  {
    id: 1,
    type: "Long Term",
    title: "Arabic Grammar",
    description: "A comprehensive introduction to Arabic grammar, covering essential concepts for understanding and interpreting Islamic texts with proper linguistic foundation.",
    bgColor: "bg-[rgba(26,26,64,1)]",
    bgColorLight: "bg-[rgba(26,26,64,0.1)]",
    fullDescription: "Arabic grammar is the foundation of understanding the Quran and Hadith in their original language. This course builds a systematic understanding of Arabic grammar from basic to advanced levels. Students will master the core grammatical structures, learn to analyze Arabic sentences, and build vocabulary for engaging with classical texts. The focus is on developing practical skills for reading, understanding, and translating Islamic texts accurately."
  },
  {
    id: 2,
    type: "Short Term",
    title: "Hadith Studies",
    description: "Explore the foundations of Hadith studies, learn about the collection methodology, authentication processes, and their application in Islamic jurisprudence.",
    bgColor: "bg-[rgba(74,37,116,1)]",
    bgColorLight: "bg-[rgba(74,37,116,0.1)]",
    fullDescription: "Hadith studies form a critical component of Islamic scholarship. This course examines the historical development of Hadith collection, the methodology of transmission (isnad), and criteria for authentication. Students will study major Hadith collections, learn to distinguish between authentic and weak narrations, and understand how Hadith are applied in deriving Islamic rulings. Special attention is given to contemporary approaches to Hadith interpretation and their relevance to modern Muslim life."
  },
  {
    id: 3,
    type: "Long Term",
    title: "Quranic Exegesis",
    description: "An in-depth study of Quranic interpretation, covering classical and contemporary approaches to understanding the divine revelation and its timeless guidance.",
    bgColor: "bg-[rgba(26,26,64,1)]",
    bgColorLight: "bg-[rgba(26,26,64,0.1)]",
    fullDescription: "Quranic exegesis (tafsir) is the science of interpreting and understanding the meanings of the Quran. This comprehensive course explores various methodologies of tafsir, from classical to contemporary approaches. Students will study selected chapters in detail, examining linguistic features, historical context, legal rulings, and spiritual insights. The course also covers thematic interpretation and comparative analysis of major exegetical works across different Islamic traditions."
  }
];
export const PopularCourses = () => {
    const [selectedCourse, setSelectedCourse] = useState(null);
  
    const viewCourseDetails = (courseId) => {
      setSelectedCourse(courseId);
    };
  
    const closeCourseDetails = () => {
      setSelectedCourse(null);
    };
  
    const selectedCourseData = coursesData.find(course => course.id === selectedCourse);
  
    return (
      <div className="flex justify-center w-full px-4 md:px-6 lg:px-0 mb-[100px]">
        <section className="mt-[84px] max-md:mt-10 w-[1140px] max-w-full">
          <div className="w-[750px] max-w-full text-black font-normal">
            <h2 className="text-[35px] md:text-[45px] lg:text-[55px]">
              Popular/New Courses
            </h2>
            <p className="text-sm leading-5 tracking-[0.25px] mt-6 max-md:max-w-full">
              A 4 years + 2 Years foundational course exclusively for male students,
              the Basic Aalimiyyat Course introduces students to key areas of
              Islamic knowledge.
            </p>
          </div>
  
          <AnimatePresence mode='wait'>
            {selectedCourse ? (
              <motion.div
                key="details"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ type: "spring", duration: 0.4, bounce: 0 }}
                className="mt-[30px] bg-[#f3f3f3] border border-gray-200 overflow-hidden rounded-lg shadow-lg"
              >
                {/* Header */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className={`${selectedCourseData?.bgColor} px-8 py-6 flex justify-between items-center`}
                >
                  <div className="text-white">
                    <div className="text-sm font-medium mb-2">Course Type: {selectedCourseData?.type}</div>
                    <h3 className="text-3xl font-bold">{selectedCourseData?.title}</h3>
                  </div>
                  <button
                    onClick={closeCourseDetails}
                    className="bg-white/20 rounded-full p-2 hover:bg-white/30 transition-colors"
                    aria-label="Close course details"
                  >
                    <X size={24} className="text-white" />
                  </button>
                </motion.div>
  
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="p-8"
                >
                  <div className="grid grid-cols-3 gap-8 max-md:grid-cols-1">
                    <div className="col-span-2">
                      <h4 className="text-xl font-bold mb-4">Course Overview</h4>
                      <p className="text-base leading-relaxed mb-6">
                        {selectedCourseData?.fullDescription}
                      </p>
  
                      <h4 className="text-xl font-bold mb-4">Learning Outcomes</h4>
                      <ul className="list-disc pl-5 mb-6 space-y-2">
                        <li>Develop a thorough understanding of {selectedCourseData?.title}</li>
                        <li>Master core concepts and principles in this field</li>
                        <li>Apply theoretical knowledge to practical situations</li>
                        <li>Build confidence in engaging with classical Islamic texts</li>
                        <li>Contribute to contemporary Islamic discourse on this subject</li>
                      </ul>
                    </div>
  
                    <div className="bg-[#f3f3f3] p-6">
                      <h4 className="text-xl font-bold mb-4">Course Details</h4>
                      <div className="space-y-4">
                        <div className="flex justify-between border-b pb-2">
                          <span className="font-medium">Duration:</span>
                          <span>4 months</span>
                        </div>
                        <div className="flex justify-between border-b pb-2">
                          <span className="font-medium">Format:</span>
                          <span>Online, self-paced</span>
                        </div>
                        <div className="flex justify-between border-b pb-2">
                          <span className="font-medium">Difficulty:</span>
                          <span>Intermediate</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                key="cards"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ type: "spring", duration: 0.4, bounce: 0 }}
                className="mt-[30px] max-md:max-w-full"
              >
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
                  {coursesData.map((course) => (
                    <div key={course.id} className="w-[33%] max-md:w-full max-md:ml-0">
                      <CourseCard
                        {...course}
                        onViewDetails={() => viewCourseDetails(course.id)}
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      </div>
    );
  };