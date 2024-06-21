"use client";
import Image from "next/image";
import React from "react";
import {
  StackedCarousel,
  ResponsiveContainer,
} from "react-stacked-center-carousel";

// Data with corrected title
export const data = [
  {
    cover: "/assets/Gallery/01.jpg",
    title: "Interstellar",
  },
  {
    cover: "/assets/Gallery/02.jpg",
    title: "Inception",
  },
  {
    cover: "/assets/Gallery/03.jpg",
    title: "Blade Runner 2049",
  },
  {
    cover: "/assets/Gallery/04.jpg",
    title: "Iron Man 3",
  },
  {
    cover: "/assets/Gallery/05.jpg",
    title: "Venom",
  },
  {
    cover: "/assets/Gallery/06.jpg",
    title: "Steins Gate",
  },
  {
    cover: "/assets/Gallery/07.jpg",
    title: "One Punch Man",
  },
  {
    cover: "/assets/Gallery/08.jpg",
    title: "A Silent Voice",
  },
];
type CardProps = {
    data: { cover: string, title: string }[],
    dataIndex: number
  };

// Card component definition
export const Card = React.memo(function CardComponent(props: CardProps) {
    const { data, dataIndex } = props;
    const { cover } = data[dataIndex];
    return (
      <div className="p-1 bg-white rounded-md overflow-hidden">
        <Image
          draggable={false}
          src={cover}
          alt={`Slide ${dataIndex}`}
          width={500}
          height={500}
          className="rounded-lg shadow-xl"
        />
      </div>
    );
  });

// ResponsiveCarousel component definition
export default function ResponsiveCarousel() {
    const ref = React.useRef();
    return (
      <div className="w-full  my-24 overflow-hidden flex justify-center">
        <div className="w-2/3">
        <ResponsiveContainer
          carouselRef={ref}
          render={(parentWidth, carouselRef) => {
            let currentVisibleSlide = 5;
            if (parentWidth <= 1440) currentVisibleSlide = 3;
            if (parentWidth <= 768) currentVisibleSlide = 1;
            return (
              <StackedCarousel
                ref={carouselRef}
                slideComponent={Card}
                slideWidth={parentWidth < 800 ? parentWidth - 40 : 750}
                carouselWidth={parentWidth}
                data={data} 
                currentVisibleSlide={currentVisibleSlide}
                maxVisibleSlide={5}
                useGrabCursor
              />
            );
          }}
        />

        </div>
       
      </div>
    );
  }
