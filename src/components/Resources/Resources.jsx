"use client"
import BlogCard from "../Card/BlogCard";
import SectionHeading from "../SectionHeading/SectionHeading"
import { v4 as uuidv4 } from 'uuid';
import blog_1 from "@/assets/images/blog-1.jpg"
import blog_2 from "@/assets/images/blog-2.jpg"
import blog_3 from "@/assets/images/blog-3.jpg"

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';



const options = {
    type: "loop",
    gap: "1.5rem",
    arrows: true,
    padding: { left: '7rem', right: '7rem' },
    perPage: 3,
    perMove: 1,
    pagination: false,
    
  //   autoplay:"play",
//   padding: "80px",
    breakpoints: {
      600: {
        perPage: 1,
        gap: "1.5rem",
      },
      1440: {
        perPage: 2,
        gap: "1.5rem",
      },
    },
  };


const slideData = [
    {
        id: uuidv4(),
        img: blog_1,
        title: "Umbrella Printing: Unlocking Creative",
        desc: "When it comes to promotional products, umbrellas have always been a popular choice. They not"
    },
    {
        id: uuidv4(),
        img: blog_2,
        title: "Umbrella Printing: Unlocking Creative",
        desc: "When it comes to promotional products, umbrellas have always been a popular choice. They not"
    },
    {
        id: uuidv4(),
        img: blog_3,
        title: "Umbrella Printing: Unlocking Creative",
        desc: "When it comes to promotional products, umbrellas have always been a popular choice. They not"
    },
    {
        id: uuidv4(),
        img: blog_1,
        title: "Umbrella Printing: Unlocking Creative",
        desc: "When it comes to promotional products, umbrellas have always been a popular choice. They not"
    },
    {
        id: uuidv4(),
        img: blog_2,
        title: "Umbrella Printing: Unlocking Creative",
        desc: "When it comes to promotional products, umbrellas have always been a popular choice. They not"
    },
]

const Resources = () => {
    
  return (
    <section className="py-[60px] xl:py-[130px]">
        <div className="container">
            <SectionHeading subheading={"Resources"} heading={"Blogs about Innotex"} shortText={false} />
        </div>
        <div>
        <Splide 
            aria-label="resources"
            options={options}
        >
            
        {slideData?.map( (slide_data) => (
            <SplideSlide key={slide_data.id} className="py-3">
                <BlogCard  cardData={slide_data} />
            </SplideSlide>
        ) )}    
        </Splide>
        </div>
    </section>
  )
}

export default Resources