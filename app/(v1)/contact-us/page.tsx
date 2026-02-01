import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { contactInformations } from "@/data";
import { ContactInformation } from "@/typescript/types";
import { DynamicIcon } from "lucide-react/dynamic";
import ContactForm from "@/components/forms/ContactForm/ContactForm";
import SectionHeader from "@/components/common/SectionHeader/SectionHeader";

const ContactUsPage = () => {
  return (
    <section className="section bg-linear-to-t from-white to-blue-200/50">
      <div className="container mt-[52px] space-y-[52px]">
        <header>
          <SectionHeader
            title="Get In"
            highlight="Touch"
            description="Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible."
            position="center"
            titleClassName="text-5xl"
            className="w-full max-w-[728px] mx-auto"
          />
        </header>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-4 space-y-4">
            <h3 className="text-2xl font-semibold">Contact Information</h3>
            {contactInformations.map((info) => (
              <ContactInformationCard
                key={info.id}
                info={info}
              />
            ))}
          </div>
          <div className="col-span-12 lg:col-span-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactInformationCard = ({ info }: { info: ContactInformation }) => {
  return (
    <Card className="flex-row items-center p-3 rounded-2xl">
      <CardHeader className="p-0 w-12 h-12 gap-0 grid-cols-1 grid-rows-1 items-center justify-center text-center">
        <span className="w-full h-full flex justify-center items-center bg-blue-500/10 rounded-xl">
          <DynamicIcon
            name={info.icon}
            size={24}
            color="#2563eb"
          />
        </span>
      </CardHeader>
      <CardContent className="space-y-1 pl-0">
        <CardTitle>{info.title}</CardTitle>
        <CardDescription>{info.content}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default ContactUsPage;
