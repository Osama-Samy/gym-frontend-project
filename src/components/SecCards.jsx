import { useState } from "react";
import img1 from "../assets/img-1.jpg";
import img2 from "../assets/img-2.jpg";
import img3 from "../assets/img-3.jpg";
import img4 from "../assets/img-4.jpg";
import img5 from "../assets/img-5.jpg";
import img6 from "../assets/img-6.jpg";


const dataImages = [
    { id: 1, image: img1, title: "Personal Training", type: "Fitness" },
    { id: 2, image: img3, title: "Strength Training", type: "Muscles" },
    { id: 3, image: img4, title: "Body building", type: "Muscles" },
    { id: 4, image: img5, title: "Body building", type: "Muscles" },
    { id: 5, image: img2, title: "Cardio Training", type: "Fitness" },
    { id: 6, image: img6, title: "Power Yoga", type: "Yoga" }
];

const categories = ["All", "Yoga", "Muscles", "Fitness"];

const SecCards = () => {
    const [activeTab, setActiveTab] = useState("All");

    const filteredImages = activeTab === "All" 
        ? dataImages 
        : dataImages.filter(item => item.type === activeTab);

    return (
        <div className="flex flex-col md:flex-col justify-center items-start gap-10 p-6 md:px-30">
            <div className="flex flex-col md:flex-row gap-10">
                <ul className="flex flex-row flex-wrap md:flex-row gap-5 mx-3">
                    {categories.map((category) => (
                        <li 
                            key={category}
                            onClick={() => setActiveTab(category)}
                            className={`px-5 py-2 rounded-xl cursor-pointer transition-colors duration-300 ${
                                activeTab === category 
                                    ? "bg-[#ff8900] text-white font-bold" 
                                    : "bg-gray-300 text-black hover:bg-gray-400"
                            }`}
                        >
                            {category}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 w-full place-items-center">
                {filteredImages.map((item) => (
                    <div key={item.id} className="flex flex-col gap-2 shadow-lg rounded-lg p-2 ">
                        <img className="w-75 h-50 rounded-lg object-cover hover:scale-105 transition-transform duration-300 cursor-pointer" src={item.image} alt={item.title} />
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                        <p className="text-gray-600">{item.type}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SecCards;