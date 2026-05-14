import { motion } from "framer-motion";

const Discount = () => {
    return (
        <div className="px-6">
            <div className="bg-gray-100 py-16 px-6 md:px-20 text-center rounded-2xl shadow-lg max-w-5xl w-full mx-auto my-14 flex flex-col justify-center items-center min-h-87.5">
                <motion.h2 
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="text-3xl md:text-5xl font-bold text-gray-900"
                >
                    Special Discount for You!
                </motion.h2>
                
                <motion.p 
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                    className="text-gray-600 mt-4 text-lg md:text-xl max-w-2xl"
                >
                    Get 20% off on all our fitness programs. Limited time offer!
                </motion.p>
                
                <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8 w-full sm:w-auto">
                    <motion.input 
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.5,}}  
                        transition={{ duration: 0.2, ease: "easeOut", delay: 0.3 }}
                        className="bg-[#ff8900] hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 cursor-pointer w-full sm:w-auto shadow-md" 
                        type="button" 
                        value="Learn More"
                    />
                    
                    <motion.input 
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.2, ease: "easeOut", delay: 0.5 }}
                        className="bg-white hover:bg-gray-100 text-[#ff8900] font-bold py-3 px-8 rounded-xl transition-all duration-300 cursor-pointer border-2 border-[#ff8900] w-full sm:w-auto shadow-md" 
                        type="button" 
                        value="Stay in Touch"
                    />
                </div>
            </div>
        </div>
    )
}

export default Discount