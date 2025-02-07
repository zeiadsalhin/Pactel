import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Pagination, Autoplay } from "swiper/modules";

const slides = [
  { img: 'https://pactel.site/.netlify/images?q=50&url=%2Feid.webp&fit=cover&q=50&fm=webp&w=940&h=788', link: "https://www.facebook.com/photo?fbid=406425705482003&set=a.129833936474516", alt: "lecture" },
  { img: 'https://pactel.site/.netlify/images?q=50&url=%2Fcourse.webp&fit=cover&q=50&fm=webp&w=940&h=788', link: "", alt: "course" },
  { img: 'https://pactel.site/.netlify/images?q=50&url=%2Fenroll.webp&fit=cover&q=50&fm=webp&w=940&h=788', link: "", alt: "enroll" },
  { img: 'https://pactel.site/.netlify/images?q=50&url=%2Fme.webp&fit=cover&q=50&fm=webp&w=940&h=788', link: "https://realestate21.netlify.app", alt: "middleeast" },
  { img: 'https://pactel.site/.netlify/images?q=50&url=%2Fhire.webp&fit=cover&q=50&fm=webp&w=940&h=788', link: "https://wa.me/201004416036", alt: "job" },
  { img: 'https://pactel.site/.netlify/images?q=50&url=%2Flogo_preview.webp&fit=cover&q=50&fm=webp&w=940&h=788', link: "", alt: "logo" },
  { img: 'https://pactel.site/.netlify/images?q=50&url=%2Flec.webp&fit=cover&q=50&fm=webp&w=940&h=788', link: "https://www.facebook.com/Pactel1/posts/pfbid02xZ8yr1eWKGSipxEhbMnQhwG8NpNSrMZuJN3qCYYeY548CL6BuyjwsQDqFrT7RdZWl", alt: "lecture" },
];

export default function SwiperSlider() {
  return (
    <>
      <div className="flex justify-center p-2 m-2 bg-gray-100 dark:bg-gray-500 dark:text-gray-200 text-gray-800 md:max-w-[100rem] mx-auto min-h-[50px] rounded">
        <h1 className="my-auto text-3xl">News</h1>
        <img className="p-1 my-auto dark:invert" src='https://pactel.site/.netlify/images?q=50&url=%2Fnew.webp&fit=cover&q=100&fm=webp&w=50&h=40' width="50" height="40" alt="new" />
      </div>
      <div className="md:w-1/2 lg:w-1/2 mx-auto min-h-[300px]">
        <Swiper
          modules={[EffectFade, Pagination, Autoplay]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          pagination={{ clickable: false }}
          className="swiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              {slide.link ? (
                <a href={slide.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={slide.img}
                    alt={slide.alt}
                    className="mx-auto p-2 scale-100 hover:scale-105 transform transition duration-500"
                    loading="lazy"
                    width="700"
                    height="400" // Set a fixed height to reduce CLS
                  />
                </a>
              ) : (
                <img
                  src={slide.img}
                  alt={slide.alt}
                  className="mx-auto p-2 scale-100 hover:scale-105 transform transition duration-500"
                  loading="lazy"
                  width="700"
                  height="400" // Set a fixed height to reduce CLS
                />
              )}
            </SwiperSlide>
          ))}
          {/* Pagination Dots */}
          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
    </>
  );
}
