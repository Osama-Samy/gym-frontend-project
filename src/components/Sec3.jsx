import sec31 from "../assets/img-11.jpg"
import { motion } from "framer-motion";

const Sec3 = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-30 gap-10 md:gap-10 min-h-[calc(100vh-90px)] bg-gray-50 mx-3 md:mx-20">
            <div className="w-full md:w-1/2">
                <motion.img
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full h-110 rounded-lg "
                    src={sec31}
                    alt="sec3 image"
                />
            </div>
            <div className="w-full md:w-1/2 space-y-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="text-3xl md:text-5xl font-bold text-gray-900"
                >
                    Why us
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                    className="text-gray-600"
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio minus nisi cumque ad corrupti laborum labore voluptates aperiam blanditiis voluptatibus expedita velit non pariatur enim molestias natus illo aspernatur aperiam blanditiis voluptatibus expedita velit non pariatur enim molestias natus illo aspernatur aperiam blanditiis voluptatibus expedita velit non pariatur enim molestias natus illo aspernatur aperiam blanditiis voluptatibus expedita velit non pariatur enim molestias natus illo
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                    className="text-gray-600"
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio minus nisi cumque ad corrupti laborum labore voluptates aperiam blanditiis voluptatibus expedita velit non pariatur enim molestias natus illo aspernatur aperiam blanditiis
                </motion.p>
                <motion.input
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
                    className="bg-amber-400 hover:bg-[#ff8900] text-white font-bold py-2 px-6 rounded transition-colors cursor-pointer"
                    type="button"
                    value="Explore More"
                />
            </div>
        </div>
    );
};

export default Sec3;