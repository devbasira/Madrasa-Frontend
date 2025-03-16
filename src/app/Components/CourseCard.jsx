import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

export const CourseCard = ({
    type,
    title,
    description,
    bgColor,
    bgColorLight,
    onViewDetails,
}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <article className="grow font-normal transition-all duration-300 ease-in-out cursor-pointer">
            <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
                className={`${bgColor} text-[22px] text-white tracking-[0px] leading-none aspect-square pt-8 pb-12 px-8 max-md:pt-[100px] max-md:px-5 flex flex-col justify-between`}
                onClick={toggleExpand}
            >
                <div className="flex justify-between items-start">
                    <div>
                        <span className="font-bold">Type:</span> {type}
                    </div>
                    <button
                        onClick={(e) => {
                            e.stopPropagation(); // Prevent the card click event
                            toggleExpand();
                        }}
                        aria-label={isExpanded ? "Collapse course details" : "Expand course details"}
                        className="bg-white/20 rounded-full p-1 hover:bg-white/30 transition-colors"
                    >
                        {isExpanded ? (
                            <ChevronUp size={20} className="text-white" />
                        ) : (
                            <ChevronDown size={20} className="text-white" />
                        )}
                    </button>
                </div>

                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="mt-6 text-base"
                        >
                            <h4 className="text-2xl font-bold mb-4">{title} Details</h4>
                            <ul className="space-y-2 text-white/90">
                                <li>• Duration: 4 months</li>
                                <li>• Format: Online, self-paced</li>
                                <li>• Difficulty: Intermediate</li>
                                <li>• Language: English & Arabic</li>
                                <li>• Prerequisites: Basic knowledge of Islamic studies</li>
                            </ul>
                            <div className="mt-6 mb-4 flex flex-wrap gap-3">
                                <button
                                    className="bg-[rgba(0,68,203,1)] text-[#F3F3F3] font-normal text-2xl h-[45px] px-[30px] rounded-[23px] hover:bg-[rgba(0,58,173,1)] transition-colors"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    Enroll Now
                                </button>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        if (onViewDetails) onViewDetails();
                                    }}
                                    className="bg-transparent border border-[rgba(0,68,203,1)] text-white font-normal text-2xl h-[45px] px-[30px] rounded-[23px] hover:bg-white/10 transition-colors"
                                >
                                    Know more...
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
                    </motion.div>
            <div
                className={`${bgColorLight} flex flex-col items-stretch text-black pt-3 pb-[60px] px-[17px] max-md:pr-5`}
                onClick={toggleExpand}
            >
                <h3 className="text-[32px] leading-none tracking-[0px] font-bold">
                    {title}
                </h3>
                <p className="text-sm leading-5 tracking-[0.25px] mt-3.5 mb-2">
                    {description}
                </p>
            </div>
        </article>
    );
};
