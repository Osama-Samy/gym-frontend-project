import heroimage from "../assets/hero.png";
import {motion} from "framer-motion";

const Home = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-30 gap-10 md:gap-5 min-h-[calc(100vh-90px)]">
            
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="flex flex-col gap-6 max-w-lg text-center md:text-left items-center md:items-start">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">Gym Gives you the perfect Health</h1>
                <p className="text-gray-600 text-sm sm:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>
                <div className="flex gap-4 w-full justify-center md:justify-start">
                    <input className="bg-amber-400 hover:bg-[#ff8900] text-white font-bold py-2 px-6 rounded transition-colors cursor-pointer" type="button" value="Order Now" />
                    <input className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded transition-colors cursor-pointer" type="button" value="Watch Now" />
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                <img className="w-full h-auto object-contain" src={heroimage} alt="Hero Image" />
            </motion.div>

        </div>
    )
}

export default Home;