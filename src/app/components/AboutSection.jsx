"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li><b>Hard Skill :</b> <i>Business Analysis, BPMN, SDLC, User Requirement Needs, Technical Document, Project Management, ERP System, Design Diagram</i></li><br />
        <li><b>Soft Skill:</b> <i> Communication, Collaboration, Leadership, Problem Solving, Time Management </i></li><br />
        <li><b>Tools     :</b> <i> Microsoft Visio, Draw.io, Figma, Jira, Adobe illustrator, SQL, Canva, Video Editor, Google Worksapce, Microsoft Office Suite </i></li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>SMA Negeri 4 Cirebon</li>
        <li>Universitas Ahmad Dahlan, Yogyakarta</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>IT Infrastructure and Emerging Trens - Coursera</li>
        <li>Intermediate Multimedia Designer - BNSP Kominfo</li>
        <li>UI/UX Training III - Ruang Ekspresi UAD</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/CLS07378.jpg" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I am an IT graduate with a solid foundation in system and business process analysis, particularly skilled in BPMN and technical documentation. My critical thinking and communication skills help me effectively translate business needs into technological solutions. I thrive in team settings and am enthusiastic about contributing to projects that push the boundaries of technology and business efficiency.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
