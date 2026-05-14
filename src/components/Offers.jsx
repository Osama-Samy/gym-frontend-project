import { FaDumbbell } from "react-icons/fa";
import { GrYoga } from "react-icons/gr";
import { FiShoppingBag } from "react-icons/fi";
import { motion } from "framer-motion";

const offersData = [
    {
        id: 1,
        logo: <GrYoga />,
        title: "Yoga Equipments",
        description: "It is a long established fact that a reader readable."
    },
    {
        id: 2,
        logo: <FaDumbbell />,
        title: "Muscles Equipments",
        description: "It is a long established fact that a reader readable."
    },
    {
        id: 3,
        logo: <FiShoppingBag />,
        title: "Fitness Equipments",
        description: "It is a long established fact that a reader readable."
    }
]

const Offers = () => {
    return (
        <div className="py-12 md:py-20 bg-white">
            <div className="container mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center md:items-start gap-12">                <div className="md:w-1/3 shrink-0 text-left">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif mb-6 leading-tight text-neutral-950">What We Offer For You</h2>
                    <p className="text-neutral-500 max-w-sm">It is a long established fact that a reader will be by readable by reachable.</p>
                </div>

                <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {offersData.map((offer) => (
                        <motion.div
                            key={offer.id}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.7, ease: "easeOut", delay: offer.id * 0.2 }}
                            className="bg-neutral-50 p-6 rounded-lg shadow-inner flex flex-col items-center md:items-start text-center md:text-left h-full hover:shadow-lg transition-shadow"
                        >
                            <div className="text-4xl text-black mb-6">
                                {offer.logo}
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-neutral-900">{offer.title}</h3>
                            <p className="text-neutral-600 text-sm">{offer.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Offers;