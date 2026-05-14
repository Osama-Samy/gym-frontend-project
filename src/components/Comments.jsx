import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { FaStar } from 'react-icons/fa';
import p1 from "../assets/person-1.jpg";
import p2 from "../assets/person-2.jpg";
import p3 from "../assets/person-3.jpg";
import p4 from "../assets/person-4.jpg";
import p5 from "../assets/person-5.jpg";
import p6 from "../assets/person-6.jpg";

const testimonialsData = [
    {
        id: 1,
        name: "Osama Samy",
        subname: "Osama Samy",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        image: p1
    },
    {
        id: 2,
        name: "Mohamed Fathy",
        subname: "Mohamed Fathy",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        image: p2
    },
    {
        id: 3,
        name: "Ahmed Sameh",
        subname: "Ahmed Sameh",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        image: p3
    },
    {
        id: 4,
        name: "Sarah",
        subname: "Sarah",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        image: p4
    },
    {
        id: 5,
        name: "Ahmed Ali",
        subname: "Ahmed Ali",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        image: p5
    },
    {
        id: 6,
        name: "Mohamed Hisham",
        subname: "Mohamed Hisham",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        image: p6
    }
];

const Comments = () => {
    return (
        <div className="py-20 px-6 md:px-20 bg-[#fafafa]">
            <style>
                {`
                .swiper-pagination-bullet-active {
                    background-color: #ff8900 !important;
                }
                .swiper-pagination-bullets.swiper-pagination-horizontal {
                    bottom: 0px !important;
                }
                `}
            </style>

            <h2 className="text-3xl md:text-4xl font-bold mb-12 max-w-md leading-snug text-gray-900">
                What Are The Costumer Saying About Us
            </h2>

            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                modules={[Pagination]}
                className="w-full pb-16"
            >
                {testimonialsData.map((item) => (
                    <SwiperSlide key={item.id} className="h-auto">
                        <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col gap-6 h-full mb-8">
                            <div className="flex items-center gap-4">
                                <img 
                                    src={item.image} 
                                    alt={item.name} 
                                    className="w-16 h-16 rounded-full object-cover" 
                                />
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
                                    <p className="text-sm text-gray-500">{item.subname}</p>
                                </div>
                            </div>
                            
                            <p className="text-gray-400 text-sm leading-relaxed flex-1">
                                {item.text}
                            </p>
                            
                            <div className="flex gap-1 text-[#facc15] text-lg">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Comments