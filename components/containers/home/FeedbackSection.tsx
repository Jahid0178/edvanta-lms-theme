"use client";

import React from "react";
import { CircleCheckBig } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Swiper, SwiperSlide } from "swiper/react";
import { feedbacks } from "@/data";
import { Autoplay } from "swiper/modules";
import FeedbackCard from "@/components/cards/FeedbackCard/FeedbackCard";
import SectionHeader from "@/components/common/SectionHeader/SectionHeader";

const FeedbackSection = () => {
  return (
    <section className="section bg-linear-to-r from-secondary/80 to-primary/80">
      <div className="container">
        <div className="flex items-center justify-center flex-col gap-6">
          <Badge
            className="px-4 py-2 flex gap-2 bg-green-100 border-none text-green-700"
            variant={"outline"}
          >
            <CircleCheckBig
              size={16}
              style={{ width: 16, height: 16 }}
            />{" "}
            Success Story
          </Badge>
          <SectionHeader
            title="Student Feedback"
            description="Explore the feedback from our students"
            position="center"
            className="text-white"
            descriptionClassName="text-white"
          />
        </div>
        <div className="mt-[56px]">
          <Swiper
            slidesPerView={1}
            spaceBetween={32}
            loop={true}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
          >
            {feedbacks.map((feedback) => (
              <SwiperSlide key={feedback.id}>
                <FeedbackCard feedback={feedback} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;
