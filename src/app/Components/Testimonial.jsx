import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Rows } from "./HomePage";

const testimonials = [
    {
        id: 1,
        image: "/Pic.png",
        text: "This platform has completely transformed the way I learn and grow in my field. The structured guidance and resources have given me newfound confidence in my knowledge.",
        name: "Munaf Abdul Majeed (Businessman)",
    },
    {
        id: 2,
        image: "/Pic.png",
        text: "I've gained not only knowledge but also a deeper understanding of key concepts that were previously unclear. The learning experience here is truly exceptional.",
        name: "Nouman Ali Khan (Scholar)",
    },
    {
        id: 3,
        image: "/Pic.png",
        text: "A truly enlightening journey that has provided me with immense clarity and insight. The resources and guidance have been invaluable in shaping my perspective.",
        name: "Umar Suleiman (Counsellor)",
    },
];

export function Testimonial() {
    const [index, setIndex] = useState(0);

    const nextTestimonial = () => {
        setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="flex justify-center w-full h-full px-4 md:px-6 lg:px-0">
            <div className="w-full lg:w-[1140px] h-full flex justify-around sm:justify-between flex-col">
                <div className="text-[35px] md:text-[45px] lg:text-[55px] tracking-[-0.25px]">
                    Testimonial
                </div>
                <Rows />
                <div
                    style={{ backgroundColor: "#F3F3F3" }}
                    className="rounded-tl-[100px] p-4 lg:px-[40px] lg:py-[20px] min-h-[270px] flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4"
                >
                    <div className="w-[180px] h-[180px] md:w-[200px] md:h-[200px] lg:w-[200px] lg:h-[200px] bg-blue-200 rounded-full flex items-center justify-center overflow-hidden aspect-square">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={testimonials[index].id}
                                src={testimonials[index].image}
                                alt="Testimonial"
                                className="w-full h-full object-cover"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                            />
                        </AnimatePresence>
                    </div>
                    <div className="w-full md:w-[594px] h-[150px] flex flex-col items-center justify-around text-center px-4">
                        <AnimatePresence mode="wait">
                            <motion.p
                                key={testimonials[index].id}
                                className="w-full text-start text-black font-normal text-md md:text-lg lg:text-lg"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                            >
                                {testimonials[index].text}
                            </motion.p>
                        </AnimatePresence>
                        <AnimatePresence className="" mode="wait">
                            <motion.div
                                key={testimonials[index].id}
                                className="text-white lg:mt-0 md:mt-0 mt-2 w-full text-[#696969] lg:text-xl md:text-xl text-lg font-semibold text-start "
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                            >
                                {testimonials[index].name}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="lg:w-[120px] md:w-[120px] w-full gap-[10px] flex justify-end lg:justify-center md:justify-center items-end md:items-end h-full md:h-[40px] lg:h-40 lg:mt-0 md:mt-0 mt-4">


                        <button
                            onClick={prevTestimonial}
                            className="w-[30px] h-[30px] md:w-[45px] md:h-[45px] bg-[#0044CB] rounded-full flex items-center justify-center text-white text-xl"
                        >
                            ‹
                        </button>

                        <button
                            onClick={nextTestimonial}
                            className="w-[30px] h-[30px] md:w-[45px] md:h-[45px] bg-[#0044CB] rounded-full flex items-center justify-center text-white text-xl"
                        >
                            ›
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
