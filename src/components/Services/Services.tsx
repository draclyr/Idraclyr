
import { FaBoxes, FaLayerGroup, FaReact, FaCog, FaCubes, FaCodeBranch } from 'react-icons/fa';

const features = [
  {
    icon: <FaBoxes size={30} />,
    title: "Made to display my resume",
    description: "In this template, I show my abilities and I made this template professionally.",
  },
  {
    icon: <FaLayerGroup size={30} />,
    title: "High-quality Design",
    description: "I have created high quality for the design of this template which has day and night themes.",
  },
  {
    icon: <FaReact size={30} />,
    title: "Next.js",
    description: "This template is based on nextjs, which is one of the most important front-end frameworks.",
  },
  {
    icon: <FaCog size={30} />,
    title: "Tailwind CSS",
    description: "I have been using Tailwind css library a lot to better design the template and I hope to show css capabilities with this library.",
  },
  {
    icon: <FaCubes size={30} />,
    title: "Fully Customizable",
    description: "The template is designed in such a way that it is fully compatible with all dimensions and has full compatibility.",
  },
  {
    icon: <FaCodeBranch size={30} />,
    title: "Free and Open-Source",
    description: "I put this template completely free on GitHub so that developers can benefit from this template.",
  },
];

const MainServices = () => {
  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Main Features</h2>
        <p className="text-gray-400 mb-10">There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.</p>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {features.map((services, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg text-left flex items-start">
              <div className="text-blue-500 mr-4">{services.icon}</div>
              <div>
                <h3 className="text-xl font-semibold">{services.title}</h3>
                <p className="text-gray-400 mt-2">{services.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainServices;

