import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import ServiceCard from "@/components/ServiceCard";
import fsPromises from "fs/promises";
import path from "path";
import { FC } from "react";
import { GetStaticProps } from "next";
import Intro from "@/components/Intro";
import AboutUs from "@/components/AboutUs";
import ContactUs from "@/components/ContactUs";

type ServiceCardDetails = {
  title: string;
  content: string;
  image: string;
  id: string;
};
type HomeProps = {
  serviceCardDetails: ServiceCardDetails[];
};
export default function Home({ serviceCardDetails }: HomeProps) {
  return (
    <Layout>
      <Intro />
      <div id="services" className="sm:grid sm:grid-cols-2 lg:flex lg:flex-col">
        {serviceCardDetails.map((card, index) => (
          <ServiceCard
            key={index}
            id={card.id}
            title={card.title}
            content={card.content}
            image={card.image}
            row={index % 2 === 0 ? "flex-row-reverse" : ""}
          />
        ))}
      </div>
      <AboutUs />

      <ContactUs />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const introFilePath = path.join(
    process.cwd(),
    "/public/assets/data/serviceCardDetails.json"
  );
  const introJsonData = await fsPromises.readFile(introFilePath);
  const introObjectData = JSON.parse(introJsonData.toString());

  return {
    props: {
      serviceCardDetails: introObjectData.serviceCardData,
    },
  };
};
