import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { aboutStats, instructors } from "@/data";
import StatsCard from "@/components/cards/StatsCard/StatsCard";
import SectionHeader from "@/components/common/SectionHeader/SectionHeader";
import InstrcutorProfileCard from "@/components/cards/InstrcutorProfileCard/InstrcutorProfileCard";

const AboutUsPage = () => {
  return (
    <section className="section bg-linear-to-t from-white to-blue-200/50">
      <div className="container mt-[42px]">
        <div className="space-y-[52px] mt-11">
          {/* Page Header */}
          <header aria-label="About Edvanta">
            <SectionHeader
              title="About"
              highlight="Edvanta"
              description="We're on a mission to make quality education accessible to everyone. Our platform connects learners with world-class instructors, offering courses that transform careers and lives."
              position="center"
              className="w-full max-w-[728px] mx-auto"
              titleClassName="text-5xl"
            />
          </header>
          {/* Stats Section */}
          <section aria-labelledby="stats-heading">
            <h2
              id="stats-heading"
              className="sr-only"
            >
              Statistics
            </h2>
            <ul
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              role="list"
            >
              {aboutStats.map((stats) => (
                <li key={stats.id}>
                  <StatsCard stats={stats} />
                </li>
              ))}
            </ul>
          </section>
          {/* Mission Section */}
          <section
            className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center"
            aria-labelledby="mission-heading"
          >
            <h2
              id="mission-heading"
              className="sr-only"
            >
              Our Mission
            </h2>

            <article className="space-y-6">
              <h3 className="text-4xl font-bold">Our Mission</h3>
              <p className="text-gray-500">
                At Edvanta, we believe that education is the key to unlocking
                human potential. Our mission is to democratize learning by
                providing high-quality, affordable courses taught by industry
                experts.
              </p>
              <p className="text-gray-500">
                Whether you're looking to advance your career, learn a new
                skill, or explore a passion, we're here to support your journey
                every step of the way.
              </p>
            </article>
            {/* Community CTA */}
            <aside
              aria-labelledby="Community Call to Action"
              className="gradient-left-to-right p-12 text-white flex flex-col justify-center items-center gap-6 text-center rounded-3xl"
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Join Our Community</h3>
                <p>
                  Become part of a global community of learners and start your
                  transformation today.
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-5xl font-bold">50,000+</p>
                <p>Happy Students</p>
              </div>
            </aside>
          </section>
          {/* Instructors Section */}
          <section aria-labelledby="instructors-heading">
            <h2
              id="instructors-heading"
              className="sr-only"
            >
              Meet Our Expert Instructors
            </h2>
            <header className="flex items-center justify-between">
              <SectionHeader
                title="Meet Our Expert Instructors"
                description="Explore our Popular Instructor"
              />
              <Button
                asChild
                variant="outline"
                className="px-6 py-3 text-base lg:text-lg rounded-4xl h-10 bg-transparent! border-primary text-primary hover:text-primary"
                aria-label="View all instructors"
              >
                <Link href="/instructors">All Instructors</Link>
              </Button>
            </header>
            <ul
              className="mt-[52px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              role="list"
            >
              {instructors.map((instructor) => (
                <li key={instructor.id}>
                  <InstrcutorProfileCard instructor={instructor} />
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
};

export default AboutUsPage;
