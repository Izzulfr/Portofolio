"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Sistem Informasi Emiten",
    description: "Pengembangan sistem website untuk mengelola emiten. Dibangun menggunakan Laravel 10",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://www.figma.com/proto/lfmr4ygD8lyiTHnTlDGBvA/Emitter?node-id=346-8764&t=Km80Ruj2YtcPEuOZ-0&scaling=contain&page-id=0%3A1&starting-point-node-id=346%3A8764&show-proto-sidebar=1",
  },
  {
    id: 2,
    title: "Emiten Website",
    description: "Pengembangan sistem website untuk mengelola emiten. Dibangun menggunakan Laravel 10",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Technical Document",
    description: "Product Requirement Document yang di buat menggunakan Notion",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://www.notion.so/Product-Requirements-Doc-5b13e38c9ec943609e8de244c850d174",
  },
  {
    id: 4,
    title: "Yayasan Nur Assyifa Website",
    description: "Landing page Yayasan yang bergerak di bidang sosial, kemanusiaan, dan keagamaan. dibangun dengan menggunakan boostrap",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://www.yayasannurassyifasamarinda.com/",
  },
  {
    id: 5,
    title: "Prototype Aplikasi Kesehatan Gigi Puskesmas Mlonggo",
    description: "Dibangun dengan menggunakan pendekatan Design Thinking dan menggunakan Figma",
    image: "/images/projects/13.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "https://www.figma.com/proto/ycqZHdvqept5xtYmroYmjT/Dentist-Puskesmas-Mlonggo-jepara?node-id=201-1260&t=FxLgU7mjSYAaAynT-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=201%3A1260&show-proto-sidebar=1",
  },
  {
    id: 6,
    title: "Management Project",
    description: "Dibuat menggunakan Jira Software Development untuk mempermudah tim dalam menyelesaikan task",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://izzulfaturrizky.atlassian.net/jira/software/c/projects/WTD/boards/2/backlog?epics=visible",
  },
  {
    id: 7,
    title: "Prototype Bintang Pustaka Media Website",
    description: "Naskah Tracking Page yang dibuat untuk memudahkan user melihat progres naskahnya. dibuat menggunakan Figma",
    image: "/images/projects/9.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://www.figma.com/proto/Wuqb7Zi22tLJMY2J9gnMR8/Bintang-Pustaka?node-id=31-403&t=26Q4xHEdj34AFgeI-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A1906&show-proto-sidebar=1",
  },
  {
    id: 8,
    title: "Technical Document",
    description: "Business Requirement Document WMS dibuat menggunakan analisis requirement dan microsoft office suite",
    image: "/images/projects/7.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 9,
    title: "Prototype Aplikasi BNI M Banking",
    description: "Merupakan project Redesign BNI Banking pada tahun 2020, dibuat menggunakan figma",
    image: "/images/projects/12.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 10,
    title: "Prototype Aplikasi Koperasi Wiwara",
    description: "Aplikasi yang dibuatkan untuk memudahkan koperasi wiwawara yogyakarta dalam melakukan kegiatan simpan pinjam, dibuat menggunakan Figma",
    image: "/images/projects/11.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "https://www.figma.com/proto/abINLft2eipLlfVX7yhbMM/KOPERASI-WIWARA?node-id=2-3679&t=jVfsLukgudVqbjIy-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A3679&show-proto-sidebar=1",
  },
  {
    id: 11,
    title: "Protoype Website Panti Protoyudan",
    description: "Merupakan websiten rancang bangun untuk panti protoyudan jepara. Dibuat menggunakan pendekatan design thinking dan interactive konten menggunakan Figma",
    image: "/images/projects/10.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://www.figma.com/proto/vFe2khexsMdssnzDA1AHFr/Panti-Potroyudan?node-id=0-1",
  },
  {
    id: 12,
    title: "Sistem Informasi Kesehatan Gigi Tansdent",
    description: "Website yang digunakan untuk mengetahui kesehatan gigi anak dengan game dan kuis, dibuat menggunakan Laravel",
    image: "/images/projects/8.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://tansdent.com/",
  },
  {
    id: 13,
    title: "Ai Videos Generate Website",
    description: "Merupakan prototype redesign ai videos dibuat menggunakan Figma",
    image: "/images/projects/14.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://ads-creator-copy.vercel.app/",
  },
  {
    id: 14,
    title: "Prototype Aplikasi Basketball Store",
    description: "Project pribadi tentang e-commerce menjual perlengkapan bola basket, prototype dibuat menggunakan Figma",
    image: "/images/projects/15.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
