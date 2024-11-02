import Link from "next/link";
import React from 'react';


const Hero: React.FC = () => {
  return (
    <div style={styles.container}>
      <div style={styles.overlay}>
        <h3 style={styles.heading}>Draclyr Web template</h3>
        <p style={styles.subheading}>Professional Tampalte for topics: Corporate and personal resume.
          <br />
          Made by Hesam Shahmoradi</p>
        <br />
        <Link
          href="https://github.com/draclyr"
          className="btn rounded-sm  px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out"
        >
          🧛🏻 My Github
        </Link>
        <br />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50vh',
    backgroundImage: 'url("/background.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative' as 'relative',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: '40px',
    borderRadius: '8px',
    textAlign: 'center' as 'center',
  },
  heading: {
    color: 'white',
    fontSize: '40px',
    fontWeight: 'bold' as 'bold',
    margin: '0',
  },
  subheading: {
    color: 'white',
    fontSize: '24px',
    margin: '10px 0',
  },
  author: {
    color: '#9CC0FF',
    fontSize: '32px',
    margin: '0',
  },

};

export default Hero;
