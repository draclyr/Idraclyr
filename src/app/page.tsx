import AboutSection from "@/components/About/AboutSection";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Services from "@/components/Services";
import Hero from "@/components/Hero";
import { Metadata } from "next";
import ProjectCard from '../components/Project/ProjectCard';
import styles from '../styles/Home.module.css';
import React from 'react';

export const metadata: Metadata = {
  title: "Draclyr",
  description: "✅ Professional template for corporate and personal topics and resume based on (Next JS, Typescript) which has special features.",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Services />
      <AboutSection />
      <div className={styles.container}>
        <h1 className={styles.title}>My Projects</h1>
        <div className={styles.projectList}>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
            />
          ))}
        </div>
      </div>
      <Contact />
    </>
  );
}


const projects = [
  {
    title: "Nexgen",
    description: "💻free template for general use, fast, advanced and compatible with all browsers and platforms.",
    imageUrl: "/images/Project/nexgen.jpg",
  },
  {
    title: "Ronic",
    description: "📱A professional project based on important front- end languages.",
    imageUrl: "/images/Project/ronic.jpg",
  },
  {
    title: "Liboshop",
    description: "🛍️Shop template with focus on html, css and javascript. ",
    imageUrl: "/images/Project/liboshop.jpg",
  },
];