"use client";

import * as React from "react";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { HiStar } from "react-icons/hi2";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

const testimonials = [
  {
    name: "Elena K.",
    role: "English Professor",
    image: "https://i.pravatar.cc/150?u=elena",
    text: "As a teacher, LinguistAI has saved me hours of grading. I can focus more on one-on-one speaking practice now.",
  },
  {
    name: "Marco S.",
    role: "Student from Italy",
    image: "https://i.pravatar.cc/150?u=marco",
    text: "The AI writing feedback is better than any human teacher I've had. It catches nuances I never even thought about.",
  },
  {
    name: "Yuki T.",
    role: "Student from Japan",
    image: "https://i.pravatar.cc/150?u=yuki",
    text: "The mobile app is so smooth. I do my 15-minute lessons on the train every morning and I've already improved my TOEFL.",
  },
  {
    name: "David L.",
    role: "Business Professional",
    image: "https://i.pravatar.cc/150?u=david",
    text: "Perfect for busy schedules. The real-time feedback on my pronunciation was exactly what I needed for my meetings.",
  },
];

const Testimonials = () => {
  const plugin = useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: true,
      stopOnMouseEnter: true,
    })
  );

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl font-extrabold text-[#1A1F36]">
            Loved by Students Everywhere
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative px-12">
          <Carousel
            plugins={[plugin.current]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((t, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="h-full bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                    
                    {/* Stars */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <HiStar
                          key={i}
                          className="text-yellow-400 text-lg"
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-gray-600 leading-relaxed italic mb-8">
                      {t.text}
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-4 mt-auto">
                      <Image
                        width={48}
                        height={48}
                        src={t.image}
                        alt={t.name}
                        className="w-12 h-12 rounded-full border-2 border-gray-50 object-cover"
                      />

                      <div>
                        <h4 className="font-bold text-[#1e2d6d] text-sm">
                          {t.name}
                        </h4>
                        <p className="text-gray-400 text-xs">
                          {t.role}
                        </p>
                      </div>
                    </div>

                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;