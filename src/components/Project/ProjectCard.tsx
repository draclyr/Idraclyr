// components/ProjectCard.tsx
import React from 'react';
import styles from '..////////.//././/.//.././styles/ProjectCard.module.css';
import Link from "next/link";

type ProjectCardProps = {
  title: string;
  description: string;
  imageUrl: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className='allcard rounded-lg dark:bg-gray-800 dark:text-white bg-[#F4F6FF] text-black '>
      <div className={styles.card}>
        <img src={imageUrl} alt={title} className={styles.image} />
        <div className={styles.content}>
          <h2>{title}</h2>
          <p>{description}</p>
          <Link
            href="https://github.com/draclyr"
            className="Probtn rounded-sm  px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out"
          >
            🧛🏻 My Github
          </Link>
        </div>
      </div>
    </div>
  );
};


export default ProjectCard;
