"use client";
// latest, different, eco, production
import { latest, different, eco, production } from "@/icons/icon";
import SectionHeading from "../SectionHeading/SectionHeading";
import WelcomeCard from "./WelcomeCard";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Section from "../Section/Section";

const options = {
  type: "slide",
  gap: "1.5rem",
  arrows: false,
  perPage: 3.3,
  perMove: 1,
  pagination: false,
  breakpoints: {
    600: {
      perPage: 1.3,
      gap: "1rem",
    },
  },
};

const cardList = [
  {
    id: 1,
    icon: latest,
    heading: "Latest technology",
    desc: "World's latest technology printing machine",
  },
  {
    id: 2,
    icon: different,
    heading: "Different Countries",
    desc: "Working in 6+ countries",
  },
  {
    id: 3,
    icon: eco,
    heading: "Eco-friendly",
    desc: "Eco-friendly Machine",
  },
  {
    id: 4,
    icon: production,
    heading: "Productions",
    desc: "World's latest technology printing machine",
  },
  {
    id: 5,
    icon: latest,
    heading: "Latest technology",
    desc: "Less cost, less time, and more production",
  },
  {
    id: 6,
    icon: eco,
    heading: "Latest technology",
    desc: "World's latest technology printing machine",
  },
];

const Welcome = () => {
  return (
    <Section>
        <SectionHeading
            subheading="Welcome to Innotex Transfer"
            heading="Why We Are"
            description="Our strengths and Advantage discover what makes Us the most reliable and effective partner for your business."
        />

        <div className="mt-[60px]">
            <Splide
            options={options}
            aria-labelledby="item-slider-drag"
            >
            {cardList.map((card) => {
                return (
                <SplideSlide key={card.id}>
                    <WelcomeCard
                    icon={card.icon}
                    heading={card.heading}
                    desc={card.desc}
                    />
                </SplideSlide>
                );
            })}
            </Splide>
        </div>
    </Section>
  );
};

export default Welcome;
