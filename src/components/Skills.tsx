import React from 'react';

const skillsList = {
  lenguajes: ["JavaScript", "TypeScript", "HTML", "CSS"],
  librerias: [
    "React.js",
    "Next.js",
    "Redux",
    "Material-UI (MUI)",
    "Chakra UI",
    "Axios",
    "Framer Motion",
  ],
  herramientas: [
    "Git",
    "Firebase",
    "MongoDB",
    "MySQL",
    "Vite",
    "ESLint",
    "Prettier",
    "Figma",
    "Canva",
  ],
};

export const Skills = () => {
  return (
    <div className="px-12 py-6">
      <h2 className="text-3xl font-bold mb-6 text-left uppercase">Skills</h2>

      {Object.entries(skillsList).map(([category, items]) => (
        <div key={category} className="mb-10">
          <h3 className="text-xl font-semibold mb-4 text-white uppercase">
            {category}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {items.map((item) => (
              <div
                key={item}
                className="bg-[#838383] text-white px-4 py-2 rounded-full text-center shadow-md border border-white/20 hover:scale-105 transition-transform duration-200"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
