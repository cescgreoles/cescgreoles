import React from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiRedux,
  SiNextdotjs,
  SiMui,
  SiChakraui,
  SiAxios,
  SiFramer,
  SiFirebase,
  SiMongodb,
  SiMysql,
  SiVite,
  SiEslint,
  SiPrettier,
  SiCanva,
} from "react-icons/si";

// Mapeo de íconos según el nombre del skill
const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  HTML: FaHtml5,
  CSS: FaCss3Alt,
  "React.js": FaReact,
  "Next.js": SiNextdotjs,
  Redux: SiRedux,
  "Material-UI (MUI)": SiMui,
  "Chakra UI": SiChakraui,
  Axios: SiAxios,
  "Framer Motion": SiFramer,
  Git: FaGitAlt,
  Firebase: SiFirebase,
  MongoDB: SiMongodb,
  MySQL: SiMysql,
  Vite: SiVite,
  ESLint: SiEslint,
  Prettier: SiPrettier,
  Figma: FaFigma,
  Canva: SiCanva,
};

const skillsList: Record<string, (keyof typeof iconMap)[]> = {
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

interface SkillCardProps {
  name: string;
  Icon: React.ComponentType<{ size?: number }>;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, Icon }) => {
  return (
    <div className="group [perspective:1000px]">
      <div className="relative w-full h-16 transition-transform duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        
        <div className="absolute inset-0  text-white flex items-center justify-center rounded-full border border-white/20 shadow-md [backface-visibility:hidden]">
          {name}
        </div>

      
        <div className="absolute inset-0 bg-[#838383] text-black flex items-center justify-center rounded-full border border-white/20 shadow-md [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <Icon size={32} />
        </div>
      </div>
    </div>
  );
};

export const Skills = () => {
  return (
    <div className="px-12 py-6 mt-10">
      <h2 className="text-3xl font-bold mb-8 text-left uppercase text-white">
        Habilidades
      </h2>

      {Object.entries(skillsList).map(([category, items]) => (
        <div key={category} className="mb-10">
          <h3 className="text-xl font-semibold mb-4 text-white uppercase">
            {category}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {items.map((item) => {
              const Icon = iconMap[item] || (() => <span>🎯</span>);
              return <SkillCard key={item} name={item} Icon={Icon} />;
            })}
          </div>
        </div>
      ))}
    </div>
  );
};
